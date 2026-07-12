/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00e664',
        dark: '#0a0a0a',
        gold: '#D4A843',
      },
      fontFamily: {
        syne: ['Space Grotesk', 'sans-serif'],
        dm: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,230,100,0.4)',
        'neon-lg': '0 0 40px rgba(0,230,100,0.25)',
        gold: '0 0 20px rgba(212,168,67,0.4)',
      },
    },
  },
  plugins: [],
}
