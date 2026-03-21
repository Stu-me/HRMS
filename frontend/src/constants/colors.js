// Standard color and transparency constants with glassmorphic design

export const COLORS = {
  // Primary backgrounds
  bg: {
    dark: '#0f111a',
    darker: '#0b0f1a',
    darkGradient: 'linear-gradient(135deg, #0f111a 0%, #141a2a 100%)',
    card: '#151a24',
    sidebar: 'linear-gradient(180deg, #0c1220 0%, #0e162b 50%, #0c1220 100%)',
    // Glassmorphic backgrounds with blur
    glass: 'rgba(255, 255, 255, 0.08)',
    glassLight: 'rgba(255, 255, 255, 0.12)',
  },

  // Text colors
  text: {
    primary: '#e7ecf3',
    secondary: '#c2c8d5',
    muted: '#9ca3b5',
    accent: '#3ea6ff',
    accentLight: '#7ed0ff',
  },

  // Status colors
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3ea6ff',
  },

  // Borders
  border: {
    light: '#1f2635',
    lighter: '#273040',
    glow: 'rgba(62, 166, 255, 0.28)',
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
    background: 'rgba(17, 22, 36, 0.9)',
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
