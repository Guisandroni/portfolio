import { Itens } from "./itens";


export function Projects(){
    
    return(

        <section id="projects" className="py-32 bg-gray-50 dark:bg-[#1a1a1a]">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center  bg-gradient-to-r text-purple-600 bg-clip-text">
            {'Projetos'}
          </h2>

      
  <Itens/>
  
        </div>
      </section>
    )
}