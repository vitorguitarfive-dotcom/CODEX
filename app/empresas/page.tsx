import type { Metadata } from 'next';
import { Check, Clock3, Map, Network, PackageCheck, Search } from 'lucide-react';
import { ClosingCta, InnerHero, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp';

export const metadata: Metadata = {
  title: 'Para Empresas | Denkor',
  description: 'Programas para capacitar equipes e identificar onde a IA pode gerar resultado real nas empresas.',
};

const solutions = [
  {
    id: 'transformation-day',
    number: '01',
    title: 'AI Transformation Day',
    summary: 'Um dia dentro da empresa para educar líderes, identificar processos e mapear oportunidades reais de aplicação de IA.',
    problem: 'A empresa sabe que precisa avançar em IA, mas ainda não tem clareza sobre onde começar, quais processos priorizar e como separar oportunidade real de entusiasmo passageiro.',
    process: ['Educação executiva sobre IA, agentes, automação, riscos e governança', 'Análise guiada dos processos pelos próprios líderes', 'Classificação das oportunidades por impacto, dificuldade, prioridade, risco e retorno'],
    delivery: 'Mapa de Oportunidades de IA com os pontos mais promissores para a empresa começar.',
    duration: 'Programa presencial de 1 dia — entre 6 e 8 horas',
    icon: Search,
  },
  {
    id: 'ai-champions',
    number: '02',
    title: 'AI Champions',
    summary: 'Formação de pessoas internas para se tornarem referências em IA dentro dos próprios departamentos.',
    problem: 'A organização quer desenvolver capacidade interna, reduzir a dependência externa para oportunidades simples e criar uma cultura de aplicação responsável de IA.',
    process: ['Seleção de profissionais estratégicos de diferentes áreas', 'Formação em IA, processos, agentes, automações e governança', 'Construção de projetos e apresentação das oportunidades para a liderança'],
    delivery: 'Uma rede interna capaz de identificar, estruturar e defender oportunidades de IA em cada departamento.',
    duration: 'Programa de várias semanas — entre 20 e 40 horas',
    icon: Network,
  },
];

export default function EmpresasPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <InnerHero
        eyebrow="Para empresas"
        title="Clareza para começar. Capacidade para evoluir."
        text="A Denkor ajuda empresas a capacitar líderes, encontrar oportunidades de alto valor e formar pessoas capazes de conduzir a aplicação de IA por dentro."
        index="02"
        whatsapp={{ label: 'Conversar sobre minha empresa', contextKey: 'empresas_hero', ctaId: 'hero-empresas' }}
      />

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-28">
          <SectionLabel>Transformação com direção</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.1rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[#101412]">
              A empresa não termina apenas sabendo mais sobre IA.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#526057]">Ela termina sabendo onde começar — e quem pode levar o trabalho adiante.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.id}
                id={solution.id}
                className={`scroll-mt-24 grid gap-12 py-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:py-24 ${index === 0 ? 'border-b border-[#101412]/15 pt-4' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="size-9 text-[#65764b]" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-mono text-sm text-[#65764b]">{solution.number}</span>
                  </div>
                  <h2 className="mt-12 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101412] sm:text-6xl">{solution.title}</h2>
                  <p className="mt-7 text-lg leading-8 text-[#526057]">{solution.summary}</p>
                  <div className="mt-9">
                    <WhatsAppButton
                      contextKey={solution.id === 'transformation-day' ? 'empresas_transformation_day' : 'empresas_ai_champions'}
                      ctaId={solution.id === 'transformation-day' ? 'empresa-transformation-day' : 'empresa-ai-champions'}
                      position="programa"
                      className="bg-[#101412] text-white hover:bg-[#344039] focus-visible:outline-[#769149]"
                    >
                      {solution.id === 'transformation-day' ? 'Agendar no WhatsApp' : 'Tirar dúvidas no WhatsApp'}
                    </WhatsAppButton>
                  </div>
                </div>

                <div className="grid gap-px bg-[#101412]/15 sm:grid-cols-2">
                  <div className="bg-[#f3f0e7] p-6 sm:col-span-2 sm:p-8">
                    <Map className="size-6 text-[#65764b]" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#65764b]">Problema que resolve</h3>
                    <p className="mt-4 max-w-3xl leading-7 text-[#344039]">{solution.problem}</p>
                  </div>
                  <div className="bg-[#101412] p-6 text-white sm:col-span-2 sm:p-8">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">Como funciona</h3>
                    <div className="mt-6 grid gap-5 sm:grid-cols-3">
                      {solution.process.map((item, itemIndex) => (
                        <div key={item} className="border-t border-white/15 pt-4">
                          <span className="font-mono text-[11px] text-lime-300">0{itemIndex + 1}</span>
                          <p className="mt-3 text-sm leading-6 text-white/60">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#f3f0e7] p-6 sm:p-8">
                    <PackageCheck className="size-6 text-[#65764b]" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#65764b]">O que a empresa recebe</h3>
                    <p className="mt-4 text-sm leading-6 text-[#344039]">{solution.delivery}</p>
                  </div>
                  <div className="bg-[#dff57a] p-6 sm:p-8">
                    <Clock3 className="size-6 text-[#46533a]" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#46533a]">Duração</h3>
                    <p className="mt-4 text-sm leading-6 text-[#344039]">{solution.duration}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden bg-[#101412] text-white">
        <img src="/executive-workshop.jpg" alt="Profissionais participando de um workshop corporativo" className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101412] via-[#101412]/80 to-[#101412]/35" />
        <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] items-end px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <SectionLabel dark>Dentro da empresa</SectionLabel>
            <h2 className="mt-7 text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">Líderes entendem. Pessoas aplicam. A empresa evolui.</h2>
            <div className="mt-8 flex items-center gap-3 text-sm text-white/55">
              <Check className="size-4 text-lime-300" aria-hidden="true" />
              Programas desenhados para a realidade da operação
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-white/35">Foto: Matheus Bertelli / Pexels</p>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Descubra onde a IA pode gerar resultado na sua operação."
        label="Agendar diagnóstico da empresa"
        contextKey="empresas_cta_final"
        ctaId="cta-final-empresas"
      />
      <SiteFooter />
    </main>
  );
}
