import { Github, Linkedin } from "lucide-react";

export function Footer (){
 
    
    return(

        <footer className=" flex justify-between items-center px-12 py-2 container   bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
     
        <div className="  text-gray-600 mt-4 dark:text-gray-400">
          <span className="  text-center text-gray-600 dark:text-gray-400">  {'© 2025 Guilherme Sandroni Dias'}</span>


        </div>
        <div className="flex justify-start gap-4 mt-6 md:justify-center">

              <a href="https://github.com/Guisandroni" className="p-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/guisandroni/" className="p-3 text-purple-600 transition-colors border-2 border-purple-600 rounded-full dark:text-purple-400 hover:bg-purple-600/20">
                <Linkedin size={16} />
              </a>


            </div>
      </footer>
    )   
}