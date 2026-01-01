import { ArrowRight, Github, Linkedin, Mail, X } from "lucide-react";
import crcPdf from "@/assets/curriculum/crcGuilherme.pdf";
import { Social } from "./Social";

export const Footer = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = crcPdf;
    link.download = "crcGuilherme.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer
      id="contato"
      className="bg-black pt-24 pb-12 border-t border-tate-blue/20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-tate-blue/20 pb-12 mb-12">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-8xl font-archivo uppercase tracking-tighter text-white">
              Let's <br /> Talk
            </h2>
          </div>

          <div className="w-full md:w-1/3">
            <p className="text-main font-mono-space text-sm mb-6 leading-relaxed">
              Available to discuss projects, freelance work, and opportunities.
            </p>
            <a
              href="mailto:email@exemplo.com"
              className="inline-flex items-center gap-3 text-tate-blue font-archivo text-lg uppercase tracking-widest hover:text-white transition-colors"
            >
              Send Email <ArrowRight className="animate-pulse" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-6">
          <Social />

          <div className="text-center md:text-right">
            <p className="text-[10px] text-main font-mono-space uppercase tracking-widest opacity-60">
              © 2025 Guisandroni.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
