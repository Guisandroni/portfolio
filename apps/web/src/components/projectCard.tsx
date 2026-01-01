import { Button } from "@/components/ui/button";
import { projects } from "@/lib/otherProjec";
import type { Project, Skill } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Terminal,
  Code,
  Cpu,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

interface ProjectsProps {
  data: Project[];
}

export const ProjectCard = ({ data }: ProjectsProps) => {
  const [hoveredProject, setHoveredProject] = useState<number>(0);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 z-10">
            <div className="flex items-end gap-4 mb-16 border-b border-[#5a87c5]/30 pb-6">
              <h2 className="text-4xl md:text-6xl font-archivo uppercase tracking-tighter text-white">
                Selected
                <br />
                <span className="text-[#5a87c5]">Projects</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {data.map((project, index) => (
                <Link
                  key={index}
                  to="/projects/$projectName"
                  params={{ projectName: project.link }}
                >
                  <div
                    onMouseEnter={() => setHoveredProject(index)}
                    className={`group border-b border-[#5a87c5]/20 py-8 cursor-pointer transition-all duration-300 hover:pl-4 hover:border-[#5a87c5] ${hoveredProject === index ? "bg-[#5a87c5]/5" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-6">
                        <span className="font-mono-space text-[#5a87c5] text-sm font-bold">
                          0{index + 1}
                        </span>
                        <h3
                          className={`text-2xl md:text-4xl font-archivo uppercase transition-colors duration-300 ${hoveredProject === index ? "text-white" : "text-[#b8cce4]"}`}
                        >
                          {project.name}
                        </h3>
                      </div>
                      <ArrowRight
                        className={`w-6 h-6 text-[#5a87c5] transform transition-all duration-300 ${hoveredProject === index ? "-rotate-45 opacity-100" : "opacity-0"}`}
                      />
                    </div>

                    <div className="flex gap-4 mt-3 pl-10">
                      <span className="text-xs font-mono-space text-[#b8cce4]/80 uppercase tracking-wider border border-[#5a87c5]/30 px-2 py-1 rounded-sm">
                        {project.year}
                      </span>
                      <span className="text-xs font-mono-space text-[#b8cce4]/80 uppercase tracking-wider border border-[#5a87c5]/30 px-2 py-1 rounded-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32 w-full aspect-[4/5] border border-[#5a87c5]/30 p-2 bg-[#5a87c5]/5">
              <div className="w-full h-full relative overflow-hidden bg-black">
                {data.map((project, index) => (
                  <img
                    key={index}
                    src={project.image}
                    alt={project.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hoveredProject === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    style={{ filter: "grayscale(100%) contrast(110%)" }}
                  />
                ))}

                <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-6 border-t border-[#5a87c5]/30">
                  <div className="flex justify-between items-center">
                    <span className="font-mono-space text-[#5a87c5] text-xs tracking-widest uppercase">
                      Preview Mode
                    </span>
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#5a87c5]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#5a87c5]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
