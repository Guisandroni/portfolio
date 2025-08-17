

export function Navbar() {

   

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container flex flex-col items-center  justify-around px-6 py-4 mx-auto md:flex-row">
                
                <ul className="md:flex px-6 md:space-x-8 mt-4 md:mt-0">
                    <li>
                        <a href="#guisandroni.dev"
                            className="block transitions-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {"guisandroniDev."}
                        </a>
                    </li>
                </ul>
               
                <ul
                    className={` "block" : "hidden"
                        } md:flex md:space-x-8 mt-4 md:mt-0`}
                >   

               
                    <li>
                        <a
                            href="#about"
                            className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {"Sobre"}
                        </a>
                    </li>
                    
                    <li>
                        <a
                            href="#projects"
                            className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                           {"Projetos"}
                        </a>
                    </li>
                </ul>

            
                
            </div>
        </nav>
    );
}