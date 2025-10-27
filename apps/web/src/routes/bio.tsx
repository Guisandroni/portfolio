import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/bio')({
  component: RouteComponent
});

function RouteComponent() {
  const linguagens = ['typescript', 'javascript', 'java'];
  const frontend = ['html', 'css', 'react', 'tailwind', 'next'];
  const backend = ['nodejs', 'bun', 'elysia', 'express', 'spring'];
  const bd = [
    'sqlite',
    'mysql',
    'postgresql',
    'mongodb',
    'hibernate',
    'prisma'
  ];
  const infra = ['docker', 'linux', 'terraform', 'maven'];

  return (
    <div className="container mx-auto flex flex-col mt-10 gap-6 items-start justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <span className="text-gray-200 dark:text-gray-300 font-semibold">
          My name is Guilherme, a Full Stack Developer with experience
          developing web and mobile applications, capable of working across all
          stages of a project, from the front end to the back end. I'm
          passionate about solving complex problems through simple, efficient,
          and elegant solutions. I'm currently studying Systems Analysis and
          Development at Fatec Sorocaba, where I continue to expand my knowledge
          and explore new technologies that can add value to the projects I work
          on. I'm always seeking new challenges and opportunities to learn and
          grow professionally. I believe that collaboration and knowledge
          sharing are fundamental to the success of any project.
        </span>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>

        <div className="grid grid-cols-8 gap-4 ">
          {linguagens.map((linguagens, index) => (
            <div key={index}>
              <img
                src={`https://skillicons.dev/icons?i=${linguagens}`}
                alt={`Ícone de ${linguagens}`}
              />
            </div>
          ))}

          {frontend.map((frontend, index) => (
            <img
              key={index}
              src={`https://skillicons.dev/icons?i=${frontend}`}
              alt={`Ícone de ${frontend}`}
            />
          ))}

          {bd.map((bd, index) => (
            <div key={index}>
              <img
                src={`https://skillicons.dev/icons?i=${bd}`}
                alt={`Ícone de ${bd}`}
              />
            </div>
          ))}

          {infra.map((infra, index) => (
            <div key={index}>
              <img
                src={`https://skillicons.dev/icons?i=${infra}`}
                alt={`Ícone de ${infra}`}
              />
            </div>
          ))}

          {backend.map((backend, index) => (
            <div key={index}>
              <img
                src={`https://skillicons.dev/icons?i=${backend}`}
                alt={`Ícone de ${backend}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
