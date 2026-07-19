/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#0f1526',
        },
        brand: {
          50: '#eefdf5',
          100: '#d2fbe3',
          200: '#a3f7c5',
          300: '#6eeba3',
          400: '#39dd82',
          500: '#16c26a',
          600: '#0da058',
          700: '#0c8249',
          800: '#0f673d',
          900: '#105434',
        },
        accent: {
          300: '#8effc4',
          400: '#5dffab',
          500: '#22ff88',
          600: '#0fe473',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(22,194,106,0.22), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,255,136,0.14), transparent 45%)',
      },
    },
  },
  plugins: [],
};
