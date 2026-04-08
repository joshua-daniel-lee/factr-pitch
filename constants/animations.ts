/**
 * Standardized animation configurations for Framer Motion
 */

// Easing functions
export const EASING = {
  easeOut: 'easeOut',
  easeIn: 'easeIn',
  easeInOut: 'easeInOut',
  linear: 'linear',
} as const;

// Common durations (in seconds)
export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.6,
  verySlow: 0.8,
  float: 4,
} as const;

// Standard animation delays (in seconds)
export const DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
  veryLong: 0.6,
  extraLong: 0.8,
  hero: 1.0,
} as const;

// Fade in from bottom animation
export const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: (delay = 0) => ({
    duration: DURATION.slow,
    delay,
  }),
};

// Fade in from side animations
export const fadeInLeft = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: (delay = 0) => ({
    duration: DURATION.slow,
    delay,
  }),
};

export const fadeInRight = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: (delay = 0) => ({
    duration: DURATION.slow,
    delay,
  }),
};

// Scale animations
export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    scale: { duration: DURATION.verySlow, ease: EASING.easeOut },
    opacity: { duration: DURATION.verySlow, ease: EASING.easeOut },
  },
};

// Floating animation
export const floating = (duration = DURATION.float, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: {
    duration,
    repeat: Infinity,
    ease: EASING.easeInOut,
  },
});

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: DURATION.fast },
};

export const hover3D = {
  rotateY: 5,
  rotateX: -3,
  scale: 1.05,
  transition: { duration: DURATION.fast },
};

// Viewport settings
export const VIEWPORT = {
  once: true,
  amount: 0.3,
} as const;
