import Hero from '@/components/hero';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { Link } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent
});

function HomeComponent() {
  return (
    <div className="mt-40">
      <Hero />
    </div>
  );
}
