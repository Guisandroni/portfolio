import { useLanguage } from "../contexts/LanguageContext";


export function Skills(){
      const { t } = useLanguage();
      const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker'];

    return(

        <section id="skills" className="py-32 bg-white dark:bg-[#121212]">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            {t('skills')}
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-6 text-center bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-purple-100 dark:border-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <h3 className="text-xl font-medium">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}