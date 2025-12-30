import Hero from '@/landing/hero/NeverSee';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { Link } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';
import Portfolio from '@/landing/profile/profile';

export const Route = createFileRoute('/')({
  component: HomeComponent
});

function HomeComponent() {
  return <Portfolio />;
}
