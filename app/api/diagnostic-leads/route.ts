import { ensureDiagnosticLeadHeaders, saveDiagnosticLead } from '@/lib/server/diagnostic-leads';
import type { DiagnosticAnswerMap, DiagnosticProfile } from '@/lib/diagnostic';

export const runtime = 'nodejs';

type LeadRequestBody = {
  name?: unknown;
  whatsapp?: unknown;
  profile?: unknown;
  answers?: unknown;
  sourceUrl?: unknown;
  website?: unknown;
};

const validProfiles = new Set<DiagnosticProfile>(['professional', 'company']);

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 12_000) {
      return Response.json({ error: 'Solicitação muito grande.' }, { status: 413 });
    }

    const body = (await request.json()) as LeadRequestBody;

    if (typeof body.website === 'string' && body.website.length > 0) {
      return Response.json({ ok: true });
    }

    const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ').slice(0, 80) : '';
    const whatsapp = typeof body.whatsapp === 'string' ? body.whatsapp.replace(/\D/g, '').slice(0, 15) : '';
    const profile = typeof body.profile === 'string' && validProfiles.has(body.profile as DiagnosticProfile)
      ? (body.profile as DiagnosticProfile)
      : null;
    const answers = body.answers && typeof body.answers === 'object' && !Array.isArray(body.answers)
      ? (body.answers as DiagnosticAnswerMap)
      : null;

    if (name.length < 2) {
      return Response.json({ error: 'Informe seu nome.' }, { status: 400 });
    }

    if (whatsapp.length < 10) {
      return Response.json({ error: 'Informe um WhatsApp com DDD.' }, { status: 400 });
    }

    if (!profile || !answers) {
      return Response.json({ error: 'Não foi possível identificar o diagnóstico.' }, { status: 400 });
    }

    await ensureDiagnosticLeadHeaders();
    const lead = await saveDiagnosticLead({
      name,
      whatsapp,
      profile,
      answers,
      sourceUrl: typeof body.sourceUrl === 'string' ? body.sourceUrl : undefined,
    });

    return Response.json({ ok: true, result: lead.result.id }, { status: 201 });
  } catch (error) {
    const isInvalidAnswer = error instanceof Error && error.message.startsWith('Invalid answer');
    if (isInvalidAnswer) {
      return Response.json({ error: 'As respostas do diagnóstico estão incompletas.' }, { status: 400 });
    }

    console.error('Failed to save diagnostic lead', error);
    return Response.json({ error: 'Não foi possível enviar agora. Tente novamente.' }, { status: 500 });
  }
}
