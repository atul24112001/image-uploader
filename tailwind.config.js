/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "background-primary": "rgb(var(--background-primary))",
        "background-secondary": "rgb(var(--background-secondary))",
        "primary": "rgb(var(--primary))",
        "secondary": "rgb(var(--secondary))",
        "tart": "rgb(var(--tart))",
        "main": "var(--main)"
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
}
