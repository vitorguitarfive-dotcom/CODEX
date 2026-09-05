'use client';

import { useEffect, useState } from 'react';
import { WhatsAppButton } from '@/components/whatsapp';
import type { CourseContent } from '@/content/formacoes';
import { cn } from '@/lib/utils';

export function MobileCourseCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const finalCta = document.querySelector('[data-course-final-cta]');
      const rect = finalCta?.getBoundingClientRect();
      const finalCtaIsVisible = Boolean(
        rect && rect.top < window.innerHeight && rect.bottom > 0,
      );
      setVisible(window.scrollY > 420 && !finalCtaIsVisible);
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
    <WhatsAppButton
      contextKey="formacao_especialista"
      ctaId="esp-mobile-fixo"
      position="flutuante"
      className={cn(
        'fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] left-4 z-30 min-h-14 text-sm transition-[opacity,transform] duration-200 lg:hidden',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      Quero conhecer a formação
    </WhatsAppButton>
  );
}

export function CourseCTA({ course }: { course: CourseContent }) {
  return (
    <section data-course-final-cta className="bg-[#101412] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
            Próximo passo
          </p>
          <h2 className="mt-6 text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
            {course.finalCta.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            {course.finalCta.subtitle}
          </p>
          <p className="mt-10 max-w-2xl border-t border-white/15 pt-6 text-sm leading-6 text-white/50">
            {course.finalCta.summary}
          </p>
          <div className="mt-8">
            <WhatsAppButton
              contextKey="formacao_especialista"
              ctaId="esp-cta-final"
              position="final"
            >
              Quero saber mais
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
