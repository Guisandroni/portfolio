export const LOG_MESSAGES = [
  "Initializing kernel...",
  "Loading CSS modules...",
  "Connecting to blog database...",
  "Compiling React components...",
  "Optimizing assets...",
  "System integrity check: PASSED",
  "Current Status: UNDER CONSTRUCTION",
] as const;

export const TYPING_PHRASES = [
  "npm run build:blog",
  "git commit -m 'feat: new portfolio'",
  "crafting digital experience...",
  "almost there...",
] as const;

export const BUILDING_CONFIG = {
  progress: {
    target: 85,
    minDelay: 200,
    maxDelay: 1000,
    increment: 4,
  },
  typing: {
    typeSpeed: 90,
    deleteSpeed: 40,
    pauseAtEnd: 2500,
    pauseBeforeNext: 500,
    initialDelay: 1500,
  },
  logs: {
    initialDelay: 800,
    minDelay: 400,
    maxDelay: 1200,
  },
  particles: {
    maxCount: 80,
    divisor: 15,
    connectionDistance: 120,
    color: {
      r: 90,
      g: 135,
      b: 197,
    },
  },
} as const;
