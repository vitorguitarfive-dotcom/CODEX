export const WHATSAPP_COMERCIAL = '5511983002827';

export type WhatsAppContextKey =
  | 'home_hero_profissional'
  | 'home_hero_empresa'
  | 'home_diagnostico'
  | 'home_cta_final'
  | 'profissionais_hero'
  | 'profissionais_especialista'
  | 'formacao_especialista'
  | 'profissionais_consultor'
  | 'profissionais_cta_final'
  | 'empresas_hero'
  | 'empresas_transformation_day'
  | 'empresas_ai_champions'
  | 'empresas_cta_final'
  | 'contato_profissional'
  | 'contato_empresa'
  | 'contato_geral'
  | 'sobre_cta_final'
  | 'header_falar_com_denkor'
  | 'floating_button';

export type WhatsAppLinkExtra = {
  resultado?: string;
  pathname?: string;
  utm?: UtmData;
};

export type UtmData = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
};

export const emptyUtmData: UtmData = {
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmContent: '',
  utmTerm: '',
};

const UTM_STORAGE_KEY = 'denkor_utm';

const messages: Record<
  Exclude<WhatsAppContextKey, 'home_diagnostico' | 'floating_button'>,
  string
> = {
  home_hero_profissional:
    'Olá! Vim pelo site da Denkor e quero me tornar especialista em IA para negócios.',
  home_hero_empresa:
    'Olá! Vim pelo site da Denkor e quero levar IA para minha empresa.',
  home_cta_final:
    'Olá! Vim pelo site da Denkor e quero descobrir meu caminho com IA.',
  profissionais_hero:
    'Olá! Estou na página de Profissionais da Denkor e quero saber mais.',
  profissionais_especialista:
    'Olá! Quero informações sobre a Formação Especialista em IA para Negócios.',
  formacao_especialista:
    'Olá! Quero saber mais sobre a Formação Especialista em IA para Negócios.',
  profissionais_consultor:
    'Olá! Quero informações sobre a Formação Consultor de IA para Empresas.',
  profissionais_cta_final:
    'Olá! Quero encontrar a formação certa para mim na Denkor.',
  empresas_hero:
    'Olá! Estou na página de Empresas da Denkor e quero saber mais.',
  empresas_transformation_day:
    'Olá! Quero agendar um AI Transformation Day para minha empresa.',
  empresas_ai_champions: 'Olá! Quero saber mais sobre o programa AI Champions.',
  empresas_cta_final:
    'Olá! Quero agendar um diagnóstico de IA para minha empresa.',
  contato_profissional:
    'Olá! Quero me tornar especialista em IA para negócios.',
  contato_empresa: 'Olá! Quero levar IA para minha empresa.',
  contato_geral:
    'Olá! Estou na página de contato da Denkor e quero conversar com vocês.',
  sobre_cta_final:
    'Olá! Conheci a abordagem da Denkor e quero conversar sobre IA aplicada a negócios.',
  header_falar_com_denkor:
    'Olá! Vim pelo site da Denkor e quero falar com vocês.',
};

function floatingMessage(pathname = '/') {
  if (pathname.startsWith('/formacoes/especialista-ia-negocios'))
    return messages.formacao_especialista;
  if (pathname.startsWith('/profissionais')) return messages.profissionais_hero;
  if (pathname.startsWith('/empresas')) return messages.empresas_hero;
  if (pathname.startsWith('/contato')) return messages.contato_geral;
  if (pathname.startsWith('/sobre')) return messages.sobre_cta_final;
  if (pathname === '/') return messages.home_cta_final;
  return 'Olá! Vim pelo site da Denkor.';
}

function normalizeUtm(value: Partial<UtmData> | null | undefined): UtmData {
  return {
    utmSource: value?.utmSource ?? '',
    utmMedium: value?.utmMedium ?? '',
    utmCampaign: value?.utmCampaign ?? '',
    utmContent: value?.utmContent ?? '',
    utmTerm: value?.utmTerm ?? '',
  };
}

function readStoredUtm(): UtmData {
  if (typeof window === 'undefined') return emptyUtmData;

  try {
    const stored = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored === null) return emptyUtmData;
    return normalizeUtm(JSON.parse(stored) as Partial<UtmData>);
  } catch {
    return emptyUtmData;
  }
}

export function captureUtmParameters(): UtmData {
  if (typeof window === 'undefined') return emptyUtmData;

  try {
    const stored = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored !== null)
      return normalizeUtm(JSON.parse(stored) as Partial<UtmData>);

    const current = new URLSearchParams(window.location.search);
    const incoming = normalizeUtm({
      utmSource: current.get('utm_source')?.slice(0, 120) ?? '',
      utmMedium: current.get('utm_medium')?.slice(0, 120) ?? '',
      utmCampaign: current.get('utm_campaign')?.slice(0, 120) ?? '',
      utmContent: current.get('utm_content')?.slice(0, 120) ?? '',
      utmTerm: current.get('utm_term')?.slice(0, 120) ?? '',
    });

    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(incoming));
    return incoming;
  } catch {
    const current = new URLSearchParams(window.location.search);
    return normalizeUtm({
      utmSource: current.get('utm_source')?.slice(0, 120) ?? '',
      utmMedium: current.get('utm_medium')?.slice(0, 120) ?? '',
      utmCampaign: current.get('utm_campaign')?.slice(0, 120) ?? '',
      utmContent: current.get('utm_content')?.slice(0, 120) ?? '',
      utmTerm: current.get('utm_term')?.slice(0, 120) ?? '',
    });
  }
}

export function buildWhatsAppLink(
  contextKey: WhatsAppContextKey,
  extra: WhatsAppLinkExtra = {},
) {
  let message: string;

  if (contextKey === 'home_diagnostico') {
    message = `Olá! Fiz o diagnóstico da Denkor e o caminho recomendado foi *${extra.resultado ?? 'um programa Denkor'}*. Quero saber mais.`;
  } else if (contextKey === 'floating_button') {
    message = floatingMessage(extra.pathname);
  } else {
    message = messages[contextKey];
  }

  const utm = extra.utm ?? readStoredUtm();
  const origin = [utm.utmSource, utm.utmCampaign].filter(Boolean).join('/');
  if (origin) message += `\n\n(via ${origin})`;

  return `https://wa.me/${WHATSAPP_COMERCIAL}?text=${encodeURIComponent(message)}`;
}
