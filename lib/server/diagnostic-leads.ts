import { google } from 'googleapis';
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

type DiagnosticAnswerSummary = { question: string; answer: string };

const spreadsheetHeaders = [
  'Data e hora', 'Nome', 'WhatsApp', 'Perfil', 'Recomendação',
  'ID da recomendação', 'Respostas do diagnóstico', 'URL de origem',
  'UTM source', 'UTM medium', 'UTM campaign',
];

function getGoogleSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!email || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets environment variables are not configured');
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return { sheets: google.sheets({ version: 'v4', auth }), spreadsheetId };
}

function buildAnswerSummary(profile: DiagnosticProfile, answers: DiagnosticAnswerMap) {
  return diagnosticQuestions[profile].map<DiagnosticAnswerSummary>((question) => {
    const optionId = answers[question.id];
    const option = question.options.find((candidate) => candidate.id === optionId);
    if (!option) throw new Error(`Invalid answer for ${question.id}`);
    return { question: question.prompt, answer: option.label };
  });
}

function getCampaignData(sourceUrl?: string) {
  if (!sourceUrl) return { sourceUrl: '', utmSource: '', utmMedium: '', utmCampaign: '' };

  try {
    const url = new URL(sourceUrl);
    return {
      sourceUrl: url.toString().slice(0, 1000),
      utmSource: url.searchParams.get('utm_source')?.slice(0, 120) ?? '',
      utmMedium: url.searchParams.get('utm_medium')?.slice(0, 120) ?? '',
      utmCampaign: url.searchParams.get('utm_campaign')?.slice(0, 120) ?? '',
    };
  } catch {
    return { sourceUrl: '', utmSource: '', utmMedium: '', utmCampaign: '' };
  }
}

export async function saveDiagnosticLead(input: DiagnosticLeadInput) {
  const { sheets, spreadsheetId } = getGoogleSheetsClient();
  const answers = buildAnswerSummary(input.profile, input.answers);
  const result = getDiagnosticResult(input.profile, input.answers);
  const campaign = getCampaignData(input.sourceUrl);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Leads!A:K',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
        input.name,
        input.whatsapp,
        input.profile === 'professional' ? 'Profissional' : 'Empresa',
        result.title,
        result.id,
        answers.map(({ question, answer }) => `${question}: ${answer}`).join('\n'),
        campaign.sourceUrl,
        campaign.utmSource,
        campaign.utmMedium,
        campaign.utmCampaign,
      ]],
    },
  });

  return { result };
}

export async function ensureDiagnosticLeadHeaders() {
  const { sheets, spreadsheetId } = getGoogleSheetsClient();
  const existing = await sheets.spreadsheets.values.get({ spreadsheetId, range: 'Leads!A1:K1' });
  if (existing.data.values?.[0]?.some(Boolean)) return;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Leads!A1:K1',
    valueInputOption: 'RAW',
    requestBody: { values: [spreadsheetHeaders] },
  });
}
