import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check } from 'lucide-react';
import { AIDiagnostic } from '@/components/ai-diagnostic';
import { InternationalPresence, ProofCases } from '@/components/proof-sections';
import { ClosingCta, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp';

const productJourneys = [
  {
    products: [
      { title: 'Especialista em IA para Negócios', href: '/profissionais#especialista' },
      { title: 'Consultor de IA para Empresas', href: '/profissionais#consultor' },
    ],
  },
  {
    products: [
      { title: 'AI Transformation Day', href: '/empresas#transformation-day' },
      { title: 'AI Champions', href: '/empresas#ai-champions' },
    ],
  },
];

const heroSteps = ['Entender o processo', 'Identificar a oportunidade', 'Desenhar a solução', 'Medir o resultado'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate bg-[#101412] text-white">
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)] lg:gap-12 lg:px-12">
          <div className="flex flex-col justify-center py-16 sm:py-20 lg:justify-start lg:py-24">
            <SectionLabel dark>Intelligence for Business</SectionLabel>
            <h1 className="mt-7 max-w-5xl text-[clamp(2.85rem,12vw,7.6rem)] font-semibold leading-[0.9] tracking-[-0.065em] sm:mt-8">
              Inteligência que transforma negócios.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:mt-9 sm:text-xl sm:leading-8">
              A Denkor prepara profissionais e empresas para aplicar inteligência artificial em processos, decisões e crescimento.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <WhatsAppButton
                contextKey="home_hero_profissional"
                ctaId="hero-profissional"
                position="hero"
              >
                Quero me tornar especialista
              </WhatsAppButton>
              <WhatsAppButton
                contextKey="home_hero_empresa"
                ctaId="hero-empresa"
                position="hero"
                variant="secondary"
                className="border-white/30 text-white hover:bg-white hover:text-[#101412] focus-visible:outline-[#dff57a]"
              >
                Quero levar IA para minha empresa
              </WhatsAppButton>
            </div>
            <Link href="#diagnostico" className="group mt-6 inline-flex max-w-max items-center gap-3 border-b border-lime-300/35 pb-2 text-sm text-white/65 transition-colors hover:border-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              <span><strong className="font-semibold text-lime-300">Está em dúvida?</strong> Faça o diagnóstico de 1 minuto</span>
              <ArrowDown className="size-4 text-lime-300 transition-transform group-hover:translate-y-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="hidden flex-col justify-start gap-5 border-t border-white/10 py-10 sm:py-12 lg:flex lg:border-t-0 lg:py-24">
            <div className="hidden justify-end lg:flex">
              <span className="text-right text-[11px] uppercase leading-5 tracking-[0.2em] text-white/35">
                Educação executiva
                <br />
                Transformação empresarial
              </span>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-px bg-lime-300" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Da oportunidade ao impacto</p>
              <div className="mt-7 space-y-1">
                {heroSteps.map((step, index) => (
                  <div key={step} className="group flex items-center gap-5 border-b border-white/10 py-4 text-white/70 transition-colors hover:text-white">
                    <span className="font-mono text-xs text-lime-300">0{index + 1}</span>
                    <span className="text-base">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIDiagnostic />
      <InternationalPresence />

      <section className="bg-[#101412] px-5 py-12 text-white lg:hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-300">Da oportunidade ao impacto</p>
        <div className="mt-6 border-t border-white/15">
          {heroSteps.map((step, index) => (
            <div key={step} className="flex min-h-14 items-center gap-5 border-b border-white/15 py-4 text-sm text-white/70">
              <span className="font-mono text-xs text-lime-300">0{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-32">
          <div>
            <SectionLabel>O que é a Denkor</SectionLabel>
          </div>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#101412]">
              Educação e transformação empresarial através da IA.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#101412]/15 pt-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-[#344039]">
                Não ensinamos IA como uma coleção de ferramentas. Ensinamos pessoas a olhar para negócios, processos e decisões com uma nova capacidade de análise e execução.
              </p>
              <p className="text-base leading-7 text-[#344039]">
                O foco está na aplicação prática: encontrar oportunidades, desenhar agentes e automações, priorizar projetos e construir resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="border-b border-[#101412]/15 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <BriefcaseBusiness className="size-8 text-[#526057]" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#526057]">Para profissionais</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">
              Aprenda a aplicar. Prepare-se para liderar.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#526057]">
              Formações para quem quer se tornar referência em IA aplicada a negócios ou construir uma operação de consultoria para empresas.
            </p>
            <Link href="/profissionais" className="group mt-10 inline-flex items-center gap-3 font-semibold text-[#101412]">
              Conhecer as formações
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="bg-[#f3f0e7] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <Building2 className="size-8 text-[#101412]" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#344039]">Para empresas</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">
              Descubra onde começar. Crie capacidade interna.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#344039]">
              Programas para capacitar líderes, mapear oportunidades reais e desenvolver pessoas capazes de conduzir a transformação por dentro.
            </p>
            <Link href="/empresas" className="group mt-10 inline-flex items-center gap-3 font-semibold text-[#101412]">
              Conhecer as soluções
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ProofCases />

      <section className="bg-[#101412] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel dark>Produtos Denkor</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.055em]">Quatro caminhos. Um mesmo foco: resultado real.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">Formação para quem aplica e comercializa. Transformação para quem quer avançar como empresa.</p>
          </div>
          <div className="grid md:grid-cols-2">
            {productJourneys.map((journey, journeyIndex) => (
              <article key={journey.products[0].title} className={`border-b border-white/15 py-10 md:px-9 ${journeyIndex === 0 ? 'md:border-r' : ''}`}>
                <div className="flex items-center gap-4 text-sm text-white/45" aria-label={`${journey.products[0].title}, depois ${journey.products[1].title}`}>
                  <span>{journey.products[0].title.split(' em ')[0]}</span>
                  <ArrowRight className="size-4 shrink-0 text-lime-300" aria-hidden="true" />
                  <span>{journey.products[1].title}</span>
                </div>
                <div className="mt-7 border-t border-white/15">
                  {journey.products.map((product, productIndex) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="group flex min-h-24 items-center gap-5 border-b border-white/15 py-5 text-white/75 transition-colors hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-[#dff57a]"
                    >
                      <span className="font-mono text-xs text-lime-300">0{productIndex + 1}</span>
                      <span className="text-lg font-semibold">{product.title}</span>
                      <ArrowUpRight className="ml-auto size-5 shrink-0 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-300" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-28">
          <div className="relative min-h-[440px] overflow-hidden bg-[#344039]">
            <img src="/team-meeting.jpg" alt="Líder e equipe analisando resultados em um ambiente corporativo" className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-luminosity" loading="lazy" />
            <div className="absolute inset-0 bg-[#101412]/35" />
            <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.16em] text-white/50">Foto: Pavel Danilyuk / Pexels</span>
          </div>
          <div className="flex flex-col justify-center bg-white p-7 sm:p-12 lg:p-16">
            <SectionLabel>Por que a Denkor</SectionLabel>
            <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">IA começa no processo, não na ferramenta.</h2>
            <div className="mt-9 space-y-5">
              {[
                'Aplicação prática em negócios e operações',
                'Visão que conecta processo, solução e retorno',
                'Formação acessível a quem não é programador',
                'Abordagem orientada a diagnóstico e prioridade',
              ].map((item) => (
                <div key={item} className="flex gap-4 border-b border-[#101412]/12 pb-5 text-sm text-[#344039]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#769149]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Descubra qual caminho faz sentido para você."
        label="Descobrir meu caminho"
        ctaId="cta-final-home"
        href="#diagnostico"
      />
      <SiteFooter />
    </main>
  );
}
