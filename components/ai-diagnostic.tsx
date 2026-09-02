'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw, Target } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  diagnosticQuestions,
  diagnosticResults,
  getDiagnosticResult,
  type DiagnosticAnswerMap,
  type DiagnosticProfile,
  type DiagnosticResultId,
} from '@/lib/diagnostic';
import { trackDiagnosticEvent } from '@/lib/diagnostic-analytics';

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
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
        <div>
          <Target className="size-9 text-[#536351]" strokeWidth={1.5} aria-hidden="true" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#536351]">A pergunta certa</p>
        </div>
        <div>
          <h2 className="max-w-5xl text-[clamp(2.3rem,4.8vw,5rem)] font-semibold leading-[1] tracking-[-0.055em] text-[#101412]">
            Onde a inteligência artificial pode gerar resultado real?
          </h2>
          <p className="mt-7 text-lg leading-8 text-[#526057]">Descubra qual caminho faz mais sentido para você.</p>
        </div>
      </div>

      <div className="mt-14 grid border-y border-[#101412]/15 lg:grid-cols-2">
        {profileChoices.map((choice, index) => (
          <Button
            key={choice.id}
            type="button"
            variant="ghost"
            onClick={() => onSelect(choice.id)}
            className={`group relative h-auto min-h-[230px] w-full flex-col items-start justify-between rounded-none px-0 py-8 text-left whitespace-normal hover:bg-[#f3f0e7] focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[#65764b] sm:px-8 lg:min-h-[280px] lg:py-10 ${
              index === 0 ? 'border-b border-[#101412]/15 lg:border-r lg:border-b-0' : ''
            }`}
          >
            <div className="flex w-full items-start justify-between">
              <span className="font-mono text-xs text-[#65764b]">{choice.number}</span>
              <ArrowUpRight className="size-5 text-[#65764b] transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" aria-hidden="true" />
            </div>
            <div className="mt-16 max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101412]">{choice.title}</span>
              <p className="mt-4 text-base leading-7 font-normal text-[#526057]">{choice.text}</p>
            </div>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#769149] transition-[width] duration-300 group-hover/button:w-full group-focus-visible/button:w-full" />
          </Button>
        ))}
      </div>

      <p className="mt-7 text-sm text-[#657069]">IA começa no processo, não na ferramenta.</p>
    </div>
  );
}

function DiagnosticProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-5" aria-label={`Pergunta ${current} de ${total}`}>
      <span className="font-mono text-xs text-lime-300">{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      <div className="flex w-full max-w-40 gap-2" aria-hidden="true">
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

  return (
    <div className="mx-auto min-h-[720px] max-w-[1440px] px-5 py-16 sm:px-8 lg:grid lg:grid-cols-[.62fr_1.38fr] lg:gap-16 lg:px-12 lg:py-24">
      <aside className="flex flex-col justify-between border-b border-white/12 pb-10 lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">Diagnóstico Denkor</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">Uma orientação curta para encontrar o próximo passo mais coerente com o seu momento.</p>
        </div>
        <div className="mt-10">
          <DiagnosticProgress current={step + 1} total={questions.length} />
          <Button type="button" variant="ghost" onClick={onBack} className="mt-8 h-auto rounded-none px-0 py-2 text-sm text-white/45 hover:bg-transparent hover:text-white focus-visible:ring-lime-300/70">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Button>
        </div>
      </aside>

      <div key={`${profile}-${step}`} className="diagnostic-enter pt-10 lg:pt-0">
        <p className="font-mono text-xs text-white/35">PERGUNTA {String(step + 1).padStart(2, '0')}</p>
        <h3 className="mt-6 max-w-4xl text-[clamp(2.25rem,4.6vw,4.8rem)] font-semibold leading-[1] tracking-[-0.055em] text-white">
          {question.prompt}
        </h3>
        <div className="mt-10 border-t border-white/15">
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedOption === option.id;
            return (
              <Button
                key={option.id}
                type="button"
                variant="ghost"
                disabled={selectedOption !== null}
                aria-pressed={isSelected}
                onClick={() => onAnswer(option.id)}
                className={`group relative h-auto min-h-18 w-full justify-start rounded-none border-b border-white/15 px-0 py-5 text-left text-base whitespace-normal transition-colors duration-300 focus-visible:border-white/15 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime-300/80 sm:min-h-20 sm:px-4 ${
                  isSelected ? 'bg-lime-300 text-[#101412]' : 'text-white/65 hover:bg-white/[0.045] hover:text-white'
                }`}
              >
                <span className={`mr-5 font-mono text-xs ${isSelected ? 'text-[#101412]/60' : 'text-lime-300'}`}>
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span className="pr-8 leading-6 font-normal">{option.label}</span>
                <ArrowRight className={`ml-auto size-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-1 ${isSelected ? 'text-[#101412]' : 'text-white/25'}`} aria-hidden="true" />
                <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-[width] duration-300 group-hover/button:w-full group-focus-visible/button:w-full" />
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DiagnosticResultView({ resultId, onRestart }: { resultId: DiagnosticResultId; onRestart: () => void }) {
  const result = diagnosticResults[resultId];

  return (
    <div className="diagnostic-enter mx-auto min-h-[720px] max-w-[1440px] px-5 py-16 sm:px-8 lg:grid lg:grid-cols-[.62fr_1.38fr] lg:gap-16 lg:px-12 lg:py-24">
      <aside className="flex flex-col justify-between border-b border-white/12 pb-10 lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">Seu caminho</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">Recomendação baseada nas prioridades que você indicou.</p>
        </div>
        <p className="mt-10 text-sm text-white/45">IA começa no processo, não na ferramenta.</p>
      </aside>

      <div className="pt-10 lg:pt-0">
        <p className="font-mono text-xs text-lime-300">RECOMENDAÇÃO DENKOR</p>
        <h3 className="mt-6 max-w-4xl text-[clamp(2.7rem,5.8vw,6.3rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">{result.title}</h3>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">{result.text}</p>

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

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Link
            href={result.href}
            onClick={() => trackDiagnosticEvent('diagnostic_cta_clicked', { result: result.id, href: result.href })}
            className="group inline-flex min-h-14 items-center justify-between gap-8 bg-lime-300 px-5 font-semibold text-[#101412] transition-colors hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          >
            {result.ctaLabel}
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
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

    experienceRef.current.focus({ preventScroll: true });
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

    transitionTimer.current = setTimeout(() => {
      setAnswers(nextAnswers);
      setSelectedOption(null);

      if (step === questions.length - 1) {
        const result = getDiagnosticResult(profile, nextAnswers);
        setResultId(result.id);
        setView('result');
        trackDiagnosticEvent('diagnostic_completed', { profile, result: result.id });
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
    <section id="diagnostico" className={`transition-colors duration-300 ${view === 'start' ? 'bg-white text-[#101412]' : 'bg-[#101412] text-white'}`}>
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
        {view === 'result' && resultId && <DiagnosticResultView resultId={resultId} onRestart={restart} />}
      </div>
    </section>
  );
}
