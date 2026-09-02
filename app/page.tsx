import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check } from 'lucide-react';
import { AIDiagnostic } from '@/components/ai-diagnostic';
import { ClosingCta, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';

const products = [
  {
    number: '01',
    audience: 'Para profissionais',
    title: 'Especialista em IA para Negócios',
    text: 'Aprenda a identificar onde a IA pode gerar resultado e transformar oportunidades em agentes, automações e melhoria de processos.',
    href: '/profissionais#especialista',
  },
  {
    number: '02',
    audience: 'Para profissionais',
    title: 'Consultor de IA para Empresas',
    text: 'Construa uma operação para prospectar, diagnosticar, vender e entregar projetos de inteligência artificial.',
    href: '/profissionais#consultor',
  },
  {
    number: '03',
    audience: 'Para empresas',
    title: 'AI Transformation Day',
    text: 'Um dia para educar líderes, analisar processos e mapear oportunidades reais de aplicação de IA.',
    href: '/empresas#transformation-day',
  },
  {
    number: '04',
    audience: 'Para empresas',
    title: 'AI Champions',
    text: 'Forme referências internas capazes de identificar e conduzir oportunidades de IA em cada departamento.',
    href: '/empresas#ai-champions',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate bg-[#101412] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:68px_68px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] grid-cols-1 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,.8fr)] lg:px-12">
          <div className="flex flex-col justify-center py-20 lg:border-r lg:border-white/10 lg:py-24 lg:pr-16">
            <SectionLabel dark>Intelligence for Business</SectionLabel>
            <h1 className="mt-8 max-w-5xl text-[clamp(3.15rem,7.2vw,7.6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Inteligência que transforma negócios.
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              A Denkor prepara profissionais e empresas para aplicar inteligência artificial em processos, decisões e crescimento.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/profissionais" className="group inline-flex min-h-14 items-center justify-between gap-6 bg-lime-300 px-5 font-semibold text-[#101412] transition-colors hover:bg-lime-200">
                Quero me tornar especialista
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link href="/empresas" className="group inline-flex min-h-14 items-center justify-between gap-6 border border-white/20 px-5 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
                Quero levar IA para minha empresa
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end border-t border-white/10 py-12 lg:border-t-0 lg:py-16 lg:pl-12">
            <div className="mb-auto hidden justify-end lg:flex">
              <span className="text-right text-[11px] uppercase leading-5 tracking-[0.2em] text-white/35">
                Educação executiva
                <br />
                Transformação empresarial
              </span>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-lime-300 via-lime-300/30 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Da oportunidade ao impacto</p>
              <div className="mt-7 space-y-1">
                {['Entender o processo', 'Identificar a oportunidade', 'Desenhar a solução', 'Medir o resultado'].map((step, index) => (
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
            <BriefcaseBusiness className="size-8 text-[#526151]" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#526151]">Para profissionais</p>
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
          <div className="bg-[#dff57a] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <Building2 className="size-8 text-[#101412]" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#3e4939]">Para empresas</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412] sm:text-5xl">
              Descubra onde começar. Crie capacidade interna.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3e4939]">
              Programas para capacitar líderes, mapear oportunidades reais e desenvolver pessoas capazes de conduzir a transformação por dentro.
            </p>
            <Link href="/empresas" className="group mt-10 inline-flex items-center gap-3 font-semibold text-[#101412]">
              Conhecer as soluções
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

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
            {products.map((product, index) => (
              <Link
                key={product.title}
                href={product.href}
                className={`group relative min-h-[390px] border-b border-white/15 py-10 transition-colors hover:bg-white/[0.035] md:px-9 ${index % 2 === 0 ? 'md:border-r' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-lime-300">{product.number}</span>
                  <ArrowUpRight className="size-5 text-white/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-300" aria-hidden="true" />
                </div>
                <div className="mt-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">{product.audience}</p>
                  <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em]">{product.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">{product.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-28">
          <div className="relative min-h-[440px] overflow-hidden bg-[#202823]">
            <Image
              src="/team-meeting.jpg"
              alt="Líder e equipe analisando resultados em um ambiente corporativo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-75 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/80 via-transparent to-transparent" />
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
                  <Check className="mt-0.5 size-4 shrink-0 text-[#5f723f]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AIDiagnostic />

      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
