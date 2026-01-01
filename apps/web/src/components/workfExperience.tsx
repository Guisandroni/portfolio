import { experiences } from "@/lib/interprise";
import type { WorkExperience as WorkExperienceType } from "@/types";
import { Briefcase, Calendar } from "lucide-react";

export const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="py-32 bg-black border-t border-tate-blue/20"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-archivo uppercase tracking-tight text-white mb-4">
            Work <span className="text-tate-blue">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-tate-blue mb-6"></div>
          <p className="text-main font-mono-space text-sm uppercase tracking-widest max-w-md">
            Professional journey and career milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience: WorkExperienceType, idx: number) => (
            <div
              key={idx}
              className="bg-black border border-tate-blue/20 p-8 hover:border-tate-blue transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="font-mono-space text-tate-blue text-xs">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="text-tate-blue p-4 bg-tate-blue/10 rounded-sm group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Briefcase size={32} />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-archivo uppercase text-white mb-2 tracking-wider group-hover:text-tate-blue transition-colors">
                        {experience.position}
                      </h3>
                      <p className="text-tate-blue font-mono-space text-sm uppercase tracking-widest">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-main font-mono-space text-xs uppercase tracking-wider border border-tate-blue/30 px-3 py-1.5">
                      <Calendar size={14} className="text-tate-blue" />
                      {experience.duration}
                    </div>
                  </div>

                  {experience.description && (
                    <p className="text-sm font-mono-space text-main tracking-wide leading-relaxed opacity-80 group-hover:opacity-100 border-l-2 border-tate-blue/30 pl-4">
                      {experience.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
