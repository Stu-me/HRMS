// Standard color and transparency constants with glassmorphic design

export const COLORS = {
  // Primary backgrounds
  bg: {
    dark: '#1a1f2e',
    darker: '#0f1419',
    darkGradient: 'linear-gradient(135deg, #1a1f2e 0%, #2d3748 100%)',
    card: '#1e293b',
    sidebar: 'linear-gradient(180deg, #0f1419 0%, #1a2543 100%)',
    // Glassmorphic backgrounds with blur
    glass: 'rgba(26, 31, 46, 0.7)',
    glassLight: 'rgba(45, 55, 72, 0.6)',
  },

  // Text colors
  text: {
    primary: '#f1f5f9',
    secondary: '#cbd5e1',
    muted: '#94a3b8',
    accent: '#60a5fa',
    accentLight: '#93c5fd',
  },

  // Status colors
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#60a5fa',
  },

  // Borders
  border: {
    light: '#334155',
    lighter: '#475569',
    glow: 'rgba(96, 165, 250, 0.2)',
  },
};

// Standard transparency/opacity levels
export const TRANSPARENCY = {
  // Subtle - for shadows, very light overlays, delicate UI elements
  subtle: 'rgba(0, 0, 0, 0.06)',        // 6% opacity
  subtleWhite: 'rgba(255, 255, 255, 0.05)',

  // Soft - for secondary backgrounds, hover states, gentle overlays
  soft: 'rgba(0, 0, 0, 0.12)',          // 12% opacity
  softWhite: 'rgba(255, 255, 255, 0.08)',

  // Medium - for card backgrounds, light overlays, separators
  medium: 'rgba(0, 0, 0, 0.25)',        // 25% opacity
  mediumWhite: 'rgba(255, 255, 255, 0.12)',

  // Strong - for prominent cards, darker overlays
  strong: 'rgba(0, 0, 0, 0.40)',        // 40% opacity
  strongWhite: 'rgba(255, 255, 255, 0.18)',

  // Dark - for primary backgrounds, darkest overlays
  dark: 'rgba(0, 0, 0, 0.65)',          // 65% opacity
  darkWhite: 'rgba(255, 255, 255, 0.25)',
};

// Common style patterns using transparency and blur
export const STYLES = {
  // Shadow patterns with consistent transparency
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
  shadowMd: '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
  shadowLg: '0 8px 24px 0 rgba(0, 0, 0, 0.16)',
  shadowXl: '0 12px 32px 0 rgba(0, 0, 0, 0.20)',

  // Glassmorphic blur effect
  glassMorphism: {
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },

  // Card base with blur
  cardGlass: {
    background: COLORS.bg.glass,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: `1px solid ${COLORS.border.light}`,
    borderRadius: 12,
    padding: '1.5rem',
    color: COLORS.text.primary,
    transition: 'all 0.3s ease',
  },

  // Form input style with blur
  inputGlass: {
    background: 'rgba(15, 20, 25, 0.8)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: COLORS.text.primary,
    border: `1px solid ${COLORS.border.light}`,
    borderRadius: 8,
    padding: '0.65rem 0.875rem',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
  },

  // Button base style with transitions
  buttonBase: {
    border: 'none',
    borderRadius: 8,
    padding: '0.65rem 1.25rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
};
