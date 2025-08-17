import { useLanguage } from '../contexts/translation/LanguageContext';


export function About(){
      const { t } = useLanguage();
    
    return(

        <section id="about" className="py-32 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            {t('aboutMe')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
          </div>
        </div>
      </section>
    )
}