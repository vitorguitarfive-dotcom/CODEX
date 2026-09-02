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
  | 'ai-consulting'
  | 'ai-transformation-day'
  | 'ai-champions';

export type DiagnosticResult = {
  id: DiagnosticResultId;
  title: string;
  text: string;
  ctaLabel: string;
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
      id: 'company-opportunity',
      prompt: 'Onde você enxerga maior oportunidade hoje?',
      options: [
        { id: 'sales', label: 'Comercial e vendas' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'service', label: 'Atendimento' },
        { id: 'operations', label: 'Operações e processos internos' },
        { id: 'management', label: 'Gestão e tomada de decisão' },
        { id: 'unknown', label: 'Ainda não sabemos' },
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
    ctaLabel: 'Conhecer Especialista em IA para Negócios',
    href: '/profissionais#especialista',
  },
  'ai-consulting': {
    id: 'ai-consulting',
    title: 'Consultoria de IA para Empresas',
    text: 'Há potencial para aplicação de IA na sua operação, mas o primeiro passo é identificar os processos certos antes de escolher ferramentas.',
    ctaLabel: 'Conhecer Consultoria de IA',
    href: '/contato#formulario',
    steps: ['Entender o processo', 'Identificar oportunidades', 'Desenhar a solução', 'Medir o resultado'],
  },
  'ai-transformation-day': {
    id: 'ai-transformation-day',
    title: 'AI Transformation Day',
    text: 'Antes de implementar, sua equipe precisa desenvolver repertório para reconhecer onde a inteligência artificial pode gerar impacto real.',
    ctaLabel: 'Conhecer AI Transformation Day',
    href: '/empresas#transformation-day',
  },
  'ai-champions': {
    id: 'ai-champions',
    title: 'AI Champions',
    text: 'O próximo passo mais estratégico é desenvolver pessoas dentro da organização capazes de identificar oportunidades e liderar iniciativas de inteligência artificial.',
    ctaLabel: 'Conhecer AI Champions',
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
    {
      result: 'ai-consulting',
      matches: () => true,
    },
  ],
};

export function getDiagnosticResult(profile: DiagnosticProfile, answers: DiagnosticAnswerMap) {
  const matchedRule = diagnosticRules[profile].find((rule) => rule.matches(answers));
  return diagnosticResults[matchedRule?.result ?? 'ai-consulting'];
}
