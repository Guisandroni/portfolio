import { useLanguage } from "../contexts/translation/LanguageContext";


export function Skills() {
  const { t } = useLanguage();
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'React Native', 'Express'];
  // const linguagens =["JavaScript","TypeScript","C","Python","Java","Php"];
  // const frameworks =["React","ReactNative","Next.js","Node.js","Express","Docker"];
  // const bancoDados=["SQLite","MySql","MongoDB"];
  return (

    <section id="skills" className="py-32 bg-white dark:bg-[#121212]">
      <div className="container px-6 mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
          {t('skills')}
        </h2>
        {/* <p className="text-center text-xl mb-8 font-bold bg-clip-text ">Tecnologias com as quais utilizo ou já tive contanto no meio acadêmico ou projetos pessoais</p> */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {skills.map((skills) => (


            <div
              key={skills}
              className="p-6 text-center bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-purple-100 dark:border-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >

              <h3 className="text-xl font-medium">{skills}</h3>
            </div>

          ))}
        </div>

       
       {/* <div className="p-4 rounded-2xl shadow-white bg-gray-800">

       <h1 className="flex justify-center align-middle mb-10 font-bold text-xl">Frameworks</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

{frameworks.map((frameworks) => (


  <div
    key={frameworks}
    className="p-6 text-center bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-purple-100 dark:border-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
  >

    <h3 className="text-xl font-medium">{frameworks}</h3>
  </div>

))}
</div>
       </div> */}

      </div>
    </section>
  )
}