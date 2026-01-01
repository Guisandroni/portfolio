import { ArrowRight, Github, Linkedin, Mail, X } from "lucide-react";
import crcPdf from "@/assets/curriculum/crcGuilherme.pdf";

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
          <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-8">
            <Github className="w-5 h-5 text-main hover:text-tate-blue hover:scale-110 cursor-pointer transition-all shrink-0" />
            <Linkedin className="w-5 h-5 text-main hover:text-tate-blue hover:scale-110 cursor-pointer transition-all shrink-0" />
            <a
              className="flex items-center justify-center w-5 h-5 text-main hover:text-tate-blue hover:scale-110 cursor-pointer transition-all shrink-0"
              href="https://x.com/guisandroni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 1200 1227"
                className="w-5 h-5"
              >
                <title>X (formerly Twitter)</title>
                <path
                  fill="currentColor"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                ></path>
              </svg>
            </a>

            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center w-5 h-5 text-main hover:text-tate-blue hover:scale-110 cursor-pointer transition-all shrink-0"
              aria-label="Download CV"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M19 15V21M19 21L17 19M19 21L21 19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H14M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <Mail className="w-5 h-5 text-main hover:text-tate-blue hover:scale-110 cursor-pointer transition-all shrink-0" />
          </div>

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
