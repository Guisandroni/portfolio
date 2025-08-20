import { useState } from "react";
import { Menu } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container flex flex-wrap items-center justify-between px-6 py-4 mx-auto">
                <a href="#guisandroni.dev" className="text-lg font-bold">
                    {"guisandroniDev."}
                </a>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu size={24} />
                </button>

                <ul
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:items-center md:space-x-8 mt-4 md:mt-0 w-full md:w-auto`}
                >
                    <li>
                        <a
                            href="#about"
                            className="block py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {"Sobre"}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="block py-2 transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {"Projetos"}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}