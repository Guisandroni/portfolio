import ProjectCard, { type ProjectInterface } from '@/components/projectCard';
import { MagicCard } from '@/components/ui/magic-card';
import { projects } from '@/lib/project_data';
import { Link, useNavigate } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="min-h-screen mt-10 px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <MagicCard key={project.id} className="h-full">
              <ProjectCard {...project} />
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
}
