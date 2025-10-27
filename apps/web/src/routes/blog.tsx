import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span>In Comming...</span>
    </div>
  );
}
