'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw, Target } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp';
import {
  diagnosticQuestions,
  diagnosticResults,
  getDiagnosticResult,
  type DiagnosticAnswerMap,
  type DiagnosticProfile,
  type DiagnosticResultId,
} from '@/lib/diagnostic';
import { trackDiagnosticEvent } from '@/lib/analytics';

type DiagnosticView = 'start' | 'questions' | 'result';

const profileChoices: Array<{
  id: DiagnosticProfile;
  number: string;
  title: string;
  text: string;
}> = [
  {
    id: 'professional',
    number: '01',
    title: 'Sou profissional',
    text: 'Quero desenvolver capacidade para aplicar IA em negócios.',
  },
  {
    id: 'company',
    number: '02',
    title: 'Represento uma empresa',
    text: 'Quero encontrar oportunidades reais de IA dentro da operação.',
  },
];

function DiagnosticStart({ onSelect }: { onSelect: (profile: DiagnosticProfile) => void }) {
  return (
    <>
      <div className="border-y border-[#101412]/15 bg-lime-300 text-[#101412]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-4 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Diagnóstico interativo Denkor</p>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#344039] sm:gap-5">
            <span>3 perguntas</span>
            <span className="h-3 w-px bg-[#101412]/25" aria-hidden="true" />
            <span>Cerca de 1 minuto</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-7 lg:grid-cols-[.62fr_1.38fr] lg:gap-12">
          <div className="flex items-center gap-4 lg:block">
            <Target className="size-8 shrink-0 text-[#526057] lg:size-9" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526057] lg:mt-6">Comece por aqui</p>
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(2.45rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#101412]">
              Onde a inteligência artificial pode gerar resultado real?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#526057] sm:mt-7 sm:text-lg sm:leading-8">
              Responda a um diagnóstico curto e descubra qual caminho da Denkor faz mais sentido para você.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-[#101412]/15 pt-5 sm:mt-12">
          <span className="size-2 bg-[#769149]" aria-hidden="true" />
          <p className="text-sm font-medium text-[#344039]">Escolha seu perfil para iniciar o questionário</p>
        </div>

        <div className="mt-5 grid border-y border-[#101412]/15 bg-white/35 lg:grid-cols-2">
          {profileChoices.map((choice, index) => (
            <Button
              key={choice.id}
              type="button"
              variant="ghost"
              onClick={() => onSelect(choice.id)}
              className={`group relative h-auto min-h-[190px] w-full flex-col items-start justify-between rounded-none px-5 py-6 text-left whitespace-normal hover:bg-white focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[#769149] sm:min-h-[220px] sm:px-8 sm:py-8 lg:min-h-[260px] lg:py-10 ${
                index === 0 ? 'border-b border-[#101412]/15 lg:border-r lg:border-b-0' : ''
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="font-mono text-xs text-[#526057]">{choice.number}</span>
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#526057]">
                  Começar
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-10 max-w-lg sm:mt-14">
                <span className="text-sm font-semibold uppercase tracking-[0.17em] text-[#101412]">{choice.title}</span>
                <p className="mt-3 text-[15px] leading-6 font-normal text-[#526057] sm:mt-4 sm:text-base sm:leading-7">{choice.text}</p>
              </div>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#769149] transition-[width] duration-300 group-hover/button:w-full group-focus-visible/button:w-full" />
            </Button>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#526057]">IA começa no processo, não na ferramenta.</p>
      </div>
    </>
  );
}

function DiagnosticProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex shrink-0 items-center gap-3 sm:gap-5" aria-label={`Pergunta ${current} de ${total}`}>
      <span className="whitespace-nowrap font-mono text-xs text-lime-300">{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <div className="flex w-16 gap-2 sm:w-40" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => (
          <span key={index} className={`h-px flex-1 transition-colors duration-300 ${index < current ? 'bg-lime-300' : 'bg-white/20'}`} />
        ))}
      </div>
    </div>
  );
}

function DiagnosticQuestionView({
  profile,
  step,
  selectedOption,
  onAnswer,
  onBack,
}: {
  profile: DiagnosticProfile;
  step: number;
  selectedOption: string | null;
  onAnswer: (optionId: string) => void;
  onBack: () => void;
}) {
  const questions = diagnosticQuestions[profile];
  const question = questions[step];
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [profile, step]);

  return (
    <div className="mx-auto min-h-[100svh] max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[720px] lg:grid lg:grid-cols-[.62fr_1.38fr] lg:gap-16 lg:px-12 lg:py-24">
      <aside className="flex flex-col justify-between border-b border-white/12 pb-6 lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">Diagnóstico Denkor</p>
          <p className="mt-4 hidden max-w-xs text-sm leading-6 text-white/45 sm:block">Uma orientação curta para encontrar o próximo passo mais coerente com o seu momento.</p>
        </div>
        <div className="mt-6 flex items-center justify-between gap-5 lg:mt-10 lg:block">
          <DiagnosticProgress current={step + 1} total={questions.length} />
          <Button type="button" variant="ghost" onClick={onBack} className="h-auto rounded-none px-0 py-2 text-sm text-white/45 hover:bg-transparent hover:text-white focus-visible:ring-lime-300/70 lg:mt-8">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Button>
        </div>
      </aside>

      <div key={`${profile}-${step}`} className="diagnostic-enter pt-8 lg:pt-0">
        <p className="font-mono text-xs text-white/35">PERGUNTA {String(step + 1).padStart(2, '0')} · ESCOLHA UMA RESPOSTA</p>
        <h3
          id={`diagnostic-question-${profile}-${step}`}
          ref={headingRef}
          tabIndex={-1}
          className="mt-5 max-w-4xl text-[clamp(1.95rem,8.5vw,4.8rem)] font-semibold leading-[1] tracking-[-0.05em] text-white outline-none sm:mt-6"
        >
          {question.prompt}
        </h3>
        <div
          role="radiogroup"
          aria-labelledby={`diagnostic-question-${profile}-${step}`}
          className="mt-8 border-t border-white/15 sm:mt-10"
        >
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedOption === option.id;
            return (
              <label
                key={option.id}
                className={`group relative flex min-h-16 w-full cursor-pointer items-center border-b border-white/15 px-0 py-4 text-left text-[15px] transition-colors duration-300 has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-[-3px] has-[:focus-visible]:outline-[#dff57a] sm:min-h-20 sm:px-4 sm:py-5 sm:text-base ${
                  isSelected ? 'bg-lime-300 text-[#101412]' : 'text-white/65 hover:bg-white/[0.045] hover:text-white'
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={isSelected}
                  disabled={selectedOption !== null}
                  onChange={() => onAnswer(option.id)}
                  className="sr-only"
                />
                <span className={`mr-5 font-mono text-xs ${isSelected ? 'text-[#101412]/60' : 'text-lime-300'}`}>
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span className="pr-8 leading-6 font-normal">{option.label}</span>
                <ArrowRight className={`ml-auto size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${isSelected ? 'text-[#101412]' : 'text-white/25'}`} aria-hidden="true" />
                <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-[width] duration-300 group-hover:w-full" />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DiagnosticResultView({
  resultId,
  onRestart,
}: {
  resultId: DiagnosticResultId;
  onRestart: () => void;
}) {
  const result = diagnosticResults[resultId];

  return (
    <div className="diagnostic-enter mx-auto min-h-[100svh] max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[720px] lg:grid lg:grid-cols-[.62fr_1.38fr] lg:gap-16 lg:px-12 lg:py-24">
      <aside className="flex flex-col justify-between border-b border-white/12 pb-6 lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">Seu caminho</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">Recomendação baseada nas prioridades que você indicou.</p>
        </div>
        <p className="mt-10 text-sm text-white/45">IA começa no processo, não na ferramenta.</p>
      </aside>

      <div className="pt-8 lg:pt-0">
        <p className="font-mono text-xs text-lime-300">RECOMENDAÇÃO DENKOR</p>
        <h3 className="mt-5 max-w-4xl text-[clamp(2.35rem,10vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:mt-6">{result.title}</h3>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8">{result.text}</p>

        {result.steps && (
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Próximo passo recomendado</p>
            <div className="mt-6 grid border-y border-white/15 sm:grid-cols-2">
              {result.steps.map((step, index) => (
                <div key={step} className={`flex min-h-18 items-center gap-4 border-b border-white/15 py-5 text-sm text-white/65 sm:px-4 ${index % 2 === 0 ? 'sm:border-r' : ''} ${index > 1 ? 'sm:border-b-0' : ''}`}>
                  <span className="font-mono text-xs text-lime-300">{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col items-start gap-5 sm:mt-12">
          <WhatsAppButton
            contextKey="home_diagnostico"
            ctaId="diagnostico-resultado"
            position="diagnostico-resultado"
            extra={{ resultado: result.title }}
          >
            Falar com a Denkor sobre isso
          </WhatsAppButton>
          <Link
            href={result.href}
            className="text-sm text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#dff57a]"
          >
            Ver a página do programa
          </Link>
          <Button type="button" variant="ghost" onClick={onRestart} className="h-auto rounded-none px-0 py-2 text-sm text-white/45 hover:bg-transparent hover:text-white focus-visible:ring-lime-300/70">
            <RotateCcw className="size-4" aria-hidden="true" />
            Refazer diagnóstico
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AIDiagnostic() {
  const [view, setView] = useState<DiagnosticView>('start');
  const [profile, setProfile] = useState<DiagnosticProfile | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswerMap>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [resultId, setResultId] = useState<DiagnosticResultId | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const questions = useMemo(() => (profile ? diagnosticQuestions[profile] : []), [profile]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  useEffect(() => {
    if (view === 'start' || !experienceRef.current) return;

    experienceRef.current.scrollIntoView({
      block: 'start',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [step, view]);

  const selectProfile = (selectedProfile: DiagnosticProfile) => {
    setProfile(selectedProfile);
    setStep(0);
    setAnswers({});
    setResultId(null);
    setView('questions');
    trackDiagnosticEvent('diagnostic_started', { profile: selectedProfile });
    trackDiagnosticEvent('diagnostic_profile_selected', { profile: selectedProfile });
    trackDiagnosticEvent('diagnostico_start', { profile: selectedProfile });
  };

  const answerQuestion = (optionId: string) => {
    if (!profile || selectedOption) return;

    const question = questions[step];
    const nextAnswers = { ...answers, [question.id]: optionId };
    setSelectedOption(optionId);
    trackDiagnosticEvent('diagnostic_answer', {
      profile,
      question: question.id,
      answer: optionId,
      step: step + 1,
    });
    trackDiagnosticEvent('diagnostico_step', {
      profile,
      question: question.id,
      answer: optionId,
      step: step + 1,
    });

    transitionTimer.current = setTimeout(() => {
      setAnswers(nextAnswers);
      setSelectedOption(null);

      if (step === questions.length - 1) {
        const result = getDiagnosticResult(profile, nextAnswers);
        setResultId(result.id);
        setView('result');
        trackDiagnosticEvent('diagnostic_completed', { profile, result: result.id });
        trackDiagnosticEvent('diagnostico_complete', { profile, result: result.id });
        return;
      }

      setStep((currentStep) => currentStep + 1);
    }, 360);
  };

  const goBack = () => {
    if (!profile || selectedOption) return;

    if (step === 0) {
      setView('start');
      setProfile(null);
      setAnswers({});
      return;
    }

    const previousQuestion = questions[step - 1];
    const previousAnswers = { ...answers };
    delete previousAnswers[previousQuestion.id];
    setAnswers(previousAnswers);
    setStep((currentStep) => currentStep - 1);
  };

  const restart = () => {
    setView('start');
    setProfile(null);
    setStep(0);
    setAnswers({});
    setSelectedOption(null);
    setResultId(null);
  };

  return (
    <section id="diagnostico" className={`scroll-mt-0 transition-colors duration-300 ${view === 'start' ? 'bg-[#f3f0e7] text-[#101412]' : 'bg-[#101412] text-white'}`}>
      <div ref={experienceRef} tabIndex={-1} className="outline-none" aria-live="polite">
        {view === 'start' && <DiagnosticStart onSelect={selectProfile} />}
        {view === 'questions' && profile && (
          <DiagnosticQuestionView
            profile={profile}
            step={step}
            selectedOption={selectedOption}
            onAnswer={answerQuestion}
            onBack={goBack}
          />
        )}
        {view === 'result' && resultId && profile && (
          <DiagnosticResultView resultId={resultId} onRestart={restart} />
        )}
      </div>
    </section>
  );
}
