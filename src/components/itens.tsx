
import { ProjectCard } from "./projects/ProjectCard";
import { projects } from "../data/projects";

export function Itens() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          repository={project.repository}
          link={project.link}
          tech={project.tech}
        />
      ))}
    </div>
  );
}