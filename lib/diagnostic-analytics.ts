export type DiagnosticEventName =
  | 'diagnostic_started'
  | 'diagnostic_profile_selected'
  | 'diagnostic_answer'
  | 'diagnostic_completed'
  | 'diagnostic_cta_clicked';

export function trackDiagnosticEvent(eventName: DiagnosticEventName, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('denkor:diagnostic', {
      detail: { eventName, ...data },
    }),
  );
}
