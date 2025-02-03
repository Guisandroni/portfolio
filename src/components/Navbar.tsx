import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container flex flex-col md:flex-row items-center justify-center px-6 py-6 mx-auto">
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

               
                <ul
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex md:space-x-8 mt-4 md:mt-0`}
                >
                    <li>
                        <a
                            href="#about"
                            className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {t("about")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {t("skills")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            {t("projects")}
                        </a>
                    </li>
                </ul>

            
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
}