import { Github, Linkedin, Mail } from "lucide-react";

interface BuildingFooterProps {
  year: number;
}

export const BuildingFooter = ({ year }: BuildingFooterProps) => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-6 mt-4">
      <div className="text-xs text-main/60 mb-4 md:mb-0 font-mono-space">
        &copy; {year} Dev Portfolio. All systems nominal.
      </div>
      <div className="flex space-x-6">
        <a
          href="#"
          className="text-main/60 hover:text-tate-blue transition duration-300 transform hover:-translate-y-1"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-main/60 hover:text-tate-blue transition duration-300 transform hover:-translate-y-1"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-main/60 hover:text-tate-blue transition duration-300 transform hover:-translate-y-1"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
