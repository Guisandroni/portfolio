import { Button } from '@/components/ui/button';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link, Navigate } from '@tanstack/react-router';

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  repository: string;
  image: string;
  development?: string;
  tech: string[];
  link?: string;
}

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  repository,
  tech,
  development,
  link
}: ProjectInterface) => {
  return (
    <Card className="flex flex-col overflow-hidden border-0 bg-transparent h-full rounded-none group/card cursor-pointer hover:bg-accent/5 transition-colors">
      {/*<div className="aspect-video w-full overflow-hidden bg-muted relative">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105" />
          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300" />
        </div>*/}
      <Link
        to="/projects/$projectId"
        params={{ projectId: id }}
        className="block h-full no-underline"
      >
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl flex items-center justify-between">
            {title}
            <ArrowRight className="w-5 h-5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 4).map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {t}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground">
                +{tech.length - 4}
              </span>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="gap-2 mt-auto">
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 "
        >
          <Button
            variant="outline"
            size="sm"
            className="w-full hover:cursor-pointer"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
