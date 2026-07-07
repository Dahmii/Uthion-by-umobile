export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141416',
          soft: '#3a3a40',
          muted: '#6b6b73',
        },
        accent: {
          DEFAULT: '#3300ff',
          soft: '#4d2bff',
        },
        paper: '#f6f5f2',
        stone: '#eceae4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}
