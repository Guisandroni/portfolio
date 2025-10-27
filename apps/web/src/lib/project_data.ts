import unknowProject from '@/assets/unknowProject.jpg';

export const projects = [
  {
    id: 'daily-diet',
    title: 'Daily Diet',
    description:
      'A mobile application for diet tracking that allows users to log and monitor their daily meals, maintaining a history of what is within or outside their diet plan.',
    development:
      'Developed using React Native with Expo for cross-platform mobile development. The UI was crafted with Nativewind for Tailwind-like styling. The backend was built with Node.js and Fastify framework, ensuring high performance and low overhead. PrismaORM was implemented as the database ORM for type-safe database queries and seamless data management.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/Dayli_Diet',
    tech: [
      'React Native',
      'Expo',
      'Nativewind',
      'Node.js',
      'PrismaORM',
      'Fastify'
    ]
  },

  {
    id: 'bagcoin',
    title: 'BagCoin',
    description:
      'A digital wallet application for managing personal finances, enabling users to track expenses and income with detailed categorization and analytics.',
    development:
      'Built with React Native and Expo to provide a smooth mobile experience across iOS and Android. Styled using Nativewind for consistent UI design. The backend leverages Node.js with Fastify for fast API responses, while PrismaORM handles database operations with PostgreSQL, ensuring data integrity and efficient querying.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/bagCoin-mobile',
    link: 'bagcoin.vercel.app',
    tech: [
      'React Native',
      'Expo',
      'Nativewind',
      'Node.js',
      'PrismaORM',
      'Fastify'
    ]
  },
  {
    id: 'market-items',
    title: 'MarketItems',
    description:
      'A RESTful API for managing market items inventory with full CRUD operations, authentication, and data validation.',
    development:
      'Developed using Express.js on Node.js for robust API routing and middleware handling. MongoDB was chosen as the NoSQL database for flexible schema design and scalability. The frontend interface was built with React and styled using Chakra UI component library, providing a modern and accessible user experience.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/market-Itens',
    tech: ['Express', 'Node.js', 'MongoDB', 'ChakraUI', 'React']
  },
  {
    id: 'pet-registration',
    title: 'Pet Registration',
    description:
      'A comprehensive system for registering and managing pet information, including owner details, medical records, and appointment scheduling.',
    development:
      'The API was architected using Node.js with Fastify framework for high-performance request handling. PrismaORM was integrated with PostgreSQL to provide type-safe database operations and migrations. Docker was utilized for containerization, ensuring consistent development and deployment environments. Zod schema validation was implemented for robust input validation and type inference.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/desafioCadastro',
    tech: ['Fastify', 'Node.js', 'PrismaORM', 'PostgreSQL', 'Docker', 'Zod']
  },
  {
    id: 'ecommerce-microservices',
    title: 'E-commerce Microservices',
    description:
      'A microservices-based e-commerce platform connecting the front store with the warehouse system, featuring asynchronous communication and event-driven architecture.',
    development:
      'Built using Java with Spring Boot framework to create independent microservices. RabbitMQ message broker was implemented for asynchronous communication between services, ensuring loose coupling and scalability. Docker containerization enables easy deployment and orchestration. H2 in-memory database was used for rapid development and testing of data persistence layers.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/Microservices',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'H2']
  },
  {
    id: 'movie-api',
    title: 'Movie API',
    description:
      'A RESTful API for movie catalog management, allowing users to register films by category and streaming platform with search and filtering capabilities.',
    development:
      'Developed with Java using Spring Boot framework for enterprise-grade API development. PostgreSQL was selected as the relational database for structured data storage with complex queries support. Docker containerization ensures consistent deployment across different environments. The API follows REST principles with proper HTTP methods and status codes.',
    image: unknowProject,
    repository: 'https://github.com/Guisandroni/movie_api',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
  }
];
