import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/project_data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects/$projectName")({
  component: ProjectDetailComponent,
});

function ProjectDetailComponent() {
  const { projectName } = Route.useParams();
  const project = projects.find((p) => p.id === projectName);

  if (!project) {
    return (
      <div className="container mx-auto min-h-screen bg-black text-main font-sans selection:bg-tate-blue selection:text-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-32">
            <h1 className="text-4xl md:text-6xl font-archivo uppercase tracking-tighter text-white mb-6">
              Project Not Found
            </h1>
            <p className="text-main font-mono-space text-sm mb-8 max-w-md mx-auto">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-tate-blue/50 text-tate-blue font-archivo uppercase tracking-widest text-sm hover:bg-tate-blue/10 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen bg-black text-main font-sans selection:bg-tate-blue selection:text-black">
      <div className="max-w-6xl mx-auto px-6">
        <section className="py-24 border-b border-tate-blue/20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-tate-blue font-mono-space text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="space-y-6">
            <div className="inline-block relative px-3 py-1 border border-tate-blue/50 bg-tate-blue/10 backdrop-blur-sm">
              <p className="text-tate-blue font-mono-space text-xs font-bold tracking-widest uppercase">
                ● {project.tech[0]} Project
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-archivo uppercase tracking-tighter leading-[0.85] text-white">
              {project.title}
            </h1>

            <p className="text-main max-w-3xl text-base font-mono-space leading-relaxed tracking-wide border-l-2 border-tate-blue pl-6">
              {project.description}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-24">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <div className="flex items-end gap-4 mb-8 border-b border-tate-blue/30 pb-4">
                <h2 className="text-3xl md:text-4xl font-archivo uppercase tracking-tighter text-white">
                  Objective
                </h2>
              </div>
              <div className="bg-black border border-tate-blue/20 p-8 hover:border-tate-blue transition-all duration-300">
                <p className="text-main font-mono-space text-sm leading-relaxed tracking-wide">
                  {project.description}
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-end gap-4 mb-8 border-b border-tate-blue/30 pb-4">
                <h2 className="text-3xl md:text-4xl font-archivo uppercase tracking-tighter text-white">
                  Development
                  <br />
                  <span className="text-tate-blue">Process</span>
                </h2>
              </div>
              <div className="bg-black border border-tate-blue/20 p-8 hover:border-tate-blue transition-all duration-300">
                <p className="text-main font-mono-space text-sm leading-relaxed tracking-wide">
                  {project.development}
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-end gap-4 mb-8 border-b border-tate-blue/30 pb-4">
                <h2 className="text-3xl md:text-4xl font-archivo uppercase tracking-tighter text-white">
                  Project
                  <br />
                  <span className="text-tate-blue">Gallery</span>
                </h2>
              </div>
              <div className="bg-black border border-tate-blue/20 p-2 hover:border-tate-blue transition-all duration-300">
                <div className="w-full aspect-video relative overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(100%) contrast(110%)" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 border-t border-tate-blue/30">
                    <span className="font-mono-space text-tate-blue text-xs tracking-widest uppercase">
                      Preview Mode
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <section>
              <div className="flex items-end gap-4 mb-6 border-b border-tate-blue/30 pb-4">
                <h3 className="text-xl font-archivo uppercase tracking-tighter text-white">
                  Tech Stack
                </h3>
              </div>
              <div className="bg-black border border-tate-blue/20 p-6 hover:border-tate-blue transition-all duration-300">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono-space uppercase tracking-wider border border-tate-blue/30 text-tate-blue hover:bg-tate-blue/10 hover:border-tate-blue transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-end gap-4 mb-6 border-b border-tate-blue/30 pb-4">
                <h3 className="text-xl font-archivo uppercase tracking-tighter text-white">
                  Links
                </h3>
              </div>
              <div className="bg-black border border-tate-blue/20 p-6 hover:border-tate-blue transition-all duration-300 space-y-3">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 border border-tate-blue/50 text-tate-blue font-archivo uppercase tracking-widest text-xs hover:bg-tate-blue hover:text-black transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 bg-tate-blue text-black font-archivo uppercase tracking-widest text-xs hover:bg-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
