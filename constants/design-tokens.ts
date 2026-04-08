/**
 * Design tokens for consistent styling across the application
 */

// Color gradients
export const GRADIENTS = {
  cyan: {
    border: 'linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(6,192,215,0.4), rgba(6,192,215,0.2))',
    text: 'linear-gradient(135deg, rgb(6,192,215), rgb(37,99,235))',
  },
  orange: {
    border: 'linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2))',
    text: 'linear-gradient(135deg, rgb(247,112,36), rgb(234,88,12))',
  },
  cyanToBlue: {
    bg: 'linear-gradient(135deg, rgb(6,192,215), rgb(37,99,235))',
  },
} as const;

// Border styles for gradient cards
export const GRADIENT_BORDER = {
  cyan: {
    background: `linear-gradient(white, white) padding-box, ${GRADIENTS.cyan.border} border-box`,
    border: '2px solid transparent',
  },
  orange: {
    background: `linear-gradient(white, white) padding-box, ${GRADIENTS.orange.border} border-box`,
    border: '2px solid transparent',
  },
  cyanStrong: {
    background: `linear-gradient(white, white) padding-box, ${GRADIENTS.cyan.borderStrong} border-box`,
    border: '3px solid transparent',
  },
  orangeStrong: {
    background: `linear-gradient(white, white) padding-box, ${GRADIENTS.orange.borderStrong} border-box`,
    border: '3px solid transparent',
  },
} as const;

// Spacing scale
export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
} as const;

// Shadow styles
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
} as const;

// Border radius
export const RADIUS = {
  sm: '0.375rem',    // 6px
  md: '0.5rem',      // 8px
  lg: '0.75rem',     // 12px
  xl: '1rem',        // 16px
  '2xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// Z-index layers
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
} as const;
