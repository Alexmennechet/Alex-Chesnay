const theme = {
  /**
   * Base color palette
   */
  colors: {
    primary: '#007A9A',
    /** alias kept for backward compatibility */
    cyan: '#007A9A',
    background: '#f8f9fa',
    text: '#111827',
    grey100: '#f8f9fa',
    grey200: '#f0f4f8',
    grey500: '#333333',
    grey600: '#555555',
    grey700: '#334155',
    grey800: '#1f2937',
    grey900: '#111827',
    white: '#ffffff'
  },
  /**
   * Spacing scale used for margins and paddings
   */
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3.75rem'
  },
  /**
   * Border radius tokens
   */
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  },
  /**
   * Shadow definitions
   */
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.15)'
  },
  /**
   * Font sizes for headings and body text
   */
  fontSizes: {
    h1: '72px',
    h2: '48px',
    h3: '32px',
    body: '16px'
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Raleway', sans-serif"
  }
};

export default theme;
