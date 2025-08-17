import { useLanguage } from "../contexts/translation/LanguageContext";
import { Itens } from "./itens";


export function Projects(){
      const { t } = useLanguage();
    
    return(

        <section id="projects" className="py-32 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center  bg-gradient-to-r text-purple-600 bg-clip-text">
            {t('projects')}
          </h2>

          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3,4,5,6].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/20 hover:scale-105 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt={`Project ${project}`}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{t('projectTitle')}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{t('projectDescription')}</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <ExternalLink size={20} className="transition-transform transform group-hover:rotate-45"/>
                      {t('liveDemo')}
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <Github size={20} />
                      {t('repository')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
  <Itens/>
  
        </div>
      </section>
    )
}