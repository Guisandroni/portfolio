interface TerminalLogsProps {
  logs: string[];
  typingText: string;
  logContainerRef: React.RefObject<HTMLDivElement | null>;
}

export const TerminalLogs = ({ logs, typingText, logContainerRef }: TerminalLogsProps) => {
  return (
    <div className="relative z-10 bg-black rounded-lg p-5 font-mono-space text-xs md:text-sm h-56 overflow-hidden flex flex-col justify-end border border-tate-blue/30 shadow-inner mb-8 group">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10" />

      <div
        ref={logContainerRef}
        className="custom-scrollbar space-y-2 text-main/70 relative z-0 overflow-y-auto max-h-full"
      >
        {logs.map((log, index) => (
          <div key={index} className="animate-fadeIn">
            <span className="text-tate-blue/50 mr-2">&gt;</span>
            {log}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-3 text-tate-blue relative z-0 border-t border-white/5 pt-2 shrink-0">
        <span className="mr-2 font-bold">$</span>
        <span className="text-white">{typingText}</span>
        <span className="animate-blink-cursor bg-tate-blue w-2 h-5 inline-block ml-1 align-middle" />
      </div>
    </div>
  );
};
