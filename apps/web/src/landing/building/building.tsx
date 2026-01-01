import { useState } from "react";
import { useParticles } from "@/hooks/useParticles";
import { useTerminalLogs } from "@/hooks/useTerminalLogs";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useProgress } from "@/hooks/useProgress";
import { TerminalHeader } from "@/components/building/TerminalHeader";
import { TerminalLogs } from "@/components/building/TerminalLogs";
import { ProgressBar } from "@/components/building/ProgressBar";
import { AnimatedGears } from "@/components/building/AnimatedGears";
import { BuildingFooter } from "@/components/building/BuildingFooter";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function Building() {
  const [year] = useState(new Date().getFullYear());
  const canvasRef = useParticles();
  const { logs, logContainerRef } = useTerminalLogs();
  const typingText = useTypingEffect();
  const progress = useProgress();

  return (
    <div className="relative min-h-screen flex gap-6 items-center justify-center overflow-hidden bg-black text-main selection:bg-tate-blue selection:text-white font-sans">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <Link
        to="/"
        className="absolute top-40 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 border border-tate-blue/50 bg-tate-blue/10 backdrop-blur-sm text-tate-blue font-mono-space text-xs uppercase tracking-widest hover:bg-tate-blue/20 hover:border-tate-blue transition-all duration-300 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
        <span>Back to home</span>
      </Link>
      <main className="relative z-10 w-full max-w-3xl p-4">
        <div className="bg-[#050505]/90 backdrop-blur-md border border-tate-blue/30 rounded-xl shadow-[0_0_20px_rgba(90,135,197,0.1)] hover:shadow-[0_0_30px_rgba(90,135,197,0.2)] transition-shadow duration-300 overflow-hidden">
          <div className="p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-tate-blue/5 to-transparent pointer-events-none animate-scanline z-0" />

            <h1 className="relative z-10 font-archivo text-4xl md:text-6xl font-black mb-3 tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(90,135,197,0.5)]">
              Under{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-tate-blue to-[#3d6597]">
                Construction
              </span>
            </h1>

            <TerminalLogs
              logs={logs}
              typingText={typingText}
              logContainerRef={logContainerRef}
            />

            <ProgressBar progress={progress} />
          </div>
        </div>
      </main>
    </div>
  );
}
