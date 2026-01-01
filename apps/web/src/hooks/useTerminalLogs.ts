import { useEffect, useState, useRef } from "react";
import { LOG_MESSAGES, BUILDING_CONFIG } from "@/lib/buildingConfig";

export const useTerminalLogs = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;

    const addNextLog = () => {
      if (currentIndex < LOG_MESSAGES.length) {
        setLogs((prev) => [...prev, LOG_MESSAGES[currentIndex] as string]);
        currentIndex++;

        const delay =
          Math.random() * (BUILDING_CONFIG.logs.maxDelay - BUILDING_CONFIG.logs.minDelay) +
          BUILDING_CONFIG.logs.minDelay;
        setTimeout(addNextLog, delay);
      }
    };

    const startTimeout = setTimeout(addNextLog, BUILDING_CONFIG.logs.initialDelay);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return { logs, logContainerRef };
};
