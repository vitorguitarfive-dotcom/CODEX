import { SectionLabel } from '@/components/site-shell';
import { depoimentos, internationalPresence } from '@/content/prova';

export function InternationalPresence() {
  return (
    <section className="border-y border-[#101412]/15 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <SectionLabel>Atuação internacional</SectionLabel>
        <p className="mt-9 max-w-6xl text-[clamp(2rem,8vw,5rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#101412]">
          {internationalPresence.countries.join(' · ')}
        </p>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[#526057]">{internationalPresence.support}</p>
      </div>
    </section>
  );
}

export function ProofCases() {
  return (
    <section className="bg-[#f3f0e7]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 border-b border-[#101412]/15 pb-12 lg:grid-cols-[.72fr_1.28fr]">
          <SectionLabel>Experiências reais</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#101412]">
              O que muda quando o processo vem primeiro.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-[#526057]">
              Relatos de quem aplicou a abordagem da Denkor em contextos profissionais e empresariais.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-[#101412]/15 md:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article key={depoimento.id} className="flex min-h-full flex-col bg-white p-6 sm:p-8">
              <blockquote className="text-base leading-7 text-[#344039]">
                “{depoimento.citacao}”
              </blockquote>
              <p className="mt-10 border-t border-[#101412]/15 pt-5 text-sm leading-6 font-normal text-[#526057]">
                {depoimento.autor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
