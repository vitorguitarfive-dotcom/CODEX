import type { UtmData, WhatsAppContextKey } from '@/lib/whatsapp';

export type WhatsAppClickPayload = {
  page: string;
  cta_id: string;
  contexto: WhatsAppContextKey;
  position: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

export type DiagnosticEventName =
  | 'diagnostic_started'
  | 'diagnostic_profile_selected'
  | 'diagnostic_answer'
  | 'diagnostic_completed'
  | 'diagnostico_start'
  | 'diagnostico_step'
  | 'diagnostico_complete';

function dispatchAnalyticsEvent(eventName: string, data: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('denkor:analytics', { detail: { eventName, ...data } }));
}

export function trackWhatsAppClick(payload: WhatsAppClickPayload) {
  dispatchAnalyticsEvent('whatsapp_click', payload);
  if (payload.cta_id === 'floating-whatsapp') {
    dispatchAnalyticsEvent('whatsapp_floating_click', payload);
  }
}

export function trackDiagnosticEvent(eventName: DiagnosticEventName, data: Record<string, unknown> = {}) {
  dispatchAnalyticsEvent(eventName, data);
}

export function createWhatsAppTrackingPayload({
  ctaId,
  contextKey,
  position,
  utm,
}: {
  ctaId: string;
  contextKey: WhatsAppContextKey;
  position: string;
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
  };
}
