export type DiagnosticProfile = 'professional' | 'company';

export type DiagnosticAnswerMap = Record<string, string>;

export type DiagnosticOption = {
  id: string;
  label: string;
};

export type DiagnosticQuestion = {
  id: string;
  prompt: string;
  options: DiagnosticOption[];
};

export type DiagnosticResultId =
  | 'business-ai-specialist'
  | 'ai-consultant'
  | 'ai-transformation-day'
  | 'ai-champions';

export type DiagnosticResult = {
  id: DiagnosticResultId;
  title: string;
  text: string;
  href: string;
  steps?: string[];
};

export const diagnosticQuestions: Record<DiagnosticProfile, DiagnosticQuestion[]> = {
  professional: [
    {
      id: 'professional-goal',
      prompt: 'Qual é seu principal objetivo com IA?',
      options: [
        { id: 'improve-current-work', label: 'Quero aprender IA para melhorar meu trabalho atual' },
        { id: 'provide-services', label: 'Quero prestar serviços de IA para empresas' },
        { id: 'lead-inside-company', label: 'Quero liderar projetos de IA dentro de uma empresa' },
        { id: 'exploring', label: 'Ainda estou entendendo onde posso atuar' },
      ],
    },
    {
      id: 'professional-level',
      prompt: 'Hoje, como você se considera em relação à IA?',
      options: [
        { id: 'starting', label: 'Estou começando' },
        { id: 'uses-tools', label: 'Já utilizo algumas ferramentas' },
        { id: 'builds-automations', label: 'Já crio automações e aplicações' },
        { id: 'works-with-tech', label: 'Já trabalho profissionalmente com tecnologia ou IA' },
      ],
    },
    {
      id: 'professional-direction',
      prompt: 'Você quer principalmente aprender ou construir carreira?',
      options: [
        { id: 'apply-in-work', label: 'Quero aprender para aplicar no meu negócio ou profissão' },
        { id: 'new-professional-skill', label: 'Quero transformar IA em uma nova habilidade profissional' },
        { id: 'position-as-specialist', label: 'Quero me posicionar como especialista' },
        { id: 'lead-transformation', label: 'Quero liderar transformação dentro de empresas' },
      ],
    },
  ],
  company: [
    {
      id: 'company-stage',
      prompt: 'Em qual estágio sua empresa está com IA?',
      options: [
        { id: 'not-started', label: 'Ainda não sabemos por onde começar' },
        { id: 'people-use-tools', label: 'Algumas pessoas já utilizam ferramentas de IA' },
        { id: 'has-initiatives', label: 'Já temos algumas automações ou iniciativas' },
        { id: 'wants-strategy', label: 'Queremos estruturar uma estratégia de IA' },
      ],
    },
    {
      id: 'company-challenge',
      prompt: 'Qual é o principal desafio?',
      options: [
        { id: 'find-impact', label: 'Descobrir onde IA realmente pode gerar resultado' },
        { id: 'train-team', label: 'Capacitar nossa equipe' },
        { id: 'build-solutions', label: 'Criar soluções e automações' },
        { id: 'transformation-strategy', label: 'Estruturar uma estratégia de transformação' },
        { id: 'internal-leaders', label: 'Criar pessoas internas capazes de liderar IA' },
      ],
    },
    {
      id: 'company-next-step',
      prompt: 'O que faria mais sentido agora?',
      options: [
        { id: 'strategic-diagnostic', label: 'Um diagnóstico estratégico' },
        { id: 'team-immersion', label: 'Uma imersão para nossa equipe' },
        { id: 'complete-transformation', label: 'Um projeto de transformação mais completo' },
        { id: 'internal-leader-training', label: 'Formação de líderes internos de IA' },
      ],
    },
  ],
};

export const diagnosticResults: Record<DiagnosticResultId, DiagnosticResult> = {
  'business-ai-specialist': {
    id: 'business-ai-specialist',
    title: 'Especialista em IA para Negócios',
    text: 'Seu momento indica que o caminho mais adequado é desenvolver capacidade prática para identificar oportunidades, estruturar soluções e aplicar inteligência artificial em negócios.',
    href: '/formacoes/especialista-ia-negocios',
  },
  'ai-consultant': {
    id: 'ai-consultant',
    title: 'Consultor de IA para Empresas',
    text: 'Seu objetivo pede uma formação que conecte prospecção, diagnóstico, proposta e entrega para transformar conhecimento em uma atuação profissional.',
    href: '/profissionais#consultor',
    steps: ['Definir posicionamento', 'Encontrar empresas', 'Diagnosticar oportunidades', 'Vender e entregar'],
  },
  'ai-transformation-day': {
    id: 'ai-transformation-day',
    title: 'AI Transformation Day',
    text: 'Antes de implementar, sua equipe precisa desenvolver repertório para reconhecer onde a inteligência artificial pode gerar impacto real.',
    href: '/empresas#transformation-day',
  },
  'ai-champions': {
    id: 'ai-champions',
    title: 'AI Champions',
    text: 'O próximo passo mais estratégico é desenvolver pessoas dentro da organização capazes de identificar oportunidades e liderar iniciativas de inteligência artificial.',
    href: '/empresas#ai-champions',
  },
};

type DiagnosticRule = {
  result: DiagnosticResultId;
  matches: (answers: DiagnosticAnswerMap) => boolean;
};

export const diagnosticRules: Record<DiagnosticProfile, DiagnosticRule[]> = {
  professional: [
    {
      result: 'ai-champions',
      matches: (answers) =>
        answers['professional-goal'] === 'lead-inside-company' ||
        answers['professional-direction'] === 'lead-transformation',
    },
    {
      result: 'ai-consultant',
      matches: (answers) =>
        answers['professional-goal'] === 'provide-services' ||
        answers['professional-direction'] === 'new-professional-skill',
    },
    {
      result: 'business-ai-specialist',
      matches: () => true,
    },
  ],
  company: [
    {
      result: 'ai-champions',
      matches: (answers) =>
        answers['company-challenge'] === 'internal-leaders' ||
        answers['company-next-step'] === 'internal-leader-training',
    },
    {
      result: 'ai-transformation-day',
      matches: (answers) =>
        answers['company-challenge'] === 'train-team' ||
        answers['company-next-step'] === 'team-immersion',
    },
    { result: 'ai-transformation-day', matches: () => true },
  ],
};

export function getDiagnosticResult(profile: DiagnosticProfile, answers: DiagnosticAnswerMap) {
  const matchedRule = diagnosticRules[profile].find((rule) => rule.matches(answers));
  return diagnosticResults[matchedRule?.result ?? 'ai-transformation-day'];
}
