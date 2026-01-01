import unknowProject from "@/assets/unknowProject.jpg";

export const projects = [
  {
    id: "daily-diet",
    title: "Daily Diet",
    description:
      "A mobile application for diet tracking that allows users to log and monitor their daily meals, maintaining a history of what is within or outside their diet plan.",
    development:
      "Developed using React Native with Expo for cross-platform mobile development. The UI was crafted with Nativewind for Tailwind-like styling. The backend was built with Node.js and Fastify framework, ensuring high performance and low overhead. PrismaORM was implemented as the database ORM for type-safe database queries and seamless data management.",
    image: unknowProject,
    repository: "https://github.com/Guisandroni/Dayli_Diet",
    tech: [
      "React Native",
      "Expo",
      "Nativewind",
      "Node.js",
      "PrismaORM",
      "Fastify",
    ],
  },

  {
    id: "bagcoin",
    title: "BagCoin",
    description:
      "A digital wallet application for managing personal finances, enabling users to track expenses and income with detailed categorization and analytics.",
    development:
      "Built with React Native and Expo to provide a smooth mobile experience across iOS and Android. Styled using Nativewind for consistent UI design. The backend leverages Node.js with Fastify for fast API responses, while PrismaORM handles database operations with PostgreSQL, ensuring data integrity and efficient querying.",
    image: unknowProject,
    repository: "https://github.com/Guisandroni/bagCoin-mobile",
    link: "bagcoin.vercel.app",
    tech: [
      "React Native",
      "Expo",
      "Nativewind",
      "Node.js",
      "PrismaORM",
      "Fastify",
    ],
  },
  {
    id: "pet-registration",
    title: "Pet Registration",
    description:
      "A comprehensive system for registering and managing pet information, including owner details, medical records, and appointment scheduling.",
    development:
      "The API was architected using Node.js with Fastify framework for high-performance request handling. PrismaORM was integrated with PostgreSQL to provide type-safe database operations and migrations. Docker was utilized for containerization, ensuring consistent development and deployment environments. Zod schema validation was implemented for robust input validation and type inference.",
    image: unknowProject,
    repository: "https://github.com/Guisandroni/desafioCadastro",
    tech: ["Fastify", "Node.js", "PrismaORM", "PostgreSQL", "Docker", "Zod"],
  },
  {
    id: "movie-api",
    title: "Movie API",
    description:
      "A RESTful API for movie catalog management, allowing users to register films by category and streaming platform with search and filtering capabilities.",
    development:
      "Developed with Java using Spring Boot framework for enterprise-grade API development. PostgreSQL was selected as the relational database for structured data storage with complex queries support. Docker containerization ensures consistent deployment across different environments. The API follows REST principles with proper HTTP methods and status codes.",
    image: unknowProject,
    repository: "https://github.com/Guisandroni/movie_api",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
];
