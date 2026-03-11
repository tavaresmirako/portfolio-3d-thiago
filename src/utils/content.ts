import type {
  Certificate,
  Metric,
  NavItem,
  Project,
  Skill,
  StackItem,
} from "../types/content";

export const navItems: NavItem[] = [
  { id: "hero", label: "Início", icon: "home" },
  { id: "about", label: "Sobre", icon: "user" },
  { id: "projects", label: "Projetos", icon: "projects" },
  { id: "stacks", label: "Stacks", icon: "stacks" },
  { id: "certificates", label: "Certificados", icon: "certificates" },
  { id: "contact", label: "Contato", icon: "contact" },
];

export const heroMetrics: Metric[] = [
  {
    label: "Atividade no GitHub",
    value: "+35 repositórios",
    caption: "Entre projetos pessoais e estudos contínuos",
  },
  {
    label: "Base",
    value: "Rio de Janeiro",
    caption: "Disponível para remoto e presencial",
  },
  {
    label: "Idioma",
    value: "Inglês",
    caption:
      "Boa leitura e compreensão auditiva, em desenvolvimento escrita e conversação.",
  },
  {
    label: "Disponibilidade",
    value: "Imediata",
    caption: "Disponível para vagas Front-End, Back-End e Full Stack.",
  },
];

export const heroStack: StackItem[] = [
     {
    name: "Python",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
    {
    name: "php",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
    {
    name: "Laravel",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

export const aboutParagraphs = [
  "Sou desenvolvedor Full Stack do Rio de Janeiro, especializado em React, TypeScript, Tailwind CSS, Node.js e banco de dados. N8N/Automações integradas com IA,  Agentes de Inteligência  Artifiicial integrados ao Lightrag ,interfaces funcionais, fluidas e com microinterações que elevam a experiência do usuário, sempre com atenção à performance e à clareza do código.",

  "Atuo com uma abordagem centrada em produto e experiência: entendo a importância de entregar valor real para o usuário final e de manter um código bem estruturado para facilitar a escalabilidade. Em todos os meus projetos, busco aplicar boas práticas como componentização, tipagem estática, arquitetura limpa e integração contínua.",

  "Me formei em Desenvolvimento Web Full Stack pela Trybe e aprofundei meus conhecimentos com bootcamps e imersões como o DevQuest. Essa formação me permitiu transitar com segurança entre front-end, back-end e lógica de produto. Também tenho background em Marketing, o que reforça minha visão voltada à comunicação clara e ao entendimento de negócio.",

  "Durante a formação e em projetos autorais, participei ativamente de squads ágeis (Scrum/Kanban), utilizando ferramentas como Jira, Notion e GitHub Projects para planejamento, acompanhamento de tarefas e colaboração contínua.",

  "Entre os projetos desenvolvidos, destaco:\n- tavaresWallet – uma carteira digital com autenticação segura, integração com APIs e foco em responsividade mobile-first.\n- tavaresStore – um e-commerce funcional com listagem de produtos integrados à FakeStore API, filtros por categoria, página de detalhes do produto, checkout completo e finalização de compra. Desenvolvido com Context API, Tailwind CSS e UI moderna usando Shadcn.",

  "Este portfólio foi inteiramente desenvolvido com o auxílio da IA Codex, desde a estrutura inicial até ajustes de layout e refatoração de código. Utilizei a IA de forma estratégica para acelerar decisões técnicas e garantir consistência visual, o que reflete minha disposição em adotar ferramentas modernas no meu fluxo de trabalho.",

  "Atualmente, estou aprofundando meus conhecimentos em React avançado e estudando Inteligência Artificial aplicada ao desenvolvimento web, com foco em acompanhar as tendências do mercado e incorporar soluções modernas aos meus projetos.",
];

export const softSkillHighlights: string[] = [
  "Abertura a feedbacks",
  "Adaptabilidade",
  "Curiosidade técnica",
  "Organização pessoal",
  "Comunicação assíncrona",
  "Proatividade",
  "Pensamento crítico",
];

export const projects: Project[] = [
  {
    slug: "mr-delivery-app",
    title: "MR-DELIVERY-APP",
    description:
      "MR Delivery – Powered by Nexzo IA. O MR Delivery é uma solução de ecossistema completo para o setor de alimentação, desenvolvida pela Nexzo. O projeto integra tecnologias de ponta para oferecer uma experiência fluida ao consumidor final e um controle analítico profundo para o gestor, tudo centralizado em infraestrutura própria de alto desempenho.",
    technologies: [
      "Mobile App",
      "Flutter",
      "Dart",
      "Backend / API",
      "Node.js",
      "TypeScript",
      "Frontend Web",
      "React.js",
      "Three.js",
      "Banco de Dados",
      "Relacional (PostgreSQL)",
      "Infraestrutura",
      "VPS Linux",
      "Nginx",
      "Docker",
      "Pagamentos",
      "API Gateway",
    ],
    repoUrl: "https://github.com/tavaresmirako/mrpizza-app",
    imageUrl: "/images/project/mrdelivery-capa.png",
    gallery: [
      "/images/project/mrdelivery-demo1.png",
      "/images/project/mrdelivery-demo2.png",
      "/images/project/mrdelivery-print-1.png",
      "/images/project/mrdelivery-print-2.png",
      "/images/project/mrdelivery-print-3.png",
      "/images/project/mrdelivery-print-4.png",
    ],
    accent: "from-orange-600/70 via-red-500/50 to-transparent",
    role: "Full Stack Ecosystem",
    category: "Profissionais",
    status: "Produção",
    learned: [
      "Arquitetura de microserviços para sistemas de larga escala.",
      "Integração de 3D (Three.js) em interfaces web de alta performance.",
      "Desenvolvimento cross-platform com Flutter e API modular.",
    ],
    repoHighlights: [
      "Gateway de pagamentos com QR Code Dinâmico.",
      "Sincronização em tempo real entre App e Painel Gestor.",
      "Infraestrutura escalável com Docker e Nginx Reverse Proxy.",
    ],
    desafios: [
      "Sincronizar estados complexos entre múltiplas plataformas (Mobile/Web).",
      "Garantir a segurança e idempotência no fluxo de pagamentos.",
      "Otimizar renders 3D para dispositivos mobile.",
    ],
    nextSteps: [
      "Implementação de IA preditiva para sugestão de cardápio.",
      "Expansão para totens de autoatendimento físico.",
      "Integração com principais sistemas de logística de entrega.",
    ],
    imageFit: "contain",
  },
  {
    slug: "openclaw-gateway",
    title: "OpenClaw Gateway Dashboard",
    description:
      "O OpenClaw Gateway Dashboard é uma solução de infraestrutura projetada para fornecer acesso remoto seguro a servidores VPS diretamente através do navegador. O sistema utiliza uma arquitetura de túnel para expor serviços locais de forma protegida, eliminando a necessidade de abertura de portas vulneráveis no firewall.",
    technologies: [
      "React",
      "Node.js",
      "Cloudflare Tunnel",
      "VPS",
      "Security",
      "Infrastructure",
    ],
    repoUrl: "https://github.com/tavaresmirako/openclaw-gateway",
    liveUrl: "https://openclaw.nexzoautomacoes.online/control/",
    imageUrl: "/images/project/openclaw-capa.png",
    accent: "from-red-500/70 via-rose-400/50 to-transparent",
    role: "Infrastructure & Security",
    category: "Pessoais",
    status: "Produção",
    learned: [
      "Configuração de túneis seguros para exposição de serviços locais.",
      "Desenvolvimento de dashboards de monitoramento de infraestrutura em tempo real.",
      "Implementação de arquitetura de acesso remoto seguro sem abertura de portas.",
    ],
    repoHighlights: [
      "Arquitetura de túnel integrada para segurança de rede.",
      "Painel de controle centralizado para múltiplas instâncias VPS.",
      "Interface de chat para intervenções rápidas no gateway.",
    ],
    desafios: [
      "Gerenciar a latência e a estabilidade dos túneis em diferentes ambientes.",
      "Garantir a criptografia end-to-end em todas as sessões remotas.",
      "Integrar múltiplos serviços de rede em um dashboard unificado.",
    ],
    nextSteps: [
      "Adicionar suporte a autenticação multifator (MFA).",
      "Implementar logs de auditoria detalhados para todas as conexões.",
      "Expandir para suporte a túneis baseados em protocolos adicionais.",
    ],
    gallery: ["/images/project/openclaw-detalhes.png"],
    imageFit: 'contain',
  },
      {
    slug: "nexzo-ia-platform",
    title: "Nexzo IA – A Arquitetura da Inteligência e Automação",
    description:
      "A Nexzo IA é um ecossistema de inovação focado na convergência estratégica entre Inteligência Artificial, Automação Avançada e Desenvolvimento de Software (SaaS/Apps). O projeto se posiciona no mercado não apenas como uma prestadora de serviços de TI, mas como uma arquiteta de soluções cognitivas e fluxos automatizados que transformam processos operacionais complexos em motores de crescimento altamente escaláveis e eficientes.",
    technologies: [
      "DeepSeek",
      "PHP",
      "MySQL",
      "JS",
      "HTML",
      "CSS",
    ],
     repoUrl: "https://nexzo.websys.tec.br/", // Link para "Ver Projeto"
    imageUrl: "/images/project/principalnexzoia.png", // Imagem placeholder
    accent: "from-blue-500/70 via-indigo-400/50 to-transparent",
    role: "Product Architect · Em evolução",
    category: "Pessoais",
    status: "Roadmap ativo · Em evolução",
    learned: [
      "Design de arquitetura de microsserviços para isolamento e escalabilidade de agentes.",
      "Implementação de um 'Memory Bank' distribuído para persistência de contexto e conversação.",
      "Estratégias de roteamento e orquestração de requisições entre múltiplos LLMs e modelos de IA.",
    ],
    repoHighlights: [
      "Módulo de Orquestração de Agentes (MOA ) com roteamento inteligente de requisições.",
      "Sistema de 'Self-Correction' para recuperação automática de falhas dos agentes.",
      "Implementação de APIs gRPC para comunicação de alta performance entre serviços internos.",
    ],
    desafios: [
      "Otimizar o custo operacional e o consumo de tokens dos LLMs em cenários de alta concorrência.",
      "Garantir a segurança e a conformidade (LGPD) no processamento de dados sensíveis pelos agentes.",
      "Desenvolver um sistema de monitoramento (Observability) unificado para performance e custo.",
    ],
    nextSteps: [
      "Desenvolvimento de um SDK para integração simplificada da plataforma em aplicações de terceiros.",
      "Adicionar suporte a novos modelos de linguagem (e.g., Claude) para redundância e otimização de custos.",
      "Criação de um painel de administração (Admin Dashboard) para gestão de agentes e usuários.",
    ],
    gallery: [
              "/images/project/metodologia.png",
              "/images/project/arquiteto.png",
              "/images/project/capa.png",
              "/images/project/auto.png",
              "/images/project/formulario.png",
              
        ],
  },
      {
    slug: "vendia-full-2025",
    title: "VendIA - ERP com IA Integrada",
    description:
      "Sistema de gestão empresarial (ERP/CRM) completo, focado em otimizar o ciclo de vendas com o auxílio de Inteligência Artificial. Possui módulos de vendas, clientes, produtos, finanças e um Agente de IA conversacional para suporte e análise.",
    technologies: [
      "JavaScript",
      "Vite",
      "Firebase (Auth/DB)",
      "HTML5/CSS3",
      "IA Conversacional",
      "Dashboards/Analytics",
    ],
    repoUrl: "https://vendia.websys.tec.br/", // Usado para satisfazer o tipo Project
    liveUrl: "https://vendia.websys.tec.br/", // Link para "Ver Projeto"
    imageUrl: "/images/project/dacheboad.png", // Imagem placeholder
    accent: "from-blue-600/70 via-cyan-500/50 to-transparent",
    role: "Full Stack Developer · Concluído",
    category: "Profissionais", // CORRIGIDO: Agora está no plural
    status: "Versão 1.0",
    learned: [
      "Arquitetura de sistema modular (separação em 'sections' ) para um ERP complexo.",
      "Integração de serviços de IA (Chatbot) em um sistema de gestão tradicional.",
      "Implementação de autenticação e persistência de dados via Firebase.",
    ],
    repoHighlights: [
      "Módulo 'Agente de IA' para consultas e suporte via linguagem natural.",
      "Estrutura de rotas e navegação baseada em arquivos HTML parciais.",
      "Dashboards de Analytics para visualização de métricas de vendas.",
    ],
    desafios: [
      "Garantir a segurança dos dados de clientes e fornecedores com as regras do Firebase.",
      "Desenvolver um design responsivo e intuitivo para um sistema com muitas funcionalidades.",
      "Otimizar o carregamento de dados e a performance dos módulos de listagem (produtos/clientes).",
    ],
    nextSteps: [
      "Migrar a lógica de front-end para um framework moderno (React/Vue) para melhor manutenção.",
      "Implementar testes de integração para os módulos críticos (Vendas e Pagamentos).",
      "Adicionar um módulo de notificação em tempo real para orçamentos e pedidos.",
    ],
    gallery: [
        
        "/images/project/dacheboad.png",
       "/images/project/cadastro2.png",
      "/images/project/login.png",
     "/images/project/cadastro.png",
        
      
    ],
  },

  {
    slug: "tavares-store",
    title: "tavaresStore",
    description:
      "Loja virtual criada com foco em arquitetura front-end moderna: utiliza design system autoral, filtros dinâmicos por categoria, contexto global e checkout validado com formulários tipados. O projeto reforça boas práticas em organização de código e evolução incremental.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Context API",
      "Zod",
      "React Hook Form",
    ],
    repoUrl: "https://github.com/tavaresmirako/tavares-store",
    imageUrl: "/images/project/homepage.png",
    accent: "from-emerald-500/70 via-cyan-400/50 to-transparent",
    role: "Product Builder · Em evolução",
    category: "Pessoais",
    status: "Roadmap ativo · Em evolução",
    learned: [
      "Design system com tokens tipados e componentes reutilizáveis",
      "Filtros dinâmicos conectados ao Context API",
      "Checkout com validações Zod + React Hook Form",
    ],
    repoHighlights: [
      "Arquitetura por camadas (design-system, hooks e features)",
      "Testes de tipagem para DTOs e carrinho",
    ],
    desafios: [
      "Estratégia para sincronizar filtros, paginação e carrinho sem colisões",
      "Construção de tokens de design versionados",
    ],
    nextSteps: [
      "Integração com gateway de pagamento real",
      "Implementar busca full-text e wish list",
    ],
    gallery: [
      "/images/project/homepage.png",
      "/images/project/product-detail.png",
      "/images/project/cart.png",
      "/images/project/checkout.png",
    ],
  },
  {
    slug: "tavares-wallet",
    title: "tavaresWallet",
    description:
      "Dashboard financeiro com autenticação, conversor de moedas em tempo real e governança de estado centralizada via Zustand para garantir previsibilidade.",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Zod",
      "Shadcn/UI",
    ],
    repoUrl: "https://github.com/tavaresmirako/tavares-wallet",
    imageUrl: "/images/project/chapswallet-dashboard.gif",
    accent: "from-primary/80 via-primary/40 to-transparent",
    role: "Full Stack & UX",
    category: "Pessoais",
    status: "MVP publicado",
    learned: [
      "Estado global e sessão controlados com Zustand",
      "Formulários tipados com React Hook Form + Zod",
      "Design tokens unificados entre Tailwind e Shadcn/UI",
    ],
    repoHighlights: [
      "Feature flags para recursos experimentais",
      "Hooks de acessibilidade para navegação por teclado",
    ],
    desafios: [
      "Persistência do estado da carteira usando zustand/persist sem duplicar pedidos de câmbio",
      "Sincronização do formulário de despesas com a tabela e o total convertido em BRL",
      "Fluxo de autenticação e rotas protegidas com feedback em tempo real",
    ],
    nextSteps: [
      "Adicionar gráficos e dashboards de insights por categoria",
      "Exportar despesas em CSV e integração com planilhas",
      "Suporte multilíngue e múltiplas moedas base",
    ],
    gallery: ["/images/project/chapswallet-dashboard.gif"],
  },
  {
    slug: "todo-app",
    title: "TodoApp",
    description:
      "Aplicativo de tarefas com tema dinâmico, filtros avançados e suíte de testes em RTL para validar acessibilidade e fluxo completo.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "RTL"],
    repoUrl: "https://github.com/tavaresmirako/todoList-app",
    liveUrl: "https://todoappchapetta.netlify.app/",
    imageUrl: "/images/project/todoapp-web.gif",
    accent: "from-accent/70 via-accent/40 to-transparent",
    role: "Full Stack Lead",
    category: "Desafios",
    status: "Versão estável",
    learned: [
      "Context API + hooks customizados para sincronizar estados",
      "Testes com React Testing Library assegurando filtros e acessibilidade",
      "Feedback visual com animações suaves em Tailwind",
    ],
    repoHighlights: [
      "Hook useTodo centralizando todas as operações CRUD",
      "Tema global controlado via Context API com tokens CSS",
      "Testes unitários e de interação com React Testing Library",
    ],
    desafios: [
      "Persistir tarefas no localStorage mantendo filtros ativos e consistentes",
      "Cobrir componentes críticos (form, lista e header) com testes automatizados",
      "Manter o tema dark/light sincronizado com o estado global e CSS custom properties",
    ],
    nextSteps: [
      "Sincronizar tarefas com uma API externa e autenticação por usuário",
      "Adicionar drag and drop para reordenar tarefas",
      "Gerar relatórios semanais e lembretes automáticos",
    ],
    gallery: [
      "/images/project/todoapp-web.gif",
      "/images/project/todoapp-mobile.gif",
    ],
  },
  {
    slug: "code-beats",
    title: "Code Beats",
    description:
      "Experiência musical que integra múltiplas APIs para buscar artistas, listar álbuns e reproduzir prévias, consolidando arquitetura client-side modular com React Router.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "API Integration",
    ],
    repoUrl: "https://github.com/tavaresmirako/code-beats",
    imageUrl: "/images/project/codebeats-preview.svg",
    accent: "from-sky-500/70 via-purple-500/50 to-transparent",
    role: "Product Builder",
    category: "Pessoais",
    status: "Concluído",
    learned: [
      "React Router para rotas aninhadas e data loaders",
      "Hooks customizados controlando cache e erros",
      "Design system autoral com animações responsivas",
    ],
    repoHighlights: [
      "MusicContext gerenciando player, favoritos e loading",
      "Serviços desacoplados para buscas, perfis e playlists",
      "Testes de interação com React Testing Library nos fluxos críticos",
    ],
    desafios: [
      "Sincronizar player, favoritos e visualização de álbuns usando Context API",
      "Cachear resultados de busca para reduzir requisições",
      "Garantir responsividade e animações suaves entre rotas",
    ],
    nextSteps: [
      "Aplicar o design system em Tailwind com tokens definitivos",
      "Integrar com a API oficial do Spotify para prévias completas",
      "Adicionar modo offline com IndexedDB e sincronização posterior",
    ],
    gallery: ["/images/project/codebeats-preview.svg"],
  },
  {
    slug: "movieflix-api",
    title: "MovieFlix API",
    description:
      "API REST para catálogo de filmes com modelagem relacional, documentação viva em Swagger e middlewares de autenticação escritos em TypeScript.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Swagger",
      "TypeScript",
    ],
    repoUrl: "https://github.com/tavaresmirako/movieflix-api",
    imageUrl: "/images/project/movieflix-diagram.svg",
    accent: "from-stone-500/60 via-slate-700/40 to-transparent",
    role: "Back-End",
    category: "Profissionais",
    status: "API privada",
    learned: [
      "Modelagem relacional com Prisma + PostgreSQL",
      "Documentação interativa com Swagger e exemplos",
      "Middlewares de autenticação e validações em TypeScript",
    ],
    repoHighlights: [
      "Scripts de seed e reset do banco",
      "Testes de integração com Supertest",
    ],
    desafios: [
      "Orquestrar camadas de serviço e repositório com Prisma mantendo tipagem forte",
      "Garantir idempotência e validação dos endpoints com middlewares dedicados",
      "Manter documentação Swagger alinhada com as mudanças de schema",
    ],
    nextSteps: [
      "Adicionar autenticação JWT com perfis de acesso (admin e leitor)",
      "Implementar paginação, ordenação e filtros combinados",
      "Publicar deploy containerizado e pipelines de observabilidade",
    ],
    gallery: ["/images/project/movieflix-diagram.svg"],
  },
  {
    slug: "dashboard-atendimento-monitoramento",
    title: "Dashboard de Atendimento / Monitoramento",
    description:
      "Plataforma de automação Nexzo de alta performance, focada em maximizar conversões com IA avançada. Integra dashboards de vendas, gestão de leads, finanças e um robô atendente inteligente para suporte e análise de dados em tempo real!!",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Zod",
      "TanStack",
    ],
    repoUrl: "https://github.com/tavaresmirako/dashboard-dados-atendimento-agendamento",
    liveUrl: "https://dashboard.nexzoautomacoes.online/",
    imageUrl: "/images/project/dashboard-atendimento.png",
    accent: "from-green-500/70 via-emerald-400/50 to-transparent",
    role: "Full Stack Developer",
    category: "Profissionais",
    status: "Produção",
    learned: [
      "Integração de dashboards de alta performance com dados em tempo real.",
      "Implementação de fluxos de automação com IA para atendimento.",
      "Gestão eficiente de leads e métricas de conversão.",
    ],
    repoHighlights: [
      "Dashboard de vendas e finanças integrado.",
      "Robô atendente inteligente para suporte automatizado.",
      "Análise de dados em tempo real com TanStack Query.",
    ],
    desafios: [
      "Sincronização de dados complexos entre múltiplos módulos (vendas, leads, finanças).",
      "Garantir alta performance em dashboards com grande volume de dados.",
      "Integração fluida do robô de IA com a interface de monitoramento.",
    ],
    nextSteps: [
      "Expansão das capacidades de análise preditiva com novos modelos de IA.",
      "Implementação de relatórios customizados exportáveis.",
      "Integração com mais canais de atendimento externos.",
    ],
    gallery: ["/images/project/dashboard-atendimento.png"],
  },
  {
    slug: "petservices",
    title: "PetServices",
    description:
      "O PetServices é uma plataforma digital completa projetada para revolucionar a forma como donos de animais de estimação encontram e contratam serviços especializados. O ecossistema oferece uma experiência personalizada para dois perfis distintos: donos de pets e prestadores de serviço.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    repoUrl: "https://github.com/tavaresmirako/petservice",
    liveUrl: "https://petservices.websys.tec.br/",
    imageUrl: "/images/project/petservices.png",
    accent: "from-blue-400/70 via-orange-400/50 to-transparent",
    role: "Full Stack Developer",
    category: "Pessoais",
    status: "Produção",
    learned: [
      "Desenvolvimento de ecossistemas multi-perfil (B2C e B2B).",
      "Implementação de interfaces modernas e responsivas com shadcn/ui.",
      "Gestão de fluxos de contratação de serviços especializados.",
    ],
    repoHighlights: [
      "Arquitetura modular para diferentes perfis de usuário.",
      "Design system consistente focado na experiência do usuário pet-friendly.",
      "Integração fluida entre busca de serviços e prestadores.",
    ],
    desafios: [
      "Criar uma jornada de usuário intuitiva para perfis com necessidades distintas.",
      "Garantir a consistência visual em uma plataforma com múltiplos fluxos.",
      "Otimizar a performance da listagem e filtragem de serviços.",
    ],
    nextSteps: [
      "Implementação de sistema de agendamento e pagamentos integrados.",
      "Adicionar sistema de avaliações e recomendações baseadas em IA.",
      "Desenvolvimento de aplicativo mobile nativo.",
    ],
    gallery: ["/images/project/petservices.png"],
  },
  {
    slug: "n8n-agente-atendimento",
    title: "Agente Inteligente de Atendimento e Gestão de Reuniões (n8n)",
    description:
      "Este projeto consiste em um ecossistema de automação avançado desenvolvido no n8n, projetado para atuar como um agente de atendimento autônomo e um centro de monitoramento de reuniões em tempo real. A solução integra inteligência conversacional com gestão de dados para otimizar o ciclo de agendamento e suporte.",
    technologies: [
      "n8n",
      "API Key",
      "Whisper",
      "Zep Memory",
      "Google Calendar",
      "Google Sheets",
    ],
    repoUrl: "https://github.com/tavaresmirako/n8n-agente-atendimento-monitoramento",
    liveUrl: "https://nexzoautomacoes.online/",
    imageUrl: "/images/project/n8n-agente.png",
    accent: "from-red-500/70 via-orange-400/50 to-transparent",
    role: "Automation Engineer",
    category: "Pessoais",
    status: "Produção",
    learned: [
      "Orquestração de fluxos complexos no n8n com múltiplos nós e condicionais.",
      "Integração de IA (Whisper) para processamento de voz e transcrição.",
      "Gestão de memória persistente para agentes conversacionais usando Zep.",
    ],
    repoHighlights: [
      "Fluxo de atendimento autônomo com roteamento inteligente.",
      "Sincronização em tempo real com Google Calendar e Sheets.",
      "Sistema de monitoramento de execuções e logs detalhados.",
    ],
    desafios: [
      "Manter o contexto da conversa em fluxos assíncronos de longa duração.",
      "Garantir a precisão da transcrição e processamento de áudio em tempo real.",
      "Otimizar a latência entre a entrada do usuário e a ação do agente.",
    ],
    nextSteps: [
      "Integração com novos modelos de LLM para respostas mais refinadas.",
      "Desenvolvimento de um dashboard de métricas de atendimento no n8n.",
      "Expansão para múltiplos canais de comunicação (WhatsApp, Telegram).",
    ],
    gallery: ["/images/project/n8n-agente.png"],
  },
  {
    slug: "sabor-tavares",
    title: "SABOR TAVARES",
    description:
      "Depósito Digital Premium. O site Mansão Maromba (hospedado no subdomínio sabortavares) é uma plataforma de e-commerce focada no setor de bebidas e conveniência premium, operando como um \"depósito digital\" de alta performance em São Paulo. O projeto se destaca por uma identidade visual moderna e agressiva, voltada para o público jovem e entusiasta da vida noturna.",
    technologies: [
      "Vite",
      "Tailwind",
      "React",
      "TypeScript",
      "Open Graph",
    ],
    repoUrl: "https://github.com/tavaresmirako/mansao-maromba-tavares",
    liveUrl: "https://sabortavares.nexzoautomacoes.online/",
    imageUrl: "/images/project/sabortavares-main.png",
    accent: "from-red-600/70 via-orange-500/50 to-transparent",
    role: "Full Stack Developer",
    category: "Profissionais",
    status: "Produção",
    learned: [
      "Desenvolvimento de e-commerce de alta performance com Vite e React.",
      "Implementação de design responsivo e 'agressivo' com Tailwind CSS.",
      "Otimização de SEO e compartilhamento social com Open Graph.",
    ],
    repoHighlights: [
      "Catálogo dinâmico de produtos com busca e filtros.",
      "Fluxo de carrinho e checkout otimizado.",
      "Performance superior com build otimizada do Vite.",
    ],
    desafios: [
      "Criar uma identidade visual que equilibre o prático com o premium.",
      "Garantir tempos de carregamento instantâneos para conversão de vendas.",
      "Sincronização de estoque e pedidos (em evolução).",
    ],
    nextSteps: [
      "Integração com API de pagamentos por PIX automatizado.",
      "Sistema de fidelidade e cupons de desconto.",
      "Dashboard de BI para gestão de vendas.",
    ],
    gallery: [
      "/images/project/sabortavares-1.png",
      "/images/project/sabortavares-2.png",
      "/images/project/sabortavares-3.png",
    ],
  },
];

export const skills: Skill[] = [
     {
    name: "Python",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Shadcn",
    category: "Frontend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/radixui.svg",
  },
  {
    name: "Vitest",
    category: "Frontend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vitest.svg",
  },
  {
    name: "React Testing Library",
    category: "Frontend",
    iconUrl: "https://testing-library.com/img/octopus-128x128.png",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Sequelize",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  {
    name: "Laravel",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Postgresql",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "API RESTful",
    category: "Backend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg",
  },
  {
    name: "Integração de APIs",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/graphql.svg",
  },
  {
    name: "RESTful APIs",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swagger.svg",
  },
  {
    name: "Testes de Integração (RTL)",
    category: "Conceitos",
    iconUrl: "https://testing-library.com/img/octopus-128x128.png",
  },
  {
    name: "Programação Orientada a Objetos",
    category: "Conceitos",
    iconSymbol: "λ",
  },
  {
    name: "Estruturas de Dados",
    category: "Conceitos",
    iconSymbol: "Σ",
  },
  {
    name: "Engenharia de Software",
    category: "Conceitos",
    iconSymbol: "⚙",
  },
  {
    name: "Scrum",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/scrumalliance.svg",
  },
  {
    name: "Kanban",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trello.svg",
  },
  {
    name: "Metodologias Ágeis",
    category: "Conceitos",
    iconSymbol: "↻",
  },
  {
    name: "Inteligência Artificial",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
  },
  {
    name: "Versionamento de Código",
    category: "Conceitos",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const whatsappLink =
  "https://wa.me/5521992115015?text=Ol%C3%A1%20THIAGO%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!";

export const focusCurrent: string[] = [
  "React",
  "Tailwind",
  "TypeScript",
  "Node.js",
  "Banco de dados",
];

export const focusExploration: string[] = [
  "Next.js",
  "Inteligência Artificial",
  "Python",
  "Automação",
];

export const certificates: Certificate[] = [
  {
    title: "Formação em Desenvolvimento Web",
    issuer: "Trybe",
    imageUrl: "/images/certificates/formacao_Desenvolvimento_Web_trybe.png",
    url:"https://drive.google.com/file/d/1FYPLU_Nw8YfNiR4I4eImWE-6J5HeOfsH/view?usp=sharing",
  },
  {
    title: "Fundamentos do Desenvolvimento Web",
    issuer: "Trybe",
    imageUrl: "/images/certificates/fundamentos_do_desenvolvimento_web.png",
    url: "https://drive.google.com/file/d/1CZw0H1FXG6AL5czc3bRQEiXAiioWTPNz/view?usp=sharing",
  },
  {
    title: "Desenvolvimento Front-End",
    issuer: "Trybe",
    imageUrl: "/images/certificates/desenvolvimento_front_end.png",
    url: "https://drive.google.com/file/d/1HvglQGMVtbYSomMjDP3hVSSo6R_T5IWe/view?usp=sharing",
  },
  {
    title: "Desenvolvimento Back-End",
    issuer: "Trybe",
    imageUrl: "/images/certificates/desenvolvimento_back_end.png",
    url: "https://drive.google.com/file/d/1xEVomEsJIT34qBgY3CnknWsXxuXHyd8G/view?usp=sharing",
  },
  {
    title: "Ciência da Computação",
    issuer: "Trybe",
    imageUrl: "/images/certificates/ciencia_da_computacao.png",
    url: "https://drive.google.com/file/d/1a_KDmKX6qO3AmqJmIMeLWGYC7a6C1o-Y/view?usp=sharing",
  },
];

export const resumeUrl = "/Currículo -Thiago Tavares-TI.pdf";
