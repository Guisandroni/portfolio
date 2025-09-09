import unknowProjeto from "../assets/imgs/projetosUnknow.jpg";
export const projects = [

  {
    title: "Dayli Diet",
    description:
      "DailyDiet é um aplicativo mobile para controle de dieta, permitindo registrar e acompanhar suas refeições diárias, mantendo um histórico do que está dentro ou fora da sua dieta.",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/Dayli_Diet",
    tech:[
      "React Native",
      "Expo",
      "Nativewind",
      "Node.js",
      "PrismaORM",
      "Fastify"
    ]
    
  },
  
  {
    title: "BagCoin",
    description:
      "Uma carteira digital para gerenciar suas finanças, permitindo controle de despesas e receitas.",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/bagCoin-mobile",
    link: "bagcoin.vercel.app",
    tech:[
      "React Native",
      "Expo",
      "Nativewind",
      "Node.js",
      "PrismaORM",
      "Fastify"
    ]
  },
  {
    title: "MarketItems",
    description:
      "API RESTful para gerenciar itens de mercado, desenvolvida com Fastify, TypeScript e Prisma.",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/market-Itens",
    tech:[
      "Express",
      "Node.js",
      "MongoDB",
      "ChackraUI",
      "React"
    ]
    
  },
  {
    title: "Cadastro Pet",
    description:
      "Um sistema para cadastrar e gerenciar animais de estimação, a API foi desenvolvida utilizando Node.js e a biblioteca Fastify para construção do backend, o PrismaORM foi implementado junto do PostgreSQL para poder salvar os dados.",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/desafioCadastro",
    tech:[
      "Fastify",
      "Node.js",
      "PrismaORM",
      "PostgreSQL",
      "Docker",
      "Zod"
    ]
  },
  {
    title: "E-commerce",
    description:
      "Projeto com camada de microserviços conecntando o FrontStore com o warehouse do e-commerce, foi desenvolvido utilizando Spring Boot e RabbitMQ",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/Microservices",
    tech:[
      "Java",
      "Spring Boot",
      "RabbitMQ",
      "Docker",
      "H2"
    ]
  },
  {
    title: "Movie-Api",
    description:
      "API para cadastro de filmes por categoria e streaming",
    image: unknowProjeto,
    repository: "https://github.com/Guisandroni/movie_api",
    tech:[
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker"
    ]
  },
];
