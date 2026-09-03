import type { Metadata } from 'next';
import { BriefcaseBusiness, Building2 } from 'lucide-react';
import { InnerHero, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';
import { WhatsAppButton } from '@/components/whatsapp';

export const metadata: Metadata = {
  title: 'Contato | Denkor',
  description: 'Converse com a Denkor sobre formações para profissionais ou programas para empresas.',
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <InnerHero
        eyebrow="Contato"
        title="Toda transformação começa com uma boa conversa."
        text="Escolha o contexto que representa seu momento. A conversa já começa com a direção certa."
        index="04"
      />

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionLabel>Escolha seu caminho</SectionLabel>
          <div className="mt-10 grid gap-px bg-[#101412]/15 lg:grid-cols-2">
            <article className="bg-white p-7 sm:p-10 lg:p-12">
              <BriefcaseBusiness className="size-8 text-[#769149]" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-[#526057]">Para profissionais</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412]">
                Quero me tornar especialista em IA para negócios.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#526057]">
                Converse sobre as formações e descubra qual caminho combina com seu objetivo profissional.
              </p>
              <div className="mt-9">
                <WhatsAppButton
                  contextKey="contato_profissional"
                  ctaId="contato-profissional"
                  position="contato"
                  className="bg-[#101412] text-white hover:bg-[#344039] focus-visible:outline-[#769149]"
                >
                  Falar sobre as formações
                </WhatsAppButton>
              </div>
            </article>

            <article className="bg-[#101412] p-7 text-white sm:p-10 lg:p-12">
              <Building2 className="size-8 text-[#dff57a]" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Para empresas</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em]">
                Quero levar IA para minha empresa.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Conte o desafio da sua operação e entenda qual programa pode ajudar sua empresa a começar.
              </p>
              <div className="mt-9">
                <WhatsAppButton
                  contextKey="contato_empresa"
                  ctaId="contato-empresa"
                  position="contato"
                  microcopyTone="dark"
                >
                  Falar sobre minha empresa
                </WhatsAppButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
