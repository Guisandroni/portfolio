
import { HeroSection } from './components/HeroSection';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Navbar } from './components/Navbar';
import { AnimatedSection } from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-8 md:gap-40 justify-center">
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default App;