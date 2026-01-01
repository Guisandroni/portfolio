export const TerminalHeader = () => {
  return (
    <div className="bg-black/80 px-4 py-3 flex items-center justify-between border-b border-tate-blue/20">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition cursor-pointer" />
      </div>
      <div className="font-mono-space text-xs text-tate-blue/70 font-bold tracking-widest">
        DEV_ENV :: PORTFOLIO_BUILD
      </div>
      <div className="font-mono-space text-xs text-main/60">v2.0.0-react</div>
    </div>
  );
};
