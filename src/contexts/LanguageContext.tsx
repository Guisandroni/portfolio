import  { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt-BR';

type Translations = {
  [key in Language]: {
    about: string;
    skills: string;
    projects: string;
    downloadCV: string;
    contactMe: string;
    role: string;
    university: string;
    aboutMe: string;
    aboutText1: string;
    aboutText2: string;
    projectTitle: string;
    projectDescription: string;
    liveDemo: string;
    repository: string;
    copyright: string;
  };
};

const translations: Translations = {
  'en': {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    role: "I'm Developer Full Stack",
    university: 'university Ads Fatec',
    aboutMe: 'About Me',
    aboutText1: "Hello! I'm a passionate Full Stack Developer with experience in building web applications using modern technologies. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
    aboutText2: "Currently studying at Fatec, I'm constantly improving my skills and staying up-to-date with the latest trends in web development.",
    projectTitle: 'Project Title',
    projectDescription: 'A brief description of the project and the technologies used in its development.',
    liveDemo: 'Live Demo',
    repository: 'Repository',
    copyright: '© 2024 Gui Sandroni. All rights reserved.',
  },
  'pt-BR': {
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    downloadCV: 'Baixar CV',
    contactMe: 'Contato',
    role: 'Desenvolvedor Full Stack',
    university: 'Universidade Ads Fatec',
    aboutMe: 'Sobre Mim',
    aboutText1: 'Olá! Sou um Desenvolvedor Full Stack apaixonado com experiência na construção de aplicações web usando tecnologias modernas. Adoro criar soluções elegantes para problemas complexos e estou sempre ansioso para aprender novas tecnologias.',
    aboutText2: 'Atualmente estudando na Fatec, estou constantemente aprimorando minhas habilidades e me mantendo atualizado com as últimas tendências em desenvolvimento web.',
    projectTitle: 'Título do Projeto',
    projectDescription: 'Uma breve descrição do projeto e das tecnologias utilizadas em seu desenvolvimento.',
    liveDemo: 'Demo ao Vivo',
    repository: 'Repositório',
    copyright: '© 2024 Gui Sandroni. Todos os direitos reservados.',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}