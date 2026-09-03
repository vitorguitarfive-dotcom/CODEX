import Link from 'next/link';
import { Menu } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp';
import type { WhatsAppContextKey } from '@/lib/whatsapp';

const navigation = [
  { label: 'Profissionais', href: '/profissionais' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Sobre a Denkor', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export function Brand({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Denkor — início">
      <span
        className={`grid size-9 place-items-center border text-sm font-semibold transition-colors ${
          light
            ? 'border-lime-300/40 text-lime-300 group-hover:bg-lime-300 group-hover:text-[#101412]'
            : 'border-[#101412]/25 text-[#101412] group-hover:bg-[#101412] group-hover:text-lime-300'
        }`}
      >
        D
      </span>
      <span className={`text-lg font-semibold tracking-[0.18em] ${light ? 'text-white' : 'text-[#101412]'}`}>
        DENKOR
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-white/10 bg-[#101412]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Brand />

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <WhatsAppButton
            contextKey="header_falar_com_denkor"
            ctaId="header-whatsapp"
            position="header"
            className="min-h-10 px-4 text-sm"
            microcopyTone="dark"
          >
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <details className="group relative sm:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center border border-white/20 text-white [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </summary>
          <div className="absolute right-0 top-12 w-[min(88vw,320px)] border border-white/10 bg-[#151a17] p-3 shadow-2xl">
            <nav aria-label="Navegação móvel" className="flex flex-col">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-white/10 px-3 py-4 text-sm text-white/75 last:border-0 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 px-3 pb-2">
              <WhatsAppButton
                contextKey="header_falar_com_denkor"
                ctaId="header-whatsapp-mobile"
                position="menu-mobile"
                className="w-full text-sm"
                microcopyTone="dark"
              >
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0c100e] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-12 lg:py-20">
        <div>
          <Brand />
          <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
            Educação e transformação empresarial através da inteligência artificial.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Explore</p>
          <nav className="mt-5 flex flex-col gap-3" aria-label="Links do rodapé">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">Próximo passo</p>
          <div className="mt-5">
            <WhatsAppButton
              contextKey="header_falar_com_denkor"
              ctaId="footer-whatsapp"
              position="footer"
              variant="secondary"
              className="w-full border-white/30 text-white hover:bg-white hover:text-[#101412] focus-visible:outline-[#dff57a]"
              microcopyTone="dark"
            >
              Conversar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
          <p className="text-sm text-white/65">
            Prefere e-mail? Escreva para{' '}
            <a href="mailto:contato@denkor.com.br" className="underline decoration-white/30 underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#dff57a]">
              contato@denkor.com.br
            </a>
          </p>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Denkor</span>
            <span>Intelligence for Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-lime-300' : 'text-[#536351]'}`}>
      <span className={`h-px w-8 ${dark ? 'bg-lime-300' : 'bg-[#536351]'}`} />
      {children}
    </p>
  );
}

export function ClosingCta({
  title = 'Transforme intenção em aplicação real.',
  label = 'Conversar com a Denkor',
  contextKey = 'home_cta_final',
  ctaId = 'cta-final-home',
}: {
  title?: string;
  label?: string;
  contextKey?: WhatsAppContextKey;
  ctaId?: string;
}) {
  return (
    <section className="bg-lime-300 text-[#101412]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Comece por onde faz sentido</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
            {title}
          </h2>
        </div>
        <WhatsAppButton contextKey={contextKey} ctaId={ctaId} position="final" variant="secondary">
          {label}
        </WhatsAppButton>
      </div>
    </section>
  );
}

export function InnerHero({
  eyebrow,
  title,
  text,
  index,
  whatsapp,
}: {
  eyebrow: string;
  title: string;
  text: string;
  index: string;
  whatsapp?: { label: string; contextKey: WhatsAppContextKey; ctaId: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#101412] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:68px_68px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      <div className="mx-auto grid max-w-[1440px] px-5 py-16 sm:px-8 lg:min-h-[620px] lg:grid-cols-[1fr_300px] lg:px-12 lg:py-24">
        <div className="flex flex-col justify-center lg:border-r lg:border-white/10 lg:pr-16">
          <SectionLabel dark>{eyebrow}</SectionLabel>
          <h1 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.91] tracking-[-0.065em]">{title}</h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">{text}</p>
          {whatsapp && (
            <div className="mt-8">
              <WhatsAppButton
                contextKey={whatsapp.contextKey}
                ctaId={whatsapp.ctaId}
                position="hero"
                microcopyTone="dark"
              >
                {whatsapp.label}
              </WhatsAppButton>
            </div>
          )}
        </div>
        <div className="mt-14 flex items-end justify-between border-t border-white/10 pt-8 lg:mt-0 lg:border-t-0 lg:pl-10">
          <p className="text-[11px] uppercase leading-5 tracking-[0.18em] text-white/35">
            DENKOR
            <br />
            Intelligence for Business
          </p>
          <span className="font-mono text-5xl text-lime-300/80">{index}</span>
        </div>
      </div>
    </section>
  );
}
