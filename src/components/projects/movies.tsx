import { Github } from "lucide-react";
import { useLanguage } from "../../contexts/translation/LanguageContext";

export function Movies(){
            const { t } = useLanguage();
    
    return(

        <div
       
        className="bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/20 hover:scale-105 transition-all duration-300"
      >
        <img
          src="https://github.com/Guisandroni/Page-Movie/raw/main/docs/moviehome.png"
          alt={`Project `}
          className="object-cover  justify-self-center"
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold">{t('Movie')}</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{t('DescriptionMovie')}</p>
          <div className="flex gap-4">
         
            <a
              href="https://github.com/Guisandroni/Page-Movie"
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Github  href="https://github.com/Guisandroni/Page-Movie" size={20} />
              {t('repository')}
            </a>
          </div>
        </div>
      </div>
    )
}