import { useLanguage } from "../contexts/LanguageContext";

export function Footer (){
      const { t } = useLanguage();
    
    return(

        <footer className="py-8 bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
        <div className="container px-6 mx-auto text-center text-gray-600 dark:text-gray-400">
          {t('copyright')}
        </div>
      </footer>
    )
}