import type { Metadata } from 'next';
import { Check, X } from 'lucide-react';
import { MetodoDenkor } from '@/components/metodo-denkor';
import {
  ClosingCta,
  InnerHero,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from '@/components/site-shell';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata(
  'Sobre a Denkor',
  'Como a Denkor mapeia processos e decide onde IA gera retorno.',
);

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <InnerHero
        eyebrow="Sobre a Denkor"
        title="Inteligência aplicada à realidade dos negócios."
        text="A Denkor é uma empresa de educação e transformação empresarial em inteligência artificial. Formamos pessoas e ajudamos empresas a avançar com direção, método e foco em resultado."
        index="03"
      />

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-32">
          <div>
            <SectionLabel>Nosso posicionamento</SectionLabel>
          </div>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5.2vw,5.4rem)] font-semibold leading-[0.97] tracking-[-0.06em] text-[#101412]">
              A ferramenta é apenas o começo. O negócio é o contexto.
            </h2>
            <p className="mt-9 max-w-3xl text-xl leading-9 text-[#526057]">
              Antes de propor qualquer ferramenta, mapeamos como o trabalho
              acontece hoje: quais etapas se repetem, onde a informação se perde
              e quanto tempo cada uma consome. A aplicação de IA vem depois
              disso, e só onde os números justificam.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="border-b border-[#101412]/15 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526057]">
              A Denkor é
            </p>
            <div className="mt-10 space-y-5">
              {[
                'Educação em IA aplicada a negócios',
                'Análise de processos e oportunidades',
                'Construção de agentes e automações',
                'Priorização por impacto, risco e retorno',
                'Capacitação para aplicação e comercialização',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[#101412]/12 pb-5 text-[#344039]"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#769149]"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#101412] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
              A Denkor não é
            </p>
            <div className="mt-10 space-y-5">
              {[
                'Uma escola de ChatGPT',
                'Um curso isolado de prompts',
                'Uma coleção de ferramentas sem contexto',
                'Uma promessa de resultado instantâneo',
                'Uma abordagem desconectada da operação',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-white/12 pb-5 text-white/65"
                >
                  <X
                    className="mt-0.5 size-4 shrink-0 text-lime-300"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e7] text-[#101412]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionLabel>Como pensamos</SectionLabel>
          <MetodoDenkor tone="light" className="mt-12" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-28">
          <SectionLabel>Uma marca, dois públicos</SectionLabel>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs text-[#526057]">B2C</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#101412]">
                Profissionais
              </h3>
              <p className="mt-4 leading-7 text-[#526057]">
                Formação para aplicar inteligência artificial em negócios e
                comercializar projetos para empresas.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-[#526057]">B2B</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#101412]">
                Empresas
              </h3>
              <p className="mt-4 leading-7 text-[#526057]">
                Programas para identificar oportunidades, capacitar lideranças e
                desenvolver capacidade interna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Conversar"
        title="Diga qual processo está travando e avaliamos juntos se IA resolve."
        label="Conversar sobre a abordagem Denkor"
        contextKey="sobre_cta_final"
        ctaId="sobre-cta-final"
      />
      <SiteFooter contextKey="sobre_cta_final" ctaId="footer-whatsapp" />
    </main>
  );
}
