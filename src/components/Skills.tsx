

export function Skills() {
  const linguagens = ["typescript", "java",  "nodejs", "spring","docker"];
  const frameworks = ["html","css","react","tailwind"];
  const bancoDados = ["mysql","postgresql", "mongodb"];
  return (

    <section id="skills" className="py-22 bg-white dark:bg-[#121212] scroll-mt-20">
      <div className="container px-6 mx-auto flex-1 ">
        <h2 className="mb-6 text-3xl md:text-4xl font-bold py-2 text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
          {'Tecnologias'}
        </h2>

        

        <div
          className="p-4 gap-x-4   "
        >

          
          <span className="font-semibold text-xl ">Backend</span>
          <div className="flex flex-wrap py-2 gap-2">
            {linguagens.map((linguagem, index) => (
              <div key={index}>
                <img
                  src={`https://skillicons.dev/icons?i=${linguagem}`}
                  alt={`Ícone de ${linguagem}`}
                />
              </div>
            ))}
          </div>

          <span className="font-semibold text-xl ">Frontend</span>
          <div className="flex flex-wrap py-2 gap-2">
            {frameworks.map((framework, index) => (
              <img
                key={index}
                src={`https://skillicons.dev/icons?i=${framework}`}
                alt={`Ícone de ${framework}`}
              />
            ))}
          </div>

          <span className="font-semibold text-xl ">Banco de Dados</span>
          <div className="flex flex-wrap py-2 gap-2">
            {bancoDados.map((bancoDados, index) => (
              <div key={index}>
                <img
                  src={`https://skillicons.dev/icons?i=${bancoDados}`}
                  alt={`Ícone de ${bancoDados}`}
                />
              </div>
            ))}
          </div>
        </div>    
   
     </div>
    </section>
  )
}