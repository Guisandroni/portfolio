import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/translation/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed z-50 flex items-center gap-1 p-2 text-white transition-colors bg-gray-800 rounded-full top-4 right-4 dark:bg-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-100"
      aria-label="Toggle language"
    >
      <Languages size={20} />
      <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'PT'}</span>
    </button>
  );
}