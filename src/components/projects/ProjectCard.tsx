import { Github, Link } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repository: string;
  link?: string;
  tech?: Array<string>;
}



export function ProjectCard({ title, description, image, repository, link, tech }: ProjectCardProps) {
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
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            {tech?.map((tech?) => (
              <button className="bg-purple-600 rounded-4xl py-1 px-3 border-2 border-neutral-200">
                <p className="font-bold">{tech}</p>
              </button>

            ))}
          </div>
          <div className="flex gap-6">
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <Github size={20} />
              {'repository'}
            </a>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                <Link size={20} />
                {'link'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
