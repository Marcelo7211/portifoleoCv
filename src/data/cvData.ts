import type { Language } from './translations';

export const getCvData = (lang: Language = 'pt') => {
  const data = {
    pt: {
      personalInfo: {
        name: "Marcelo Barboza da Silva",
        title: "Especialista Técnico na Generation Brasil",
        location: "São Paulo, SP – Brasil",
        email: "marcelo.barboza.cmkp@gmail.com",
        whatsapp: "5511913318498",
        linkedin: "https://www.linkedin.com/in/marcelo-barboza-da-silva-547941199",
        github: "https://github.com/Marcelo7211",
        portfolioGithub: "https://github.com/Marcelo7211",
        cvUrl: "",
        summary: "Profissional com mais de 10 anos de experiência em desenvolvimento de software e liderança técnica. Atua na interseção entre tecnologia, educação e transformação digital, com foco em sistemas escaláveis, alta disponibilidade e formação de equipes de alto desempenho."
      },
      skills: {
        frontend: [
          { name: "React", level: 90 },
          { name: "Angular", level: 85 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 95 }
        ],
        backend: [
          { name: "C# / ASP.NET", level: 95 },
          { name: "Java / Spring Boot", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 }
        ],
        devops: [
          { name: "Docker", level: 85 },
          { name: "Kubernetes", level: 80 },
          { name: "AWS", level: 85 },
          { name: "Google Cloud", level: 75 },
          { name: "CI/CD (Jenkins)", level: 80 }
        ],
        architecture: [
          { name: "Microsserviços", level: 90 },
          { name: "APIs REST", level: 95 },
          { name: "SRE & Observabilidade", level: 85 },
          { name: "Event-Driven", level: 85 }
        ],
        dataAnalytics: [
          { name: "SQL Server", level: 90 },
          { name: "PostgreSQL", level: 85 }
        ],
        rpaAutomation: [
          { name: "Integração de APIs", level: 90 },
          { name: "Automação com Python", level: 85 }
        ],
        curriculumDesign: [
          { name: "Coordenação de Projetos", level: 95 },
          { name: "Planejamento Estratégico", level: 90 },
          { name: "Gestão de Processos", level: 90 },
          { name: "Gestão de OKRs e KPIs", level: 85 },
          { name: "Comunicação Interfuncional", level: 90 }
        ],
        techInstruction: [
          { name: "Mentoria Técnica", level: 95 },
          { name: "Comunicação e Didática", level: 95 },
          { name: "Code Review Educativo", level: 90 },
          { name: "Aprendizagem Ativa", level: 90 }
        ],
        leadershipManagement: [
          { name: "Liderança de Times Técnicos", level: 95 },
          { name: "Treinamento de Equipes", level: 95 },
          { name: "Gestão de KPIs", level: 85 },
          { name: "Alinhamento Estratégico", level: 85 }
        ]
      },
      experience: [
        {
          company: "BYTE ANALYSIS TECHNOLOGY INFORMATION",
          period: "2019 – Atual",
          roles: [
            {
              title: "Analista de Sistemas Sênior",
              period: "2019 – Atual",
              description: "Desenvolvimento Full Stack com C#, ASP.NET, React e SQL Server. Arquitetura de sistemas escaláveis, liderança técnica e mentoria de equipes.",
              achievements: [
                "Arquitetura e implementação de sistemas corporativos de alta disponibilidade",
                "Melhoria contínua de performance em queries e modelagem de dados (SQL Server)",
                "Uso de Docker, Kubernetes e AWS para deploy e observabilidade",
                "Integração de serviços e APIs com foco em segurança e escalabilidade"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server", "Docker", "Kubernetes", "AWS"]
            }
          ]
        },
        {
          company: "Generation Brasil",
          period: "2020 – Atual",
          roles: [
            {
              title: "Technical Expert",
              period: "2022 – Atual",
              description: "Definição técnica e pedagógica de cursos, mentoria de instrutores e evolução de plataforma LMS.",
              achievements: [
                "Estruturação de trilhas e conteúdos alinhados ao mercado",
                "Capacitação de instrutores e acompanhamento de métricas educacionais",
                "Melhorias contínuas na plataforma LMS com foco em UX e escalabilidade"
              ],
              techs: ["Python", "Canvas LMS", "Power BI", "Metodologias Ágeis"]
            },
            {
              title: "Instrutor e Desenvolvedor",
              period: "2020 – 2022",
              description: "Formação de +900 alunos e desenvolvimento de LMS com microsserviços.",
              achievements: [
                "Lecionou Java, C#, Node.js, React e Angular",
                "Mentoria de projetos com foco em boas práticas e arquitetura",
                "Desenvolvimento de funcionalidades críticas em LMS escalável"
              ],
              techs: ["Java", "C#", "Node.js", "React", "Angular", "MySQL", "Docker", "Kubernetes"]
            }
          ]
        },
        {
          company: "Omni Hermes",
          period: "2017 – 2019",
          roles: [
            {
              title: "Desenvolvedor Full Stack",
              period: "2017 – 2019",
              description: "Arquitetura de software e APIs; desenvolvimento de LMS, CRMs e plataformas financeiras.",
              achievements: [
                "Construção de APIs e serviços integrados",
                "Aplicações em Node.js, Java, React e AWS",
                "Foco em segurança, desempenho e escalabilidade"
              ],
              techs: ["Node.js", "Java", "React", "AWS", "PostgreSQL"]
            }
          ]
        },
        {
          company: "Orcozol Assessoria",
          period: "2013 – 2018",
          roles: [
            {
              title: "Analista Sênior / Pleno / Júnior",
              period: "2013 – 2018",
              description: "Desenvolvimento de sistemas web com C#, ASP.NET e Angular; modelagem de banco de dados e integração frontend/backend.",
              achievements: [
                "Entrega de sistemas corporativos com foco em qualidade",
                "Modelagem e otimização de banco de dados",
                "Integrações robustas entre camadas"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server"]
            }
          ]
        },
        {
          company: "Atento",
          period: "2008 – 2013",
          roles: [
            {
              title: "Coordenador de Operações",
              period: "2008 – 2013",
              description: "Gestão de equipes e KPIs, melhoria de processos e qualidade, liderança e treinamento.",
              achievements: [
                "Gestão de indicadores e melhoria contínua",
                "Capacitação e liderança de equipes multidisciplinares"
              ],
              techs: ["Gestão de Pessoas", "KPIs", "Processos"]
            }
          ]
        }
      ],
      education: [
        {
          institution: "UNINOVE",
          degree: "Análise e Desenvolvimento de Sistemas",
          period: "",
          details: ["Formação em desenvolvimento de software, engenharia de requisitos e banco de dados"]
        },
        {
          institution: "Carlos Drummond de Andrade",
          degree: "Ciência da Computação",
          period: "",
          details: ["Fundamentos de computação, estruturas de dados e arquitetura de sistemas"]
        }
      ],
      education: [
        {
          institution: "UNINOVE",
          degree: "Análisis y Desarrollo de Sistemas",
          period: "",
          details: ["Formación en desarrollo de software, ingeniería de requisitos y bases de datos"]
        },
        {
          institution: "Carlos Drummond de Andrade",
          degree: "Ciencia de la Computación",
          period: "",
          details: ["Fundamentos de computación, estructuras de datos y arquitectura de sistemas"]
        }
      ],
      projects: [
        {
          title: "Robô de Busca de Vagas Tech",
          description: "Automação inteligente desenvolvida para auxiliar mais de 2.000 alunos na recolocação profissional. O robô monitora e agrega vagas de tecnologia de múltiplas plataformas como Infojobs, Gupy e LinkedIn.",
          longDescription: "Uma aplicação web inteligente e white-label projetada para revolucionar a recolocação profissional de desenvolvedores. O sistema analisa currículos em PDF diretamente no navegador, extrai habilidades e experiências, e utiliza um algoritmo de matching avançado para recomendar as vagas mais adequadas ao perfil do candidato. Desenvolvida como uma plataforma SaaS voltada para bootcamps e HR Techs, possui um painel de configurações para customização instantânea da marca, suporte nativo a Dark Mode e animações fluidas.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
          results: "+2.000 alunos impactados em diversas plataformas",
          githubLink: "https://github.com/Marcelo7211/Rob-de-Busca-de-Vagas-Tech",
          link: "https://rob-de-busca-de-vagas-tech-delta.vercel.app/"
        },
        {
          title: "Plataforma para ONGs de Mulheres",
          description: "Sistema desenvolvido para apoiar o empreendedorismo feminino através de ONGs. Inclui ferramentas de cálculo de viabilidade de negócios, gestão financeira simplificada e mentorias.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS"],
          results: "Impacto social direto no apoio a microempreendedoras",
          link: "#"
        },
        {
          title: "Dashboards Educacionais & Analytics",
          description: "Solução de Business Intelligence para empresas de educação, focada em métricas de engajamento, retenção e performance acadêmica. Integração direta com LMS e análise preditiva.",
          longDescription: "Uma solução abrangente de Business Intelligence voltada para o setor educacional. Este dashboard interativo oferece visualizações detalhadas de métricas de engajamento, retenção de alunos e performance acadêmica. Construído com foco na experiência do usuário, permite a análise preditiva e integração direta com sistemas de gestão de aprendizagem (LMS), facilitando a tomada de decisão estratégica para instituições de ensino.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Java", "Spring Boot", "Power BI", "SQL", "Data Warehouse"],
          results: "Otimização de estratégias pedagógicas baseada em dados",
          githubLink: "https://github.com/Marcelo7211/DashboardsEducacionais-Analytics",
          link: "https://dashboards-educacionais-analytics-kappa.vercel.app/"
        },
        {
          title: "Plataforma LMS Escalonável",
          description: "Sistema de gerenciamento de aprendizagem (LMS) desenvolvido do zero, atendendo mais de 2.200 usuários. Inclui streaming de vídeo, correção de exercícios baseada em IA e monitoramento de progresso.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
          results: "Suportou pico de acessos com 99.9% de uptime",
          link: "#"
        },
        {
          title: "Sistema ERP Imobiliário",
          description: "Plataforma de gestão para o setor imobiliário focada em performance e eficiência. Integração com múltiplos serviços de terceiros e mensageria para processamento assíncrono.",
          longDescription: "Sistema ERP completo para imobiliárias, cobrindo gestão de imóveis, propostas comerciais, funil de vendas e acompanhamento operacional em tempo real. A solução integra serviços de terceiros e mensageria assíncrona para manter alta performance em processos críticos, com foco em produtividade e escalabilidade para equipes comerciais e administrativas.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
          results: "Aumentou a eficiência operacional em 35%",
          githubLink: "https://github.com/Marcelo7211/ERP-projeto",
          link: "https://erp-projeto.vercel.app/"
        },
        {
          title: "Portal Financeiro & Corretagem",
          description: "Aplicação robusta para corretoras, fornecendo análises em tempo real, integração de dados complexos e painéis de controle interativos de alta performance.",
          longDescription: "Uma aplicação web White-Label de alta performance para o mercado financeiro, desenvolvida para oferecer uma experiência de SaaS Financeiro premium. O sistema combina dados em tempo real, simulação de trading e gestão de carteira em uma interface sofisticada e totalmente personalizável. Permite personalização instantânea de cores da marca, suporte a Dark/Light Mode e integração híbrida de dados de mercado (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Reduziu latência de processamento de dados em 50%",
          githubLink: "https://github.com/Marcelo7211/PortalFinanceiro",
          link: "https://portal-financeiro-ten.vercel.app/"
        },
        {
          title: "Dojo Paulista – Landing Page",
          description: "Landing page desenvolvida para academia de artes marciais com foco na captação de novos alunos. Design moderno com navegação fluida, apresentação dos planos, diferenciais da escola e formulário de contato estrategicamente posicionado.",
          longDescription: "Projeto de landing page completa para o Dojo Paulista, academia de artes marciais localizada em São Paulo. A página foi desenvolvida com foco total na conversão: apresenta o propósito da academia com a tagline 'Transformando Vidas, Forjando Campeões', detalha os planos disponíveis, destaca os diferenciais competitivos e oferece múltiplos pontos de contato ao longo da página. A navegação intuitiva inclui seções de Home, Nossos Planos, Loja, Sobre Nós e Fale Conosco, tudo com uma identidade visual forte e profissional que transmite credibilidade e inspira novos alunos.",
          image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Typescript", "JavaScript", "Tailwind CSS"],
          results: "Aumento de 40% na captação de novos alunos",
          githubLink: "https://github.com/Marcelo7211/dojo-landingpage-ui",
          link: "https://dojopaulista.vercel.app/"
        },
        {
          title: "Carlos TRG – Landing Page de Terapia",
          description: "Landing page criada para terapeuta com foco na captação e agendamento de consultas. Interface acolhedora e profissional com a proposta 'Transforme sua mente, reescreva sua história', otimizada para conversão de visitantes em pacientes.",
          longDescription: "Landing page desenvolvida para Carlos TRG, terapeuta com atuação em São Paulo. A proposta do projeto foi criar uma presença digital empática e profissional, transmitindo confiança e acolhimento ao visitante em busca de apoio terapêutico. A página apresenta o terapeuta, seus serviços e abordagem, além de uma seção dedicada ao agendamento de sessões — ponto central de conversão da página. A navegação contempla Home, Sobre Mim, Agende uma Sessão, Fale Conosco e Nossos Serviços, com uma identidade visual sofisticada em tons de azul e lilás que reforça a proposta transformadora da terapia.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Typescript", "CalendarApi", "JavaScript", "Tailwind CSS"],
          results: "Aumento em 80% na captação de novos pacientes, reduçao de 100% no indice de conflitos de agendamentos.",
          githubLink: "https://github.com/Marcelo7211/carlostrg",
          link: "https://carlostrg.vercel.app/"
        }
      ]
    },
    en: {
      personalInfo: {
        name: "Marcelo Barboza da Silva",
        title: "Technical Expert at Generation Brazil",
        location: "São Paulo, SP – Brazil",
        email: "marcelo.barboza.cmkp@gmail.com",
        whatsapp: "",
        linkedin: "https://www.linkedin.com/in/marcelo-barboza-da-silva-547941199",
        github: "",
        portfolioGithub: "",
        cvUrl: "",
        summary: "Professional with over 10 years of experience in software development and technical leadership. Works at the intersection of technology, education, and digital transformation, focusing on scalable systems, high availability, and building high-performance teams."
      },
      skills: {
        frontend: [
          { name: "React", level: 90 },
          { name: "Angular", level: 85 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 95 }
        ],
        backend: [
          { name: "C# / ASP.NET", level: 95 },
          { name: "Java / Spring Boot", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 }
        ],
        devops: [
          { name: "Docker", level: 85 },
          { name: "Kubernetes", level: 80 },
          { name: "AWS", level: 85 },
          { name: "Google Cloud", level: 75 },
          { name: "CI/CD (Jenkins)", level: 80 }
        ],
        architecture: [
          { name: "Microservices", level: 90 },
          { name: "REST APIs", level: 95 },
          { name: "SRE & Observability", level: 85 },
          { name: "Event-Driven", level: 85 }
        ],
        dataAnalytics: [
          { name: "SQL Server", level: 90 },
          { name: "PostgreSQL", level: 85 }
        ],
        rpaAutomation: [
          { name: "API Integration", level: 90 },
          { name: "Python Automation", level: 85 }
        ],
        curriculumDesign: [
          { name: "Project Coordination", level: 95 },
          { name: "Strategic Planning", level: 90 },
          { name: "Process Management", level: 90 },
          { name: "OKR & KPI Management", level: 85 },
          { name: "Cross-functional Communication", level: 90 }
        ],
        techInstruction: [
          { name: "Technical Mentoring", level: 95 },
          { name: "Communication & Didactics", level: 95 },
          { name: "Educational Code Review", level: 90 },
          { name: "Active Learning", level: 90 }
        ],
        leadershipManagement: [
          { name: "Technical Team Leadership", level: 95 },
          { name: "Team Training", level: 95 },
          { name: "KPI Management", level: 85 },
          { name: "Strategic Alignment", level: 85 }
        ]
      },
      experience: [
        {
          company: "BYTE ANALYSIS TECHNOLOGY INFORMATION",
          period: "2019 – Present",
          roles: [
            {
              title: "Senior Systems Analyst",
              period: "2019 – Present",
              description: "Full Stack development with C#, ASP.NET, React and SQL Server. Systems architecture, technical leadership and team mentoring.",
              achievements: [
                "Architected and implemented high-availability corporate systems",
                "Continuous performance improvements in queries and data modeling (SQL Server)",
                "Docker, Kubernetes and AWS for deployment and observability",
                "Secure and scalable service and API integrations"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server", "Docker", "Kubernetes", "AWS"]
            }
          ]
        },
        {
          company: "Generation Brazil",
          period: "2020 – Present",
          roles: [
            {
              title: "Technical Expert",
              period: "2022 – Present",
              description: "Technical and pedagogical definition of courses, instructor mentoring and LMS platform evolution.",
              achievements: [
                "Structured tracks and content aligned with market demands",
                "Instructor enablement and monitoring of educational metrics",
                "Continuous improvements in the LMS focusing on UX and scalability"
              ],
              techs: ["Python", "Canvas LMS", "Power BI", "Agile Methodologies"]
            },
            {
              title: "Instructor and Developer",
              period: "2020 – 2022",
              description: "Training 900+ students and developing a microservices-based LMS.",
              achievements: [
                "Taught Java, C#, Node.js, React and Angular",
                "Mentored projects with best practices and architecture focus",
                "Developed critical LMS features at scale"
              ],
              techs: ["Java", "C#", "Node.js", "React", "Angular", "MySQL", "Docker", "Kubernetes"]
            }
          ]
        },
        {
          company: "Omni Hermes",
          period: "2017 – 2019",
          roles: [
            {
              title: "Full Stack Developer",
              period: "2017 – 2019",
              description: "Software architecture and APIs; LMS, CRMs and financial platforms development.",
              achievements: [
                "Built APIs and integrated services",
                "Applications in Node.js, Java, React and AWS",
                "Focus on security, performance and scalability"
              ],
              techs: ["Node.js", "Java", "React", "AWS", "PostgreSQL"]
            }
          ]
        },
        {
          company: "Orcozol Assessoria",
          period: "2013 – 2018",
          roles: [
            {
              title: "Analyst (Senior / Mid / Junior)",
              period: "2013 – 2018",
              description: "Web systems with C#, ASP.NET and Angular; database modeling and frontend/backend integration.",
              achievements: [
                "Delivered corporate systems with quality focus",
                "Database modeling and optimization",
                "Robust integrations across layers"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server"]
            }
          ]
        },
        {
          company: "Atento",
          period: "2008 – 2013",
          roles: [
            {
              title: "Operations Coordinator",
              period: "2008 – 2013",
              description: "Team and KPI management, process and quality improvements, leadership and training.",
              achievements: [
                "Indicator management and continuous improvement",
                "Training and leadership of multidisciplinary teams"
              ],
              techs: ["People Management", "KPIs", "Processes"]
            }
          ]
        }
      ],
      projects: [
        {
          title: "Tech Job Search Bot",
          description: "Intelligent automation to support 2,000+ students pursuing tech jobs. Monitors and aggregates vacancies from platforms like Infojobs, Gupy and LinkedIn.",
          longDescription: "A smart, white-label web application designed to improve professional placement for developers. It analyzes PDF resumes in the browser, extracts skills and experiences, and uses a matching algorithm to recommend suitable jobs. Built as a SaaS for bootcamps and HR Techs, featuring brand customization, native Dark Mode and fluid animations.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
          results: "2,000+ students impacted across platforms",
          githubLink: "https://github.com/Marcelo7211/Rob-de-Busca-de-Vagas-Tech",
          link: "https://rob-de-busca-de-vagas-tech-delta.vercel.app/"
        },
        {
          title: "Platform for Women's NGOs",
          description: "System to support female entrepreneurship through NGOs. Includes business viability tools, simplified financial management and mentoring.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS"],
          results: "Direct social impact supporting micro-entrepreneurs",
          link: "#"
        },
        {
          title: "Educational Dashboards & Analytics",
          description: "BI solution for education companies focused on engagement, retention and academic performance. Direct LMS integration and predictive analysis.",
          longDescription: "A comprehensive BI solution for the education sector providing detailed visualizations for engagement, retention and performance. Built with user experience in mind, enabling predictive analysis and direct LMS integration to support strategic decision-making.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Java", "Spring Boot", "Power BI", "SQL", "Data Warehouse"],
          results: "Data-driven optimization of pedagogical strategies",
          link: "https://dashboards-educacionais-analytics-kappa.vercel.app/",
          githubLink: "https://github.com/Marcelo7211/DashboardsEducacionais-Analytics"
        },
        {
          title: "Scalable LMS Platform",
          description: "Learning Management System serving 2,200+ users with video streaming, AI-based grading and progress monitoring.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
          results: "Handled peak traffic with 99.9% uptime",
          link: "#"
        },
        {
          title: "Real Estate ERP System",
          description: "Management platform focused on performance and efficiency. Integrates third-party services and messaging for asynchronous processing.",
          longDescription: "Comprehensive ERP covering properties, proposals, sales pipeline and real-time operations. Integrates services and asynchronous messaging to keep critical flows fast and reliable, boosting productivity and scalability.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
          results: "Increased operational efficiency by 35%",
          link: "https://erp-projeto.vercel.app/",
          githubLink: "https://github.com/Marcelo7211/ERP-projeto"
        },
        {
          title: "Financial & Brokerage Portal",
          description: "High-performance web app for brokerages, providing real-time analytics, complex data integration and interactive dashboards.",
          longDescription: "A premium white-label Financial SaaS combining real-time data, trading simulation and portfolio management in a customizable interface. Supports instant brand color customization, Dark/Light Mode and hybrid market data integration.",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Reduced data processing latency by 50%",
          githubLink: "https://github.com/Marcelo7211/PortalFinanceiro",
          link: "https://portal-financeiro-ten.vercel.app/"
        },
        {
          title: "Dojo Paulista – Landing Page",
          description: "Landing page built for a martial arts academy focused on student acquisition. Modern design with smooth navigation, plan presentation, school highlights and strategically placed contact forms.",
          longDescription: "A complete landing page project for Dojo Paulista, a martial arts academy in São Paulo. The page was built with a total focus on conversion: presenting the academy's purpose with the tagline 'Transforming Lives, Forging Champions', detailing available plans, highlighting competitive advantages and offering multiple contact points throughout. Intuitive navigation includes Home, Our Plans, Shop, About Us and Contact sections, all with a strong and professional visual identity that conveys credibility and inspires new students.",
          image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
          techs: ["HTML", "CSS", "JavaScript", "Vercel"],
          results: "High-conversion landing page for martial arts student acquisition",
          githubLink: "https://github.com/Marcelo7211/dojo-landingpage-ui",
          link: "https://dojopaulista.vercel.app/"
        },
        {
          title: "Carlos TRG – Therapy Landing Page",
          description: "Landing page created for a therapist focused on patient acquisition and appointment booking. Welcoming and professional interface with the message 'Transform your mind, rewrite your story', optimized to convert visitors into patients.",
          longDescription: "Landing page built for Carlos TRG, a therapist based in São Paulo. The goal was to create an empathetic and professional digital presence that conveys trust and warmth to visitors seeking therapeutic support. The page introduces the therapist, his services and approach, alongside a dedicated appointment booking section — the core conversion point. Navigation covers Home, About Me, Schedule a Session, Contact Us and Our Services, with a sophisticated visual identity in blue and lilac tones that reinforces the transformative nature of therapy.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          techs: ["HTML", "CSS", "JavaScript", "Vercel"],
          results: "Premium online booking platform with professional visual identity for a therapist",
          githubLink: "https://github.com/Marcelo7211/carlostrg",
          link: "https://carlostrg.vercel.app/"
        }
      ],
      education: [
        {
          institution: "UNINOVE",
          degree: "Systems Analysis and Development",
          period: "",
          details: ["Software development, requirements engineering and databases"]
        },
        {
          institution: "Carlos Drummond de Andrade",
          degree: "Computer Science",
          period: "",
          details: ["Foundations of computing, data structures and systems architecture"]
        }
      ]
    },
    es: {
      personalInfo: {
        name: "Marcelo Barboza da Silva",
        title: "Especialista Técnico en Generation Brasil",
        location: "São Paulo, SP – Brasil",
        email: "marcelo.barboza.cmkp@gmail.com",
        whatsapp: "",
        linkedin: "https://www.linkedin.com/in/marcelo-barboza-da-silva-547941199",
        github: "",
        portfolioGithub: "",
        cvUrl: "",
        summary: "Profesional con más de 10 años de experiencia en desarrollo de software y liderazgo técnico. Actúa en la intersección entre tecnología, educación y transformación digital, con foco en sistemas escalables, alta disponibilidad y formación de equipos de alto rendimiento."
      },
      skills: {
        frontend: [
          { name: "React", level: 90 },
          { name: "Angular", level: 85 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 95 }
        ],
        backend: [
          { name: "C# / ASP.NET", level: 95 },
          { name: "Java / Spring Boot", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 }
        ],
        devops: [
          { name: "Docker", level: 85 },
          { name: "Kubernetes", level: 80 },
          { name: "AWS", level: 85 },
          { name: "Google Cloud", level: 75 },
          { name: "CI/CD (Jenkins)", level: 80 }
        ],
        architecture: [
          { name: "Microservicios", level: 90 },
          { name: "APIs REST", level: 95 },
          { name: "SRE y Observabilidad", level: 85 },
          { name: "Event-Driven", level: 85 }
        ],
        dataAnalytics: [
          { name: "SQL Server", level: 90 },
          { name: "PostgreSQL", level: 85 }
        ],
        rpaAutomation: [
          { name: "Integración de APIs", level: 90 },
          { name: "Automatización con Python", level: 85 }
        ],
        curriculumDesign: [
          { name: "Coordinación de Proyectos", level: 95 },
          { name: "Planificación Estratégica", level: 90 },
          { name: "Gestión de Procesos", level: 90 },
          { name: "Gestión de OKRs y KPIs", level: 85 },
          { name: "Comunicación Interfuncional", level: 90 }
        ],
        techInstruction: [
          { name: "Mentoría Técnica", level: 95 },
          { name: "Comunicación y Didáctica", level: 95 },
          { name: "Revisión de Código Educativa", level: 90 },
          { name: "Aprendizaje Activo", level: 90 }
        ],
        leadershipManagement: [
          { name: "Liderazgo de Equipos Técnicos", level: 95 },
          { name: "Entrenamiento de Equipos", level: 95 },
          { name: "Gestión de KPIs", level: 85 },
          { name: "Alineación Estratégica", level: 85 }
        ]
      },
      experience: [
        {
          company: "BYTE ANALYSIS TECHNOLOGY INFORMATION",
          period: "2019 - Presente",
          roles: [
            {
              title: "Ingeniero Full Stack Senior",
              period: "2024 - Presente",
              description: "Liderazgo en el desarrollo de aplicaciones escalables y robustas para el sector inmobiliario, construyendo plataformas completas para la gestión de propiedades, propuestas y embudos de ventas. Amplia experiencia en arquitecturas modernas, mensajería distribuida y entornos en la nube.",
              achievements: [
                "Aumento del 35% en la eficiencia operativa a través de mejoras arquitectónicas",
                "Diseñó e implementó APIs REST seguras y de alto rendimiento con ASP.NET",
                "Estructuró la comunicación asíncrona con RabbitMQ, Kafka y AWS SQS",
                "Lideró la evolución del frontend en React con componentes reutilizables",
                "Despliegue y gestión de aplicaciones en AWS (EC2, S3, RDS) con Docker y Kubernetes",
                "Mentoría técnica de equipos, diseminando buenas prácticas"
              ],
              techs: ["C#", "ASP.NET", "React", "AWS", "SQL Server", "Docker", "Kubernetes", "Kafka"]
            },
            {
              title: "Ingeniero Full Stack Semi-Senior",
              period: "2020 - 2024",
              description: "Desarrollo de plataformas inmobiliarias completas que cubren todo el proceso comercial y operativo, centrándose en soluciones escalables y seguras.",
              achievements: [
                "Optimización de bases de datos SQL Server con consultas y procedimientos eficientes",
                "Creación de interfaces modernas y responsivas con Angular",
                "Integraciones eficientes entre frontend y backend vía APIs",
                "Implementación de aplicaciones en AWS y orquestación con Docker/Kubernetes"
              ],
              techs: ["C#", "ASP.NET", "Angular", "SQL Server", "Docker", "AWS"]
            },
            {
              title: "Ingeniero Full Stack Junior",
              period: "2018 - 2020",
              description: "Desarrollo y mantenimiento de aplicaciones web, contribuyendo a funcionalidades, integración entre servicios y mejora continua de los sistemas.",
              achievements: [
                "Desarrollo de APIs REST con ASP.NET y endpoints para frontend",
                "Creación de componentes reutilizables en React",
                "Modelado de bases de datos SQL Server",
                "Aplicación de buenas prácticas, pruebas y validación de funcionalidades"
              ],
              techs: ["C#", "ASP.NET", "React", "SQL Server"]
            }
          ]
        },
        {
          company: "Generation Brasil",
          period: "2019 - Presente",
          roles: [
            {
              title: "Technical Expert",
              period: "2022 - Presente",
              description: "Creación y evolución de programas educativos orientados a la formación en tecnología, alineando las rutas de aprendizaje a las demandas del mercado. Rol conjunto como Desarrollador y Analista de Datos.",
              achievements: [
                "Estructuración de cursos y rutas en Canvas LMS, siguiendo el progreso de +700 estudiantes",
                "Desarrollo de automatizaciones en Python (Flask) incluyendo un bot de búsqueda de empleo",
                "Generación de insights con Python y Power BI para mejorar el currículo y la empleabilidad",
                "Integración de datos de rendimiento y métricas de aprendizaje para decisiones estratégicas"
              ],
              techs: ["Python", "Flask", "Power BI", "Canvas LMS", "Data Analytics"]
            },
            {
              title: "Instructor y Dev Full Stack",
              period: "2020 - 2024",
              description: "Formación de profesionales de tecnología, impactando a más de 900 estudiantes. Desarrollo paralelo de una plataforma LMS escalable en una arquitectura de microservicios.",
              achievements: [
                "Enseñó Java, C#, Node.js, React y Angular con mentoría en proyectos reales",
                "Desarrollo de LMS que gestionó el aprendizaje de +2.200 usuarios",
                "Implementó streaming de video y corrección automatizada basada en IA",
                "Sistema construido con Java, Spring Boot, React, MySQL, Docker y Kubernetes"
              ],
              techs: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Kubernetes"]
            },
            {
              title: "Instructor de Desarrollo de Software",
              period: "2019 - 2020",
              description: "Formación de profesionales en programas intensivos de desarrollo web enfocados en Java y Angular.",
              achievements: [
                "Impartió clases prácticas de APIs REST y bases de datos relacionales",
                "Mentoría de estudiantes en proyectos reales, ofreciendo revisión de código",
                "Enseñanza enfocada en desarrollo full stack y control de versiones con Git"
              ],
              techs: ["Java", "Spring Boot", "Angular", "Git"]
            }
          ]
        },
        {
          company: "Consultoría en Tecnología Freelance",
          period: "2021 - Presente",
          roles: [
            {
              title: "Arquitecto de Software y Dev Full Stack",
              period: "2021 - Presente",
              description: "Liderazgo de proyectos bajo demanda para empresas, startups y ONGs. Participación desde la definición de la arquitectura hasta la implementación completa de aplicaciones enfocadas en escalabilidad y seguridad.",
              achievements: [
                "Desarrollo de CRMs personalizados para ONGs (gestión de donantes y campañas)",
                "Construcción de plataformas de inversión y sistemas para corredurías financieras",
                "Desarrollo de plataformas LMS para gestión de cursos y contenidos",
                "Creación de APIs y microservicios (Node.js, Java, Python) y apps móviles (React Native)",
                "Infraestructura basada en contenedores (Docker/Kubernetes) e implementación en AWS"
              ],
              techs: ["Node.js", "Java", "Python", "React Native", "AWS", "Docker", "Kubernetes"]
            }
          ]
        }
      ],
      projects: [
        {
          title: "Bot de Búsqueda de Empleo Tech",
          description: "Automatización inteligente desarrollada para ayudar a más de 2.000 estudiantes en la colocación profesional. El bot monitorea y agrega empleos tecnológicos de múltiples plataformas como Infojobs, Gupy y LinkedIn.",
          longDescription: "Una aplicación web inteligente y white-label diseñada para revolucionar la recolocación profesional de desarrolladores. El sistema analiza currículums en PDF directamente en el navegador, extrae habilidades y experiencias, y utiliza un algoritmo de matching avanzado para recomendar los trabajos más adecuados al perfil del candidato. Desarrollada como una plataforma SaaS para bootcamps y HR Techs, cuenta con un panel de configuración para la personalización instantánea de la marca, soporte nativo para Modo Oscuro y animaciones fluidas.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand"],
          results: "+2.000 estudiantes impactados en múltiples plataformas",
          githubLink: "https://github.com/Marcelo7211/Rob-de-Busca-de-Vagas-Tech",
          link: "https://rob-de-busca-de-vagas-tech-delta.vercel.app/"
        },
        {
          title: "Plataforma para ONGs de Mujeres",
          description: "Sistema desarrollado para apoyar el emprendimiento femenino a través de ONGs. Incluye herramientas de cálculo de viabilidad empresarial, gestión financiera simplificada y mentorías.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS"],
          results: "Impacto social directo en el apoyo a microemprendedoras",
          link: "#"
        },
        {
          title: "Dashboards Educativos y Analytics",
          description: "Solución de Business Intelligence para empresas de educación, centrada en métricas de compromiso, retención y rendimiento académico. Integración directa con LMS y análisis predictivo.",
          longDescription: "Una solución integral de Business Intelligence orientada al sector educativo. Este dashboard interactivo ofrece visualizaciones detalladas de métricas de compromiso, retención de estudiantes y rendimiento académico. Construido con un enfoque en la experiencia del usuario, permite el análisis predictivo y la integración directa con sistemas de gestión de aprendizaje (LMS), facilitando la toma de decisiones estratégicas para las instituciones educativas.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Java", "Spring Boot", "Power BI", "SQL", "Data Warehouse"],
          results: "Optimización de estrategias pedagógicas basadas en datos",
          githubLink: "https://github.com/Marcelo7211/DashboardsEducacionais-Analytics",
          link: "https://dashboards-educacionais-analytics-kappa.vercel.app/"
        },
        {
          title: "Plataforma LMS Escalable",
          description: "Sistema de gestión de aprendizaje (LMS) desarrollado desde cero, atendiendo a más de 2.200 usuarios. Incluye streaming de video, corrección de ejercicios basada en IA y monitoreo de progreso.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes"],
          results: "Soportó picos de tráfico con un 99.9% de tiempo de actividad",
          link: "#"
        },
        {
          title: "Sistema ERP Inmobiliario",
          description: "Plataforma de gestión para el sector inmobiliario enfocada en el rendimiento y la eficiencia. Integración con múltiples servicios de terceros y mensajería para procesamiento asíncrono.",
          longDescription: "Plataforma ERP integral para operaciones inmobiliarias, con gestión de inmuebles, propuestas comerciales, embudo de ventas y seguimiento operativo en tiempo real. El sistema integra servicios de terceros y mensajería asíncrona para sostener alto rendimiento en flujos críticos, elevando la productividad y escalabilidad de equipos comerciales y administrativos.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server"],
          results: "Aumentó la eficiencia operativa en un 35%",
          githubLink: "https://github.com/Marcelo7211/ERP-projeto",
          link: "https://erp-projeto.vercel.app/"
        },
        {
          title: "Portal Financiero y Corretaje",
          description: "Aplicación robusta para corredurías, que proporciona análisis en tiempo real, integración de datos complejos y paneles de control interactivos de alto rendimiento.",
          longDescription: "Una aplicación web White-Label de alto rendimiento para el mercado financiero, desarrollada para ofrecer una experiencia premium de SaaS Financiero. El sistema combina datos en tiempo real, simulación de trading y gestión de cartera en una interfaz sofisticada y totalmente personalizable. Permite la personalización instantánea de los colores de la marca, soporte para Modo Oscuro/Claro e integración híbrida de datos de mercado (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis"],
          results: "Redujo la latencia de procesamiento de datos en un 50%",
          githubLink: "https://github.com/Marcelo7211/PortalFinanceiro",
          link: "https://portal-financeiro-ten.vercel.app/"
        },
        {
          title: "Dojo Paulista – Landing Page",
          description: "Landing page desarrollada para una academia de artes marciales centrada en la captación de nuevos alumnos. Diseño moderno con navegación fluida, presentación de planes, diferenciales de la escuela y formulario de contacto estratégicamente posicionado.",
          longDescription: "Proyecto de landing page completa para el Dojo Paulista, academia de artes marciales ubicada en São Paulo. La página fue desarrollada con foco total en la conversión: presenta el propósito de la academia con el lema 'Transformando Vidas, Forjando Campeones', detalla los planes disponibles, destaca los diferenciales competitivos y ofrece múltiples puntos de contacto a lo largo de la página. La navegación intuitiva incluye secciones de Inicio, Nuestros Planes, Tienda, Sobre Nosotros y Contáctenos, todo con una identidad visual fuerte y profesional que transmite credibilidad e inspira a nuevos alumnos.",
          image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
          techs: ["HTML", "CSS", "JavaScript", "Vercel"],
          results: "Página de alta conversión para captación de alumnos de artes marciales",
          githubLink: "https://github.com/Marcelo7211/dojo-landingpage-ui",
          link: "https://dojopaulista.vercel.app/"
        },
        {
          title: "Carlos TRG – Landing Page de Terapia",
          description: "Landing page creada para un terapeuta con foco en la captación y programación de consultas. Interfaz acogedora y profesional con la propuesta 'Transforma tu mente, reescribe tu historia', optimizada para convertir visitantes en pacientes.",
          longDescription: "Landing page desarrollada para Carlos TRG, terapeuta con actividad en São Paulo. El objetivo del proyecto fue crear una presencia digital empática y profesional que transmitiera confianza y acogida al visitante que busca apoyo terapéutico. La página presenta al terapeuta, sus servicios y enfoque, además de una sección dedicada al agendamiento de sesiones — punto central de conversión de la página. La navegación contempla Inicio, Sobre Mí, Agendar una Sesión, Contáctenos y Nuestros Servicios, con una identidad visual sofisticada en tonos azules y lilas que refuerza la propuesta transformadora de la terapia.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          techs: ["HTML", "CSS", "JavaScript", "Vercel"],
          results: "Plataforma de citas en línea con identidad visual premium para terapeuta",
          githubLink: "https://github.com/Marcelo7211/carlostrg",
          link: "https://carlostrg.vercel.app/"
        }
      ]
    }
  };

  return data[lang];
};
