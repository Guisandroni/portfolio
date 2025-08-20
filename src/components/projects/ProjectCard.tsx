import { Github, Link } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repository: string;
  link?: string;  
}

export function ProjectCard({ title, description, image, repository, link }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900/20 hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt={`Project ${title}`}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex gap-4">
          <a
            href={repository}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <Github size={20} />
            {'repository'}
          </a>
          {link && (
            <a
              href={link}
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Link size={20} />
              {'link'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
