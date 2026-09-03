import { SectionLabel } from '@/components/site-shell';
import { internationalPresence, proofCases } from '@/content/prova';

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
          <SectionLabel>Aplicação em contexto</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#101412]">
              Do problema ao resultado mensurável.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-[#526057]">
              Esta estrutura receberá casos reais da Denkor assim que os dados estiverem aprovados para publicação.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-[#101412]/15 lg:grid-cols-3">
          {proofCases.map((item) => (
            <article key={item.category} className="bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#769149]">{item.category}</p>
              <dl className="mt-10 space-y-7">
                <div className="border-t border-[#101412]/15 pt-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344039]">Problema</dt>
                  <dd className="mt-3 text-sm leading-6 text-[#526057]">{item.problem}</dd>
                </div>
                <div className="border-t border-[#101412]/15 pt-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344039]">Aplicação</dt>
                  <dd className="mt-3 text-sm leading-6 text-[#526057]">{item.application}</dd>
                </div>
                <div className="border-t border-[#101412]/15 pt-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#344039]">Resultado</dt>
                  <dd className="mt-3 text-sm leading-6 text-[#526057]">{item.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
