import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
    const { t } = useLanguage();
    return (

        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container flex flex-col justify-center px-10 py-10 mx-auto ">
                <ul className="flex justify-center space-x-8">
                    <li><a href="#about" className="transition-colors hover:text-purple-600 dark:hover:text-purple-400">{t('about')}</a></li>
                    <li><a href="#skills" className="transition-colors hover:text-purple-600 dark:hover:text-purple-400">{t('skills')}</a></li>
                    <li><a href="#projects" className="transition-colors hover:text-purple-600 dark:hover:text-purple-400">{t('projects')}</a></li>
                </ul>
                <ThemeToggle />
                <LanguageToggle />
            </div>


        </nav>
    )
}