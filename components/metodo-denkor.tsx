import { ArrowDown, ArrowRight } from 'lucide-react';
import { metodoDenkor } from '@/content/metodo';
import { cn } from '@/lib/utils';

export function MetodoDenkor({
  tone = 'dark',
  compact = false,
  stepHeadingLevel = 'h3',
  className,
}: {
  tone?: 'dark' | 'light';
  compact?: boolean;
  stepHeadingLevel?: 'h2' | 'h3';
  className?: string;
}) {
  const dark = tone === 'dark';
  const StepHeading = stepHeadingLevel;

  if (compact) {
    return (
      <div
        className={cn(
          'border-t',
          dark ? 'border-white/15' : 'border-[#101412]/20',
          className,
        )}
      >
        {metodoDenkor.map((step) => (
          <div
            key={step.number}
            className={cn(
              'flex items-start gap-5 border-b py-4 text-sm',
              dark
                ? 'border-white/15 text-white/70'
                : 'border-[#101412]/20 text-[#526057]',
            )}
          >
            <span
              className={cn(
                'font-mono text-xs',
                dark ? 'text-lime-300' : 'text-[#769149]',
              )}
            >
              {step.number}
            </span>
            <div>
              <p
                className={cn(
                  'font-semibold uppercase tracking-[0.12em]',
                  dark ? 'text-white' : 'text-[#101412]',
                )}
              >
                {step.title}
              </p>
              <p className="mt-1 leading-6">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid border lg:grid-cols-4',
        dark ? 'border-white/15' : 'border-[#101412]/20',
        className,
      )}
    >
      {metodoDenkor.map((step, index) => (
        <article
          key={step.number}
          className={cn(
            'group relative border-b p-6 transition-colors duration-200 last:border-b-0 lg:min-h-72 lg:border-r lg:border-b-0 lg:p-8 lg:last:border-r-0',
            dark
              ? 'border-white/15 hover:bg-white/[0.04]'
              : 'border-[#101412]/20 bg-white hover:bg-[#f3f0e7]',
          )}
        >
          <div className="flex items-center justify-between">
            <span
              className={cn(
                'font-mono text-sm',
                dark ? 'text-lime-300' : 'text-[#769149]',
              )}
            >
              {step.number}
            </span>
            {index < metodoDenkor.length - 1 && (
              <>
                <ArrowDown
                  className={cn(
                    'size-4 lg:hidden',
                    dark ? 'text-white/30' : 'text-[#101412]/35',
                  )}
                  aria-hidden="true"
                />
                <ArrowRight
                  className={cn(
                    'hidden size-4 lg:block',
                    dark ? 'text-white/30' : 'text-[#101412]/35',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </div>
          <StepHeading
            className={cn(
              'mt-12 text-lg font-semibold uppercase tracking-[0.08em]',
              dark ? 'text-white' : 'text-[#101412]',
            )}
          >
            {step.title}
          </StepHeading>
          <p
            className={cn(
              'mt-4 leading-7',
              dark ? 'text-white/60' : 'text-[#526057]',
            )}
          >
            {step.description}
          </p>
          <span
            className="absolute bottom-0 left-0 h-1 w-0 bg-lime-300 transition-[width] duration-200 group-hover:w-full"
            aria-hidden="true"
          />
        </article>
      ))}
    </div>
  );
}
