
// import { useLanguage } from './contexts/LanguageContext';
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Navbar } from './components/Navbar';

function App() {
  // const { t } = useLanguage();
  // const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker'];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300">

      <Navbar/>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Footer />



    </div>
  );
}

export default App;