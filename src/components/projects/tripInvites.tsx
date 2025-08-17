import {  Github } from "lucide-react";
import { useLanguage } from "../../contexts/translation/LanguageContext";

export function TripInvites(){
            const { t } = useLanguage();
    
    return(

        <div
       
        className="bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/20 hover:scale-105 transition-all duration-300"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1684407617181-275e50374e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D"
          alt={`Project `}
          className="object-cover w-full h-48"
        />
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold">{t('TripInvites')}</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">{t('DescriptionTripInvites')}</p>
          <div className="flex gap-4">
           
            <a
              href="https://github.com/Guisandroni/TripInvites"
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Github   href="https://github.com/Guisandroni/TripInvites" size={20} />
              {t('repository')}
            </a>
          </div>
        </div>
      </div>
    )
}