import { useEffect, useState } from "react";
import { TYPING_PHRASES, BUILDING_CONFIG } from "@/lib/buildingConfig";

export const useTypingEffect = () => {
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentPhrase = TYPING_PHRASES[phraseIndex] as string;
      let typeSpeed = BUILDING_CONFIG.typing.typeSpeed;

      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = BUILDING_CONFIG.typing.deleteSpeed;
      } else {
        setTypingText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = BUILDING_CONFIG.typing.typeSpeed;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = BUILDING_CONFIG.typing.pauseAtEnd;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length;
        typeSpeed = BUILDING_CONFIG.typing.pauseBeforeNext;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, BUILDING_CONFIG.typing.initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return typingText;
};
