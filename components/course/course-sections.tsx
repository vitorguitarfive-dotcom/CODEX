import Link from 'next/link';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import { SectionLabel } from '@/components/site-shell';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { CourseContent, CourseStat } from '@/content/formacoes';

function CourseInterestLink({
  children,
  ctaId,
  tone = 'dark',
}: {
  children: React.ReactNode;
  ctaId: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <Link
      id={ctaId}
      href="#interesse"
      className={`group inline-flex min-h-14 w-full items-center justify-between gap-8 px-5 font-semibold transition-colors duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-2 sm:w-auto ${
        tone === 'dark'
          ? 'bg-lime-300 text-[#101412] hover:bg-white focus-visible:outline-lime-300'
          : 'bg-[#101412] text-white hover:bg-[#344039] focus-visible:outline-[#769149]'
      }`}
    >
      {children}
      <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function CourseStats({ stats }: { stats: CourseStat[] }) {
  return (
    <dl className="mt-10 grid border border-white/15 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="border-b border-white/15 p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 lg:p-6">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">{stat.value}</dt>
          <dd className="mt-3 text-sm leading-6 text-white/65">{stat.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CourseHero({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#101412] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-5xl">
          <SectionLabel dark>{course.eyebrow}</SectionLabel>
          <h1 className="mt-8 text-[2.5rem] font-semibold leading-[2.75rem] tracking-[-0.045em] lg:text-[4rem] lg:leading-[4.25rem]">
            {course.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
            {course.subtitle}
          </p>
        </div>

        <CourseStats stats={course.stats} />

        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <CourseInterestLink ctaId="formacao-hero-interesse">
            Quero conhecer a formação
          </CourseInterestLink>
          <p className="max-w-md text-sm leading-6 text-white/50">
            Veja como funciona, o que você vai aprender e o que será capaz de construir.
          </p>
        </div>

        <Link
          href="#formacao"
          aria-label="Continuar para o conteúdo da formação"
          className="mt-12 inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          Continue para conhecer a formação
          <ArrowDown className="size-4 text-lime-300" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function CourseOverview({ course }: { course: CourseContent }) {
  return (
    <section id="formacao" className="scroll-mt-20 bg-[#f3f0e7]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <SectionLabel>O que é esta formação</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
              {course.overview.title}
            </h2>
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-[#526057]">
              {course.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-12 grid border border-[#101412]/15 bg-white lg:grid-cols-2">
          <article className="border-b border-[#101412]/15 p-6 lg:border-r lg:border-b-0 lg:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526057]">Antes</p>
            <p className="mt-8 max-w-xl text-xl leading-8 text-[#344039]">“{course.overview.before}”</p>
          </article>
          <article className="p-6 lg:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#769149]">Depois</p>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-8 text-[#101412]">“{course.overview.after}”</p>
          </article>
        </div>

        <div className="mt-10">
          <CourseInterestLink ctaId="formacao-explicacao-interesse" tone="light">Quero aprender a fazer isso</CourseInterestLink>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection({ course }: { course: CourseContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel>Para quem é</SectionLabel>
        <h2 className="mt-7 max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
          Esse curso faz sentido para você?
        </h2>

        <div className="mt-12 grid gap-px bg-[#101412]/15 sm:grid-cols-2 lg:grid-cols-3">
          {course.audience.map((item, index) => (
            <article key={item.title} className={`course-reveal min-h-56 bg-[#f3f0e7] p-6 transition-colors duration-200 hover:bg-white lg:p-8 ${index === course.audience.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <span className="font-mono text-xs text-[#769149]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 text-lg font-semibold uppercase tracking-[0.08em]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#526057]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-lime-300 bg-[#101412] p-6 text-white sm:p-8">
          <p className="text-2xl font-semibold tracking-[-0.03em]">{course.audienceNote.title}</p>
          <p className="mt-4 max-w-3xl leading-7 text-white/65">{course.audienceNote.description}</p>
        </div>
      </div>
    </section>
  );
}

export function LearningJourney({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#f3f0e7]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
          <SectionLabel>O que você vai aprender</SectionLabel>
          <h2 className="max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
            Uma jornada da ferramenta ao projeto.
          </h2>
        </div>

        <div className="mt-14 space-y-16 lg:mt-20">
          {course.learningStages.map((stage) => (
            <section key={stage.number} className="course-reveal border-t border-[#101412]/20 pt-8">
              <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">
                <div>
                  <p className="font-mono text-xs text-[#769149]">ETAPA {stage.number}</p>
                  <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.06em]">{stage.title}</h3>
                  {stage.introduction && <p className="mt-5 max-w-md leading-7 text-[#526057]">{stage.introduction}</p>}
                </div>
                <div className="grid gap-px bg-[#101412]/15">
                  {stage.items.map((item) => (
                    <article key={item.number} className="grid gap-5 bg-white p-6 sm:grid-cols-[64px_1fr] sm:p-8">
                      <span className="font-mono text-2xl text-[#769149]">{item.number}</span>
                      <div>
                        <h4 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h4>
                        <p className="mt-3 leading-7 text-[#526057]">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 lg:ml-[27.5%]">
          <CourseInterestLink ctaId="formacao-conteudo-interesse" tone="light">Quero desenvolver essas habilidades</CourseInterestLink>
        </div>
      </div>
    </section>
  );
}

export function MethodSection({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#101412] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel dark>O método Denkor</SectionLabel>
        <h2 className="mt-7 max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">
          {course.method.title}
        </h2>

        <div className="mt-12 grid border border-white/15 lg:grid-cols-4">
          {course.method.steps.map((step, index) => (
            <div key={step.number} className="group relative border-b border-white/15 p-6 transition-colors duration-200 hover:bg-white/[0.04] last:border-b-0 lg:min-h-72 lg:border-r lg:border-b-0 lg:p-8 lg:last:border-r-0">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-lime-300">{step.number}</span>
                {index < course.method.steps.length - 1 && (
                  <>
                    <ArrowDown className="size-4 text-white/30 lg:hidden" aria-hidden="true" />
                    <ArrowRight className="hidden size-4 text-white/30 lg:block" aria-hidden="true" />
                  </>
                )}
              </div>
              <h3 className="mt-12 text-lg font-semibold uppercase tracking-[0.08em]">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{step.question}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-lime-300 transition-[width] duration-200 group-hover:w-full" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliverablesSection({ course }: { course: CourseContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <SectionLabel>Aplicação prática</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">{course.deliverables.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#526057]">{course.deliverables.subtitle}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-[#101412]/15 sm:grid-cols-2">
          {course.deliverables.items.map((item) => (
            <div key={item} className="course-reveal flex min-h-20 items-start gap-4 bg-[#f3f0e7] p-5 sm:p-6">
              <Check className="mt-1 size-4 shrink-0 text-[#769149]" strokeWidth={2} aria-hidden="true" />
              <span className="leading-7 text-[#344039]">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-l-2 border-lime-300 bg-[#101412] p-6 text-white lg:grid-cols-[1fr_auto] lg:items-center lg:p-9">
          <p className="max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.03em]">{course.deliverables.highlight}</p>
          <CourseInterestLink ctaId="formacao-projeto-interesse">Quero construir meu projeto</CourseInterestLink>
        </div>
      </div>
    </section>
  );
}

export function IllustrativeExample({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#f3f0e7]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <div>
            <SectionLabel>Exemplo simples</SectionLabel>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#526057]">{course.example.disclaimer}</p>
          </div>
          <div>
            <h2 className="text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">{course.example.title}</h2>
            <div className="mt-10 border-t border-[#101412]/20">
              {course.example.steps.map((step, index) => (
                <div key={step.label} className="course-reveal grid gap-3 border-b border-[#101412]/20 py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#769149]">{String(index + 1).padStart(2, '0')} · {step.label}</p>
                  <p className="text-lg leading-8 text-[#344039]">{step.label === 'Problema' ? `“${step.text}”` : step.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-8">{course.example.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApplicationAreas({ course }: { course: CourseContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel>Áreas de aplicação</SectionLabel>
        <h2 className="mt-7 max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">Onde esse conhecimento pode ser usado</h2>
        <div className="mt-12 grid gap-px bg-[#101412]/15 sm:grid-cols-2 lg:grid-cols-5">
          {course.applicationAreas.map((area) => (
            <article key={area.name} className="group min-h-48 bg-[#f3f0e7] p-5 transition-colors duration-200 hover:bg-[#101412] hover:text-white sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">{area.name}</h3>
              {area.question && <p className="mt-12 text-sm leading-6 text-[#526057] transition-colors duration-200 group-hover:text-white/65">“{area.question}”</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitySection({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#f3f0e7]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
          <SectionLabel>Depois da formação</SectionLabel>
          <div>
            <h2 className="max-w-4xl text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">Depois da formação, você terá um novo jeito de olhar para IA.</h2>
            <p className="mt-6 text-lg leading-8 text-[#526057]">Você será capaz de:</p>
            <div className="mt-8 grid gap-x-10 gap-y-0 border-t border-[#101412]/20 sm:grid-cols-2">
              {course.capabilities.map((capability) => (
                <div key={capability} className="flex gap-4 border-b border-[#101412]/20 py-5">
                  <Check className="mt-1 size-4 shrink-0 text-[#769149]" strokeWidth={2} aria-hidden="true" />
                  <span className="leading-7 text-[#344039]">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#101412] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-16 lg:px-12 lg:py-24">
        <SectionLabel dark>Transparência</SectionLabel>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em] lg:text-[3rem] lg:leading-[3.375rem]">{course.boundaries.title}</h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-white/65">
            {course.boundaries.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-8 border-l-2 border-lime-300 pl-6 text-xl font-semibold leading-8">“{course.boundaries.highlight}”</p>
        </div>
      </div>
    </section>
  );
}

export function CourseDetails({ course }: { course: CourseContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionLabel>Como funciona</SectionLabel>
        <div className="mt-12 grid gap-px bg-[#101412]/15 sm:grid-cols-2 lg:grid-cols-5">
          {course.details.map((detail) => (
            <article key={detail.label} className="min-h-48 bg-[#f3f0e7] p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#769149]">{detail.label}</h3>
              <div className="mt-10 space-y-1 text-lg font-semibold leading-7">
                {detail.lines.map((line) => <p key={line}>{line}</p>)}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CourseInterestLink ctaId="formacao-como-funciona-interesse" tone="light">Quero conhecer a formação</CourseInterestLink>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ course }: { course: CourseContent }) {
  return (
    <section className="bg-[#f3f0e7]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-16 lg:px-12 lg:py-28">
        <div>
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="mt-7 text-[2rem] font-semibold leading-[2.375rem] tracking-[-0.045em]">Dúvidas comuns</h2>
        </div>
        <Accordion className="border-t border-[#101412]/20">
          {course.faq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-b border-[#101412]/20">
              <AccordionTrigger className="min-h-20 rounded-none py-5 text-base font-semibold text-[#101412] hover:no-underline focus-visible:border-transparent focus-visible:ring-[#769149] sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-[#526057]">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
