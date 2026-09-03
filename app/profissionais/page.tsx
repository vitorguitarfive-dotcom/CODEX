import type { Metadata } from 'next';
import { Check, Clock3, GraduationCap, Users } from 'lucide-react';
import { ClosingCta, InnerHero, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp';

export const metadata: Metadata = {
  title: 'Para Profissionais | Denkor',
  description: 'Formações em inteligência artificial aplicada a negócios e consultoria empresarial.',
};

const courses = [
  {
    id: 'especialista',
    number: '01',
    title: 'Formação Especialista em IA para Negócios',
    promise: 'Aprenda a identificar onde a IA pode gerar resultado dentro de empresas e transformar isso em agentes, automações e melhoria de processos.',
    audience: 'Profissionais, gestores, empresários, analistas e pessoas que querem se tornar referência em IA aplicada a negócios. Não é necessário ser programador.',
    duration: '32 horas — 4 sábados de 8h ou 8 encontros de 4h',
    certification: 'Certificado de conclusão Denkor e projeto aplicado',
    learn: ['Fundamentos de IA generativa', 'Prompts e engenharia de contexto', 'Análise de processos e diagnóstico', 'Agentes e automações', 'Priorização, business case e ROI'],
  },
  {
    id: 'consultor',
    number: '02',
    title: 'Formação Consultor de IA para Empresas',
    promise: 'Aprenda a prospectar, diagnosticar, vender e entregar projetos de IA para empresas.',
    audience: 'Consultores, vendedores B2B, empresários, profissionais autônomos, agências e especialistas que querem comercializar serviços de IA.',
    duration: '20 a 24 horas — sugestão de 3 sábados de 8h',
    certification: 'Certificado de conclusão Denkor e modelos comerciais prontos',
    learn: ['Nicho, ICP e prospecção', 'AI Discovery e diagnóstico', 'Mapa de oportunidades e ROI', 'Proposta, precificação e negociação', 'Entrega, acompanhamento e expansão'],
  },
];

export default function ProfissionaisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <InnerHero
        eyebrow="Para profissionais"
        title="Domine a aplicação. Construa sua posição no mercado."
        text="Duas formações complementares para quem quer aplicar inteligência artificial nos negócios e transformar essa capacidade em uma atuação profissional relevante."
        index="01"
        whatsapp={{ label: 'Falar sobre as formações', contextKey: 'profissionais_hero', ctaId: 'hero-profissionais' }}
      />

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 border-b border-[#101412]/15 pb-12 lg:grid-cols-[.72fr_1.28fr]">
            <SectionLabel>Jornada profissional</SectionLabel>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.1rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[#101412]">
              Primeiro, aprenda a aplicar. Depois, aprenda a vender e entregar.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Entender o negócio', 'Diagnosticar processos', 'Desenhar soluções', 'Gerar resultado'].map((step, index) => (
              <div key={step} className="border border-[#101412]/15 bg-white p-5">
                <span className="font-mono text-xs text-[#526057]">0{index + 1}</span>
                <p className="mt-9 font-medium text-[#101412]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
          {courses.map((course, courseIndex) => (
            <article
              key={course.id}
              id={course.id}
              className={`scroll-mt-24 grid gap-12 py-14 lg:grid-cols-[.82fr_1.18fr] lg:py-24 ${courseIndex === 0 ? 'border-b border-[#101412]/15 pt-0 lg:pt-0' : ''}`}
            >
              <div>
                <span className="font-mono text-sm text-[#526057]">{course.number}</span>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#101412] sm:text-5xl">{course.title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#526057]">{course.promise}</p>
                <div className="mt-9">
                  <WhatsAppButton
                    contextKey={course.id === 'especialista' ? 'profissionais_especialista' : 'profissionais_consultor'}
                    ctaId={course.id === 'especialista' ? 'programa-especialista' : 'programa-consultor'}
                    position="programa"
                    className="bg-[#101412] text-white hover:bg-[#344039] focus-visible:outline-[#769149]"
                  >
                    Tirar dúvidas no WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              <div className="grid gap-px bg-[#101412]/15 sm:grid-cols-2">
                <div className="bg-[#f3f0e7] p-6 sm:col-span-2 sm:p-8">
                  <Users className="size-6 text-[#526057]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#526057]">Para quem é</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-[#344039]">{course.audience}</p>
                </div>
                <div className="bg-[#f3f0e7] p-6 sm:p-8">
                  <Clock3 className="size-6 text-[#526057]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#526057]">Duração</h3>
                  <p className="mt-4 text-sm leading-6 text-[#344039]">{course.duration}</p>
                </div>
                <div className="bg-[#f3f0e7] p-6 sm:p-8">
                  <GraduationCap className="size-6 text-[#526057]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#526057]">Certificação</h3>
                  <p className="mt-4 text-sm leading-6 text-[#344039]">{course.certification}</p>
                </div>
                <div className="bg-[#101412] p-6 text-white sm:col-span-2 sm:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">O que você aprende</h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {course.learn.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-white/65">
                        <Check className="mt-0.5 size-4 shrink-0 text-lime-300" aria-hidden="true" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCta
        title="Encontre a formação certa para o seu momento."
        label="Encontrar minha formação no WhatsApp"
        contextKey="profissionais_cta_final"
        ctaId="cta-final-profissionais"
      />
      <SiteFooter contextKey="profissionais_cta_final" ctaId="footer-whatsapp-profissionais" />
    </main>
  );
}
