export type CourseStat = {
  label: string;
  value: string;
  description: string;
};

export type CourseAudience = {
  title: string;
  description: string;
};

export type LearningItem = {
  number: string;
  title: string;
  description: string;
};

export type LearningStage = {
  number: string;
  title: string;
  introduction?: string;
  items: LearningItem[];
};

export type MethodStep = {
  number: string;
  title: string;
  question: string;
};

export type ApplicationArea = {
  name: string;
  question?: string;
};

export type CourseDetail = {
  label: string;
  lines: string[];
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type CourseContent = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: CourseStat[];
  overview: {
    title: string;
    paragraphs: string[];
    before: string;
    after: string;
  };
  audience: CourseAudience[];
  audienceNote: {
    title: string;
    description: string;
  };
  learningStages: LearningStage[];
  method: {
    title: string;
    steps: MethodStep[];
  };
  deliverables: {
    title: string;
    subtitle: string;
    items: string[];
    highlight: string;
  };
  example: {
    title: string;
    disclaimer: string;
    steps: Array<{ label: string; text: string }>;
    conclusion: string;
  };
  applicationAreas: ApplicationArea[];
  capabilities: string[];
  boundaries: {
    title: string;
    paragraphs: string[];
    highlight: string;
  };
  details: CourseDetail[];
  faq: CourseFaq[];
  finalCta: {
    title: string;
    subtitle: string;
    summary: string;
  };
};

export const courses: Record<string, CourseContent> = {
  'especialista-ia-negocios': {
    slug: 'especialista-ia-negocios',
    metadata: {
      title: 'Formação Especialista em IA para Negócios',
      description:
        'Aprenda a encontrar onde a inteligência artificial pode gerar resultado em uma empresa e transforme essa oportunidade em um projeto real.',
    },
    eyebrow: 'Formação Denkor',
    title: 'Formação Especialista em IA para Negócios',
    subtitle:
      'Aprenda a encontrar onde a inteligência artificial pode gerar resultado em uma empresa e transforme essa oportunidade em um projeto real.',
    stats: [
      { label: '32 horas', value: '32 horas', description: 'Formação completa' },
      {
        label: 'Sem programação',
        value: 'Sem programação',
        description: 'Você não precisa saber desenvolver sistemas',
      },
      {
        label: 'Aplicação prática',
        value: 'Aplicação prática',
        description: 'Você constrói um projeto durante a formação',
      },
    ],
    overview: {
      title: 'Você não vai aprender apenas a usar ferramentas de IA.',
      paragraphs: [
        'Ferramentas como ChatGPT estão disponíveis para quase todo mundo.',
        'O desafio é saber onde usar IA dentro de uma empresa, qual problema resolver e como provar que a solução realmente vale a pena.',
        'Nesta formação, você aprende esse processo do começo ao fim.',
      ],
      before: 'Tenho várias ferramentas de IA, mas não sei exatamente onde aplicar.',
      after:
        'Consigo encontrar um problema, analisar o processo, pensar em uma solução com IA e explicar o resultado esperado.',
    },
    audience: [
      {
        title: 'Gestores e líderes',
        description: 'Querem entender onde IA pode melhorar sua área.',
      },
      {
        title: 'Vendas e marketing',
        description: 'Querem encontrar formas melhores de vender, atender e produzir.',
      },
      {
        title: 'Operações e administração',
        description: 'Querem reduzir tarefas repetitivas, retrabalho e desperdício de tempo.',
      },
      {
        title: 'Finanças e RH',
        description: 'Querem encontrar aplicações reais de IA dentro dos seus processos.',
      },
      {
        title: 'Profissionais que já usam IA',
        description:
          'Sabem usar ChatGPT e outras ferramentas, mas ainda não sabem transformar isso em um projeto empresarial.',
      },
    ],
    audienceNote: {
      title: 'Você não precisa saber programar.',
      description:
        'Você precisa conhecer minimamente como uma empresa ou área funciona e estar disposto a aprender a resolver problemas.',
    },
    learningStages: [
      {
        number: '01',
        title: 'Entender a IA',
        introduction:
          'Primeiro você entende o que a IA consegue fazer, o que ela não consegue fazer e quando vale a pena utilizá-la.',
        items: [
          {
            number: '01',
            title: 'Entender IA, automação e agentes',
            description: 'Você aprende a diferença entre essas tecnologias e quando usar cada uma.',
          },
          {
            number: '02',
            title: 'Criar instruções melhores para a IA',
            description: 'Você aprende a dar contexto, regras e objetivos para receber respostas melhores.',
          },
          {
            number: '03',
            title: 'Encontrar aplicações dentro da empresa',
            description:
              'Você começa a enxergar onde IA pode ajudar em vendas, marketing, atendimento, operações, RH, finanças e outras áreas.',
          },
        ],
      },
      {
        number: '02',
        title: 'Encontrar a oportunidade',
        items: [
          {
            number: '04',
            title: 'Entender como o trabalho acontece hoje',
            description: 'Você escolhe um processo e identifica etapas lentas, repetitivas ou problemáticas.',
          },
          {
            number: '05',
            title: 'Escolher onde vale a pena usar IA',
            description: 'Nem todo problema precisa de IA. Você aprende a escolher as melhores oportunidades.',
          },
          {
            number: '06',
            title: 'Redesenhar o processo',
            description:
              'Você define o que fica com as pessoas, o que a IA pode ajudar e o que pode ser automatizado.',
          },
        ],
      },
      {
        number: '03',
        title: 'Transformar em projeto',
        items: [
          {
            number: '07',
            title: 'Desenhar uma solução',
            description: 'Você estrutura como a solução deve funcionar e cria uma primeira demonstração.',
          },
          {
            number: '08',
            title: 'Entender se o projeto vale a pena',
            description: 'Você compara tempo, custo, benefícios, riscos e resultado esperado.',
          },
          {
            number: '09',
            title: 'Apresentar o projeto',
            description: 'Você aprende a explicar sua ideia para gestores e pessoas que tomam decisões.',
          },
        ],
      },
    ],
    method: {
      title: 'IA só gera valor quando existe método.',
      steps: [
        { number: '01', title: 'Entender o processo', question: 'Como o trabalho funciona hoje?' },
        {
          number: '02',
          title: 'Encontrar a oportunidade',
          question: 'Onde existe um problema que IA pode ajudar a resolver?',
        },
        {
          number: '03',
          title: 'Desenhar a solução',
          question: 'Como pessoas, processos e IA vão trabalhar juntos?',
        },
        {
          number: '04',
          title: 'Medir o resultado',
          question: 'Como saber se a mudança realmente valeu a pena?',
        },
      ],
    },
    deliverables: {
      title: 'Você termina a formação com algo construído.',
      subtitle: 'Durante o curso, cada etapa vira uma parte do seu projeto.',
      items: [
        'Mapa de um processo real',
        'Lista de oportunidades para aplicar IA',
        'Matriz para escolher quais projetos priorizar',
        'Biblioteca de prompts reutilizáveis',
        'Processo redesenhado com IA',
        'Estrutura de uma solução',
        'Prova de conceito guiada',
        'Business case com impacto estimado',
        'Apresentação executiva',
        'Plano inicial de próximos passos',
      ],
      highlight:
        'Você termina com um projeto estruturado que pode apresentar dentro do seu contexto profissional.',
    },
    example: {
      title: 'Na prática, pense assim:',
      disclaimer: 'Este é um exemplo ilustrativo da lógica da formação. Não é um case real da Denkor.',
      steps: [
        { label: 'Problema', text: 'Minha equipe perde muito tempo respondendo sempre as mesmas perguntas.' },
        {
          label: 'Processo',
          text: 'Entender como essas perguntas chegam e como são respondidas hoje.',
        },
        {
          label: 'Oportunidade',
          text: 'Verificar se IA pode ajudar a responder ou organizar parte dessas solicitações.',
        },
        {
          label: 'Solução',
          text: 'Desenhar um fluxo no qual a IA ajuda, mas uma pessoa continua responsável quando necessário.',
        },
        {
          label: 'Resultado',
          text: 'Definir como medir economia de tempo, qualidade e eficiência.',
        },
      ],
      conclusion: 'É esse tipo de raciocínio que você aprende a aplicar em diferentes áreas de uma empresa.',
    },
    applicationAreas: [
      { name: 'Vendas', question: 'Onde a equipe está perdendo tempo?' },
      { name: 'Marketing', question: 'Que trabalho poderia ser organizado com mais clareza?' },
      { name: 'Atendimento', question: 'O que poderia ser respondido ou organizado mais rápido?' },
      { name: 'Operações', question: 'Que tarefas são repetidas todos os dias?' },
      { name: 'Administração', question: 'Que processo poderia ser mais simples?' },
      { name: 'Recursos Humanos', question: 'Que processos poderiam ser mais simples?' },
      { name: 'Finanças', question: 'Onde existem tarefas manuais e repetitivas?' },
      { name: 'Gestão', question: 'Que decisão precisa de informações mais claras?' },
      { name: 'Projetos', question: 'Onde o trabalho perde tempo ou informação?' },
      { name: 'Inovação', question: 'Qual problema vale a pena testar primeiro?' },
    ],
    capabilities: [
      'Encontrar problemas que podem ser reduzidos com IA',
      'Analisar processos',
      'Encontrar oportunidades',
      'Decidir quando IA faz sentido',
      'Estruturar prompts melhores',
      'Desenhar um projeto inicial',
      'Estimar impacto e benefícios',
      'Apresentar uma proposta para gestores',
      'Participar de projetos de transformação dentro de empresas',
    ],
    boundaries: {
      title: 'Para deixar claro.',
      paragraphs: [
        'Essa formação não foi criada para transformar você em programador.',
        'Você também não sairá construindo sozinho sistemas complexos de IA prontos para grandes empresas.',
        'O objetivo é outro:',
      ],
      highlight:
        'Fazer você aprender a identificar, estruturar, testar e defender aplicações reais de inteligência artificial dentro de negócios.',
    },
    details: [
      { label: 'Carga horária', lines: ['32 horas'] },
      { label: 'Formato', lines: ['4 encontros de 8 horas', 'ou', '8 encontros de 4 horas'] },
      { label: 'Metodologia', lines: ['Conteúdo aplicado + exercícios + projeto final'] },
      { label: 'Conhecimento técnico', lines: ['Não precisa saber programar'] },
      { label: 'Projeto', lines: ['Você desenvolve uma aplicação durante a formação'] },
    ],
    faq: [
      { question: 'Preciso saber programar?', answer: 'Não.' },
      {
        question: 'Preciso já entender de inteligência artificial?',
        answer:
          'Não é necessário ser especialista. A formação ensina os fundamentos necessários para aplicar IA em contexto de negócios.',
      },
      {
        question: 'É um curso só sobre ChatGPT?',
        answer:
          'Não. O objetivo é ensinar a analisar problemas e processos e entender como diferentes formas de IA podem ser aplicadas.',
      },
      {
        question: 'Vou desenvolver algo durante o curso?',
        answer: 'Sim. Ao longo da formação você estrutura um projeto aplicado.',
      },
      {
        question: 'Em quais áreas posso usar esse conhecimento?',
        answer:
          'Vendas, marketing, atendimento, operações, administração, RH, finanças, gestão, projetos e inovação.',
      },
      { question: 'Quanto tempo dura?', answer: '32 horas.' },
    ],
    finalCta: {
      title: 'Pare de apenas usar IA. Aprenda a transformá-la em aplicação real.',
      subtitle:
        'Entenda problemas, encontre oportunidades, desenhe soluções e aprenda a demonstrar o impacto de um projeto de inteligência artificial.',
      summary: 'Formação Especialista em IA para Negócios · 32 horas · aplicação prática · sem necessidade de programação',
    },
  },
};

export const courseSlugs = Object.keys(courses);
