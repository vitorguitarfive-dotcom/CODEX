'use client';

import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { createWhatsAppTrackingPayload, trackWhatsAppClick } from '@/lib/analytics';
import {
  buildWhatsAppLink,
  captureUtmParameters,
  type UtmData,
  type WhatsAppContextKey,
  type WhatsAppLinkExtra,
} from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const emptyUtm: UtmData = { utmSource: '', utmMedium: '', utmCampaign: '' };

type WhatsAppButtonProps = {
  children: ReactNode;
  contextKey: WhatsAppContextKey;
  ctaId: string;
  position: string;
  variant?: 'primary' | 'secondary';
  extra?: Omit<WhatsAppLinkExtra, 'utm'>;
  className?: string;
  microcopyTone?: 'light' | 'dark';
};

export function WhatsAppButton({
  children,
  contextKey,
  ctaId,
  position,
  variant = 'primary',
  extra,
  className,
  microcopyTone = 'light',
}: WhatsAppButtonProps) {
  const [utm, setUtm] = useState<UtmData>(emptyUtm);

  useEffect(() => {
    const timer = window.setTimeout(() => setUtm(captureUtmParameters()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const href = buildWhatsAppLink(contextKey, { ...extra, utm });

  const handleClick = () => {
    trackWhatsAppClick(createWhatsAppTrackingPayload({ ctaId, contextKey, position, utm }));
  };

  return (
    <span className="inline-flex max-w-full flex-col items-start gap-1.5">
      <a
        id={ctaId}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          'group inline-flex min-h-14 max-w-full items-center justify-between gap-6 px-5 text-left font-semibold transition-[background-color,color,border-color,transform] duration-150 focus-visible:outline-[3px] focus-visible:outline-offset-2',
          variant === 'primary'
            ? 'bg-[#dff57a] text-[#101412] hover:bg-white focus-visible:outline-[#dff57a]'
            : 'border border-current text-current hover:bg-[#101412] hover:text-white focus-visible:outline-[#769149]',
          className,
        )}
      >
        <span>{children}</span>
        <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
      <span className={cn('text-[13px] leading-[18px]', microcopyTone === 'dark' ? 'text-white/65' : 'text-[#526057]')}>
        Abre o WhatsApp
      </span>
    </span>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" />
      <path d="M8.2 7.8c.2-.5.4-.5.8-.5h.4c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5 1 1.3 1.8 2.3 2.3.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.7-.5.5-1.2.8-2 .8-1.2 0-3.1-.6-4.8-2.2-1.4-1.3-2.5-3.2-2.5-4.7 0-.8.3-1.5.7-1.9Z" />
    </svg>
  );
}

export function WhatsAppFloating() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [utm, setUtm] = useState<UtmData>(emptyUtm);

  useEffect(() => {
    const utmTimer = window.setTimeout(() => setUtm(captureUtmParameters()), 0);
    const badgeKey = 'denkor_whatsapp_badge_seen';
    try {
      if (!window.sessionStorage.getItem(badgeKey)) {
        window.sessionStorage.setItem(badgeKey, '1');
        const revealTimer = window.setTimeout(() => setShowBadge(true), 0);
        const badgeTimer = window.setTimeout(() => setShowBadge(false), 8000);
        return () => {
          window.clearTimeout(utmTimer);
          window.clearTimeout(revealTimer);
          window.clearTimeout(badgeTimer);
        };
      }
    } catch {
      return () => window.clearTimeout(utmTimer);
    }
    return () => window.clearTimeout(utmTimer);
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(availableScroll > 0 && window.scrollY / availableScroll >= 0.25);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, [pathname]);

  const href = buildWhatsAppLink('floating_button', { pathname, utm });

  const handleClick = () => {
    setShowBadge(false);
    trackWhatsAppClick(createWhatsAppTrackingPayload({
      ctaId: 'floating-whatsapp',
      contextKey: 'floating_button',
      position: 'floating',
      utm,
    }));
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Denkor pelo WhatsApp"
      onClick={handleClick}
      className={cn(
        'fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-40 flex items-center gap-2 transition-[opacity,transform] duration-150 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#769149] md:right-6 md:bottom-6',
        visible ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0',
      )}
    >
      <span className="hidden min-h-11 items-center bg-[#101412] px-4 text-sm font-semibold text-white md:flex">Falar no WhatsApp</span>
      <span className="relative grid size-12 place-items-center bg-[#dff57a] text-[#101412] transition-transform duration-150 hover:scale-105 md:size-16">
        <WhatsAppGlyph className="size-6 md:size-8" />
        {showBadge && (
          <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-[#101412] text-[11px] font-semibold text-white">1</span>
        )}
      </span>
    </a>
  );
}
