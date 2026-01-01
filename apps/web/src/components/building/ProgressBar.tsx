interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <>
      <div className="relative z-10 mb-2 flex justify-between text-xs font-bold text-tate-blue font-mono-space tracking-widest">
        <span>SYSTEM_STATUS :: DEPLOYING</span>
        <span>{Math.floor(progress)}%</span>
      </div>
      <div className="relative z-10 w-full bg-gray-900 rounded-none h-1.5 mb-8 overflow-hidden border border-white/10">
        <div
          className="bg-tate-blue h-full shadow-[0_0_10px_rgba(90,135,197,0.8)] transition-all duration-300 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-2 bg-white/50 blur-[2px]" />
        </div>
      </div>
    </>
  );
};
