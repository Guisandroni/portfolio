import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Social } from "./Social";
import { Link } from "@tanstack/react-router";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center border-b  border-tate-blue/20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full">
        <div className="order-2 md:order-1 space-y-8 z-10">
          <div className="inline-block relative px-3 py-1 border border-[#5a87c5]/50 bg-[#5a87c5]/10 backdrop-blur-sm">
            <p className="text-[#5a87c5] font-mono-space text-xs font-bold tracking-widest uppercase">
              ● Full Stack Developer
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-archivo uppercase tracking-tighter leading-[0.85] text-white">
              Hey, I'm
            </h1>{" "}
            <img
              alt="profile"
              className="w-10 h-10   rounded-xl object-cover border-2  shadow-lg"
              src="https://github.com/guisandroni.png"
            />
            <h1 className="text-5xl md:text-7xl lg:text-5xl font-archivo uppercase tracking-tighter leading-[0.85] text-white">
              <span className="text-stroke "> Guilherme </span>
            </h1>
          </div>
          <p className="text-[#b8cce4] max-w-lg text-base font-mono-space leading-relaxed tracking-wide border-l-2 border-[#5a87c5] pl-6">
            <span>
              {" "}
              Programming student, looking for an internship in the field of
              software development.
            </span>
            <span className=""> currently based in</span>{" "}
            <span className="font-semibold  ">Ibiúna</span>
            <span className="inline-flex align-middle px-2">🇧🇷</span>
            <span className="font-semibold">Brazil</span>
          </p>

          <Social />

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link
              to="/blog"
              className="px-8 py-4 bg-[#5a87c5] text-black font-archivo uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              See my Blog <ArrowRight size={16} />
            </Link>
            <a
              href="#contato"
              className="px-8 py-4 border border-[#5a87c5] text-[#5a87c5] font-archivo uppercase tracking-widest text-sm hover:bg-[#5a87c5]/10 transition-colors duration-300 flex items-center justify-center"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
            alt="Developer Aesthetic"
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            style={{
              filter: "grayscale(100%) contrast(120%) brightness(60%)",
            }}
          />
          <div className="absolute bottom-10 right-0 rotate-[-90deg] origin-bottom-right text-xs font-mono-space tracking-[0.3em] text-[#5a87c5]">
            SYSTEM_V.2.0 // 2025
          </div>
        </div>
      </div>
    </section>
  );
};
