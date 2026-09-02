import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowRight, BriefcaseBusiness, Building2, Mail } from 'lucide-react';
import { InnerHero, SectionLabel, SiteFooter, SiteHeader } from '@/components/site-shell';

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
        text="Conte para a Denkor o que você quer construir: uma nova capacidade profissional ou uma nova capacidade para sua empresa."
        index="04"
      />

      <section className="bg-[#f3f0e7]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-px bg-[#101412]/15 lg:grid-cols-2">
            <Link href="#formulario" className="group bg-white p-7 transition-colors hover:bg-[#faf9f5] sm:p-10 lg:p-12">
              <div className="flex items-start justify-between">
                <BriefcaseBusiness className="size-8 text-[#65764b]" strokeWidth={1.5} aria-hidden="true" />
                <ArrowDown className="size-5 text-[#65764b] transition-transform group-hover:translate-y-1" aria-hidden="true" />
              </div>
              <p className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-[#65764b]">Para profissionais</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412]">Quero me tornar especialista em IA para negócios.</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#526057]">Receba informações sobre as formações e descubra qual caminho combina com seu objetivo.</p>
            </Link>
            <Link href="#formulario" className="group bg-[#dff57a] p-7 transition-colors hover:bg-lime-200 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between">
                <Building2 className="size-8 text-[#46533a]" strokeWidth={1.5} aria-hidden="true" />
                <ArrowDown className="size-5 text-[#46533a] transition-transform group-hover:translate-y-1" aria-hidden="true" />
              </div>
              <p className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-[#46533a]">Para empresas</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412]">Quero levar IA para minha empresa.</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#46533a]">Converse sobre o desafio da sua operação e veja qual programa pode ajudar sua empresa a começar.</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="formulario" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12 lg:py-28">
          <div>
            <SectionLabel>Fale com a Denkor</SectionLabel>
            <h2 className="mt-7 max-w-md text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#101412]">Qual é o seu próximo passo?</h2>
            <p className="mt-6 max-w-md leading-7 text-[#526057]">Preencha os dados abaixo. Ao finalizar, seu aplicativo de e-mail será aberto com as informações organizadas para envio.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#526057]">
              <Mail className="size-4 text-[#65764b]" aria-hidden="true" />
              contato@denkor.com.br
            </div>
          </div>

          <form action="mailto:contato@denkor.com.br" method="post" encType="text/plain" className="grid gap-6" aria-label="Formulário de contato">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#101412]">
                Nome
                <input required name="Nome" autoComplete="name" className="h-13 border border-[#101412]/20 bg-[#f8f6ef] px-4 outline-none transition-colors focus:border-[#65764b]" placeholder="Seu nome" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#101412]">
                E-mail
                <input required name="Email" type="email" autoComplete="email" className="h-13 border border-[#101412]/20 bg-[#f8f6ef] px-4 outline-none transition-colors focus:border-[#65764b]" placeholder="voce@empresa.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#101412]">
              Interesse
              <select required name="Interesse" defaultValue="" className="h-13 border border-[#101412]/20 bg-[#f8f6ef] px-4 outline-none transition-colors focus:border-[#65764b]">
                <option value="" disabled>Selecione uma opção</option>
                <option>Formação Especialista em IA para Negócios</option>
                <option>Formação Consultor de IA para Empresas</option>
                <option>AI Transformation Day</option>
                <option>AI Champions</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-[#101412]">
              Conte um pouco sobre seu objetivo
              <textarea required name="Mensagem" rows={6} className="resize-y border border-[#101412]/20 bg-[#f8f6ef] p-4 outline-none transition-colors focus:border-[#65764b]" placeholder="Como podemos ajudar?" />
            </label>
            <button type="submit" className="group inline-flex min-h-14 items-center justify-between gap-8 bg-[#101412] px-5 font-semibold text-white transition-colors hover:bg-[#273129] sm:justify-self-start">
              Preparar contato
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
