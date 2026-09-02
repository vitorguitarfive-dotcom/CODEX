import { env } from 'cloudflare:workers';
import {
  createDiagnosticLeadsCreatedAtIndexSql,
  createDiagnosticLeadsResultIndexSql,
  createDiagnosticLeadsTableSql,
} from '@/db/schema';
import {
  diagnosticQuestions,
  getDiagnosticResult,
  type DiagnosticAnswerMap,
  type DiagnosticProfile,
} from '@/lib/diagnostic';

type DiagnosticLeadInput = {
  name: string;
  whatsapp: string;
  profile: DiagnosticProfile;
  answers: DiagnosticAnswerMap;
  sourceUrl?: string;
};

type DiagnosticAnswerSummary = {
  questionId: string;
  question: string;
  optionId: string;
  answer: string;
};

type CloudflareBindings = Cloudflare.Env & { DB?: D1Database };

function getDatabase() {
  const database = (env as CloudflareBindings).DB;
  if (!database) throw new Error('D1 binding DB is unavailable');
  return database;
}

function buildAnswerSummary(profile: DiagnosticProfile, answers: DiagnosticAnswerMap) {
  return diagnosticQuestions[profile].map<DiagnosticAnswerSummary>((question) => {
    const optionId = answers[question.id];
    const option = question.options.find((candidate) => candidate.id === optionId);

    if (!option) throw new Error(`Invalid answer for ${question.id}`);

    return {
      questionId: question.id,
      question: question.prompt,
      optionId: option.id,
      answer: option.label,
    };
  });
}

function getCampaignData(sourceUrl?: string) {
  if (!sourceUrl) return { sourceUrl: null, utmSource: null, utmMedium: null, utmCampaign: null };

  try {
    const url = new URL(sourceUrl);
    return {
      sourceUrl: url.toString().slice(0, 1000),
      utmSource: url.searchParams.get('utm_source')?.slice(0, 120) ?? null,
      utmMedium: url.searchParams.get('utm_medium')?.slice(0, 120) ?? null,
      utmCampaign: url.searchParams.get('utm_campaign')?.slice(0, 120) ?? null,
    };
  } catch {
    return { sourceUrl: null, utmSource: null, utmMedium: null, utmCampaign: null };
  }
}

export async function saveDiagnosticLead(input: DiagnosticLeadInput) {
  const database = getDatabase();
  const answers = buildAnswerSummary(input.profile, input.answers);
  const result = getDiagnosticResult(input.profile, input.answers);
  const campaign = getCampaignData(input.sourceUrl);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  await database.batch([
    database.prepare(createDiagnosticLeadsTableSql),
    database.prepare(createDiagnosticLeadsCreatedAtIndexSql),
    database.prepare(createDiagnosticLeadsResultIndexSql),
  ]);

  await database
    .prepare(`
      INSERT INTO diagnostic_leads (
        id, created_at, name, whatsapp, profile, result_id, result_title,
        answers_json, source_url, utm_source, utm_medium, utm_campaign
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      id,
      createdAt,
      input.name,
      input.whatsapp,
      input.profile,
      result.id,
      result.title,
      JSON.stringify(answers),
      campaign.sourceUrl,
      campaign.utmSource,
      campaign.utmMedium,
      campaign.utmCampaign,
    )
    .run();

  return { id, result };
}
