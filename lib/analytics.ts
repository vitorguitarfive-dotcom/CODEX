import type { UtmData, WhatsAppContextKey } from '@/lib/whatsapp';

export type WhatsAppPosition =
  | 'header'
  | 'hero'
  | 'card'
  | 'meio'
  | 'final'
  | 'footer'
  | 'flutuante';

export type WhatsAppClickPayload = {
  cta_id: string;
  page: string;
  contexto: string;
  position: WhatsAppPosition;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export type DiagnosticEventName =
  | 'diagnostic_started'
  | 'diagnostic_profile_selected'
  | 'diagnostic_answer'
  | 'diagnostic_completed'
  | 'diagnostico_start'
  | 'diagnostico_step'
  | 'diagnostico_complete';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function dispatchDebugEvent(eventName: string, data: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent('denkor:analytics', { detail: { eventName, ...data } }),
  );
}

export function trackWhatsAppClick(payload: WhatsAppClickPayload) {
  const event = { event: 'whatsapp_click', ...payload };
  pushDataLayer(event);
  dispatchDebugEvent('whatsapp_click', payload);
  if (process.env.NODE_ENV === 'development') {
    document.documentElement.setAttribute(
      'data-last-whatsapp-event',
      JSON.stringify(event),
    );
    console.debug('[Denkor analytics]', event);
  }
}

export function trackDiagnosticEvent(
  eventName: DiagnosticEventName,
  data: Record<string, unknown> = {},
) {
  pushDataLayer({ event: eventName, ...data });
  dispatchDebugEvent(eventName, data);
}

export function createWhatsAppTrackingPayload({
  ctaId,
  contextKey,
  position,
  utm,
}: {
  ctaId: string;
  contextKey: WhatsAppContextKey;
  position: WhatsAppPosition;
  utm: UtmData;
}): WhatsAppClickPayload {
  return {
    page: typeof window === 'undefined' ? '' : window.location.pathname,
    cta_id: ctaId,
    contexto: contextKey,
    position,
    utm_source: utm.utmSource,
    utm_medium: utm.utmMedium,
    utm_campaign: utm.utmCampaign,
    utm_content: utm.utmContent,
    utm_term: utm.utmTerm,
  };
}
