const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Selectel color scheme
        'data-blue': {
          DEFAULT: '#092433',
          50: '#f0f4f7',
          100: '#d9e4eb',
          200: '#b3c9d7',
          300: '#8daec3',
          400: '#6793af',
          500: '#41789b',
          600: '#335d7c',
          700: '#25445d',
          800: '#172b3e',
          900: '#092433',
        },
        'signal-red': '#eb4247',
        'green': {
          400: '#0ab476',
        },
        'yellow': {
          300: '#ebab0a',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': '44px',
        'h1-desktop': '72px',
        'h2-mobile': '36px',
        'h2-desktop': '64px',
        'h3-mobile': '24px',
        'h3-desktop': '44px',
      },
      letterSpacing: {
        'tight-xl': '-0.03em',
      },
      lineHeight: {
        '160': '160%',
      },
      borderRadius: {
        'selectel': '8px',
        'selectel-lg': '16px',
      },
      boxShadow: {
        'selectel': '0 4px 12px rgba(0,0,0,0.1)',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
};

module.exports = config;
