'use client';

import { useEffect } from 'react';
import { captureUtmParameters } from '@/lib/whatsapp';

const utmKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

export function TrafficAttribution() {
  useEffect(() => {
    captureUtmParameters();

    const params = new URLSearchParams(window.location.search);
    const hasIncomingUtm = utmKeys.some((key) => params.has(key));
    const isRetiredInterestAnchor = window.location.hash === '#interesse';
    const shouldStartAtTop =
      isRetiredInterestAnchor ||
      (Boolean(window.location.hash) && hasIncomingUtm);

    if (!shouldStartAtTop) return;

    const entryUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(window.history.state, '', entryUrl);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.requestAnimationFrame(() =>
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' }),
    );

    if (process.env.NODE_ENV === 'development') {
      console.info(
        '[Denkor] Âncora de campanha ignorada; a página foi aberta pelo topo.',
      );
    }
  }, []);

  return null;
}
