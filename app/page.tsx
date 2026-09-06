import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react';
import { AIDiagnostic } from '@/components/ai-diagnostic';
import { MetodoDenkor } from '@/components/metodo-denkor';
import { InternationalPresence, ProofCases } from '@/components/proof-sections';
import {
  ClosingCta,
  SectionLabel,
  SiteFooter,
  SiteHeader,
} from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata(
  'Denkor — IA aplicada a negócios',
  'Formações para profissionais e programas para empresas aplicarem IA a processos reais.',
);

const productJourneys = [
  {
    context: 'Na minha carreira',
    description:
      'Aprenda a aplicar IA e transforme essa capacidade em atuação profissional.',
    progression: ['Especialista', 'Consultor'],
    products: [
      {
        title: 'Especialista em IA para Negócios',
        href: '/formacoes/especialista-ia-negocios',
      },
      {
        title: 'Consultor de IA para Empresas',
        href: '/profissionais#consultor',
      },
    ],
  },
  {
    context: 'Na minha empresa',
    description:
      'Descubra onde aplicar IA e desenvolva capacidade para executar.',
    progression: ['Transformation Day', 'AI Champions'],
    products: [
      { title: 'AI Transformation Day', href: '/empresas#transformation-day' },
      { title: 'AI Champions', href: '/empresas#ai-champions' },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate bg-[#101412] text-white">
        <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <SectionLabel dark>Intelligence for Business</SectionLabel>
            <span className="max-w-sm text-[11px] uppercase leading-5 tracking-[0.2em] text-white/60 sm:text-right">
              Formações para profissionais · Programas para empresas
            </span>
          </div>
          <div>
            <h1 className="mt-7 max-w-5xl text-[2.5rem] font-semibold leading-[2.75rem] tracking-[-0.045em] sm:mt-8 lg:text-[4rem] lg:leading-[4.25rem]">
              As ferramentas de IA estão ao alcance de todos. Transformá-las em
              resultado exige método.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:mt-9 sm:text-xl sm:leading-8">
              A Denkor prepara profissionais e empresas para identificar onde a
              inteligência artificial pode gerar valor, aplicá-la aos processos
              e medir seu impacto no negócio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <WhatsAppButton
                contextKey="home_hero_profissional"
                ctaId="home-hero-profissional"
                position="hero"
              >
                Quero me tornar especialista
              </WhatsAppButton>
              <WhatsAppButton
                contextKey="home_hero_empresa"
                ctaId="home-hero-empresa"
                position="hero"
                variant="secondary"
                className="border-white/30 text-white hover:bg-white hover:text-[#101412] focus-visible:outline-[#dff57a]"
              >
                Quero levar IA para minha empresa
              </WhatsAppButton>
            </div>
            <Link
              href="#diagnostico"
              prefetch={false}
              className="group mt-6 inline-flex max-w-max items-center gap-3 border-b border-lime-300/35 pb-2 text-sm text-white/65 transition-colors hover:border-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
            >
              <span>
                <strong className="font-semibold text-lime-300">
                  Está em dúvida?
                </strong>{' '}
                Faça o diagnóstico de 1 minuto
              </span>
              <ArrowDown
                className="size-4 text-lime-300 transition-transform group-hover:translate-y-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <InternationalPresence />

      <section className="bg-[#101412] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionLabel dark>Método Denkor</SectionLabel>
          <MetodoDenkor className="mt-10" stepHeadingLevel="h2" />
        </div>
      </section>

      <AIDiagnostic />

      <section className="border-b border-[#101412]/15 bg-[#f3f0e7]">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
          <p className="text-lg font-semibold tracking-[-0.02em] text-[#101412]">
            IA começa no processo, não na ferramenta.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-32">
          <div>
            <SectionLabel>O que é a Denkor</SectionLabel>
          </div>
          <div>
            <h2 className="max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] text-[#101412] lg:text-[3rem] lg:leading-[3.375rem]">
              Não basta usar IA. É preciso fazê-la gerar resultado.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#101412]/15 pt-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-[#344039]">
                O mercado não precisa apenas de pessoas que saibam conversar com
                ferramentas. Precisa de profissionais capazes de analisar
                processos, identificar oportunidades, construir soluções e
                transformar inteligência artificial em produtividade, eficiência
                e crescimento.
              </p>
              <p className="text-base leading-7 text-[#344039]">
                É isso que a Denkor ensina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="border-b border-[#101412]/15 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <BriefcaseBusiness
              className="size-8 text-[#526057]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#526057]">
              Para profissionais
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">
              Aprenda a aplicar. Prepare-se para liderar.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#526057]">
              Formações para quem quer se tornar referência em IA aplicada a
              negócios ou construir uma operação de consultoria para empresas.
            </p>
            <Link
              href="/profissionais"
              prefetch={false}
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-[#101412]"
            >
              Conhecer as formações
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="bg-[#f3f0e7] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <Building2
              className="size-8 text-[#101412]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#344039]">
              Para empresas
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">
              Descubra onde começar. Crie capacidade interna.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#344039]">
              Programas para capacitar líderes, mapear oportunidades reais e
              desenvolver pessoas capazes de conduzir a transformação por
              dentro.
            </p>
            <Link
              href="/empresas"
              prefetch={false}
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-[#101412]"
            >
              Conhecer as soluções
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <ProofCases />

      <section className="bg-[#101412] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="border-b border-white/15 pb-12">
            <div>
              <SectionLabel dark>Produtos Denkor</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
                Onde você quer gerar resultado com IA?
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {productJourneys.map((journey, journeyIndex) => (
              <article
                key={journey.products[0].title}
                className={`border-b border-white/15 py-10 md:px-9 ${journeyIndex === 0 ? 'md:border-r' : ''}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                  {journey.context}
                </p>
                <p className="mt-4 max-w-md text-base leading-7 text-white/65">
                  {journey.description}
                </p>
                <div
                  className="mt-7 flex items-center gap-4 text-sm text-white/45"
                  aria-label={`${journey.progression[0]}, depois ${journey.progression[1]}`}
                >
                  <span>{journey.progression[0]}</span>
                  <ArrowRight
                    className="size-4 shrink-0 text-lime-300"
                    aria-hidden="true"
                  />
                  <span>{journey.progression[1]}</span>
                </div>
                <div className="mt-7 border-t border-white/15">
                  {journey.products.map((product, productIndex) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      prefetch={false}
                      className="group flex min-h-24 items-center gap-5 border-b border-white/15 py-5 text-white/75 transition-colors hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-[#dff57a]"
                    >
                      <span className="font-mono text-xs text-lime-300">
                        0{productIndex + 1}
                      </span>
                      <span className="text-lg font-semibold">
                        {product.title}
                      </span>
                      <ArrowUpRight
                        className="ml-auto size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-300"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Não sabe por onde começar"
        title="Três perguntas, um minuto, e você sabe qual programa serve para o seu caso."
        label="Descobrir meu caminho"
        ctaId="home-cta-final"
        href="#diagnostico"
      />
      <SiteFooter />
    </main>
  );
}
