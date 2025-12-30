import type { Skill } from '@/types';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Terminal,
  Code,
  Cpu,
  ExternalLink
} from 'lucide-react';

const skills: Skill[] = [
 {
   title: 'FRONTEND',
   icon: <Terminal size={32} />,
   desc: 'REACT / NEXT.JS / TAILWIND'
 },
 { title: 'BACKEND', 
 icon: <Code size={32} />,
 desc: 'NODE / PYTHON / GO' 
 },
 { title: 'SYSTEMS',
 icon: <Cpu size={32} />,
 desc: 'DOCKER / AWS / LINUX' 
 }
];

export const SkillIssue = () =>{
  
  return(
    
    <section
      id="skills"
      className="py-32 bg-zinc-950 border-t border-tate-blue/20"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-archivo uppercase tracking-tight text-white mb-4">
            Tech <span className="text-tate-blue">Capabilities</span>
          </h2>
          <div className="h-1 w-20 bg-tate-blue mb-6"></div>
          <p className="text-main font-mono-space text-sm uppercase tracking-widest max-w-md">
            Ferramentas modernas para soluções complexas.
          </p>
        </div>

        <div className="grid grid-co md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-black border border-tate-blue/20 p-10 flex flex-col items-start hover:border-tate-blue transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="font-mono-space text-tate-blue text-xs">
                  0{idx + 1}
                </span>
              </div>

              <div className="mb-6 text-tate-blue p-3 bg-tate-blue/10 rounded-sm group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-archivo uppercase text-white mb-4 tracking-wider group-hover:text-tate-blue transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm font-mono-space text-main tracking-wide leading-relaxed opacity-80 group-hover:opacity-100">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}