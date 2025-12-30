

interface NavBarProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: NavBarProps) {
  return (
    <nav
      className={`top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-4 border-b border-tate-blue/20' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase font-mono-space text-white/90">
          {['Projetos', 'Skills', 'Sobre', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link hover:text-tate-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden text-white font-archivo text-sm">MENU</div>

        <div className="text-2xl md:text-3xl font-archivo tracking-tighter uppercase text-tate-blue  mix-blend-screen">
          GUISANDRONI
        </div>
      </div>
    </nav>
  );
}
