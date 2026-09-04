'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState, type SyntheticEvent } from 'react';
import type { CourseContent } from '@/content/formacoes';
import { createWhatsAppTrackingPayload, trackWhatsAppClick } from '@/lib/analytics';
import { buildWhatsAppLink, captureUtmParameters } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

function cleanField(value: FormDataEntryValue | null) {
  return (typeof value === 'string' ? value : '').trim().replace(/\s+/g, ' ').slice(0, 160);
}

export function MobileCourseCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const interest = document.querySelector('#interesse');
      const rect = interest?.getBoundingClientRect();
      const interestIsVisible = Boolean(rect && rect.top < window.innerHeight && rect.bottom > 0);
      setVisible(window.scrollY > 420 && !interestIsVisible);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <Link
      href="#interesse"
      className={cn(
        'fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] left-4 z-30 flex min-h-14 items-center justify-between gap-5 bg-lime-300 px-5 text-sm font-semibold text-[#101412] transition-[opacity,transform] duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#769149] lg:hidden',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      Quero conhecer a formação
      <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
    </Link>
  );
}

export function CourseCTA({ course }: { course: CourseContent }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = cleanField(data.get('name'));
    const whatsapp = cleanField(data.get('whatsapp'));
    const email = cleanField(data.get('email'));
    const utm = captureUtmParameters();
    const details = `Nome: ${name}\nWhatsApp: ${whatsapp}\nE-mail: ${email}`;
    const href = buildWhatsAppLink('formacao_especialista', { details, utm });

    trackWhatsAppClick(createWhatsAppTrackingPayload({
      ctaId: 'formacao-especialista-interesse',
      contextKey: 'formacao_especialista',
      position: 'course-final-form',
      utm,
    }));

    setMessage('Sua mensagem está pronta. Revise os dados no WhatsApp e envie para falar com a Denkor.');
    const opened = window.open(href, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = href;
  };

  return (
    <section id="interesse" className="scroll-mt-20 bg-[#101412] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">Próximo passo</p>
          <h2 className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">{course.finalCta.title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{course.finalCta.subtitle}</p>
          <p className="mt-10 max-w-xl border-t border-white/15 pt-6 text-sm leading-6 text-white/50">{course.finalCta.summary}</p>
        </div>

        <form onSubmit={handleSubmit} className="border border-white/15 bg-[#0c100e] p-6 sm:p-8" aria-label="Formulário de interesse na formação">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Quero saber mais</h3>
          <p className="mt-3 text-sm leading-6 text-white/55">Preencha seus dados para iniciar a conversa com a Denkor.</p>

          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="course-interest-name" className="block text-sm font-medium text-white">Nome</label>
              <input
                id="course-interest-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                className="mt-2 min-h-12 w-full border border-white/25 bg-transparent px-4 text-base text-white outline-none transition-colors focus:border-lime-300 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              />
            </div>
            <div>
              <label htmlFor="course-interest-whatsapp" className="block text-sm font-medium text-white">WhatsApp</label>
              <input
                id="course-interest-whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                maxLength={24}
                className="mt-2 min-h-12 w-full border border-white/25 bg-transparent px-4 text-base text-white outline-none transition-colors focus:border-lime-300 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              />
            </div>
            <div>
              <label htmlFor="course-interest-email" className="block text-sm font-medium text-white">E-mail</label>
              <input
                id="course-interest-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={160}
                className="mt-2 min-h-12 w-full border border-white/25 bg-transparent px-4 text-base text-white outline-none transition-colors focus:border-lime-300 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-8 inline-flex min-h-14 w-full items-center justify-between gap-6 bg-lime-300 px-5 font-semibold text-[#101412] transition-colors duration-200 hover:bg-white focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Quero saber mais
            <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <p className="mt-4 text-xs leading-5 text-white/45">Seus dados não ficam salvos neste site. Eles seguem na mensagem que você revisa antes de enviar.</p>
          <p className="mt-4 min-h-10 text-sm leading-6 text-lime-300" aria-live="polite">{message}</p>
        </form>
      </div>
    </section>
  );
}
