import { Link } from '@tanstack/react-router';
import { ModeToggle } from './mode-toggle';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

export default function Header() {
  const links = [{ to: '/', label: 'Home' }] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between  ">
        <nav className="flex-row items-center justify-center text-md text-gray-400 mt-6 italic tracking-wider flex gap-4 font-semibold mb-2">
          <Link to="/">
            <span>guisandroni</span>
          </Link>
        </nav>
        <div className="flex-row items-center justify-center text-md text-gray-400 mt-6 italic tracking-wider flex gap-8 font-semibold mb-2">
          {/*<AnimatedThemeToggler />*/}
          <Link to="/projects">Projects</Link>
          <Link to="/bio">About</Link>
          <Link to="/blog">Posts</Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
