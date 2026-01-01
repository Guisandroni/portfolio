import { useEffect, useState } from "react";
import { BUILDING_CONFIG } from "@/lib/buildingConfig";

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = BUILDING_CONFIG.progress.target;
    let currentProgress = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const updateProgress = () => {
      if (currentProgress < targetProgress) {
        const inc = Math.random() * BUILDING_CONFIG.progress.increment;
        currentProgress = Math.min(currentProgress + inc, targetProgress);
        setProgress(currentProgress);

        if (currentProgress < targetProgress) {
          const delay =
            Math.random() *
              (BUILDING_CONFIG.progress.maxDelay - BUILDING_CONFIG.progress.minDelay) +
            BUILDING_CONFIG.progress.minDelay;
          timeoutId = setTimeout(updateProgress, delay);
        }
      }
    };

    timeoutId = setTimeout(updateProgress, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return progress;
};
