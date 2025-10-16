/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(0.24 0.09 253.5)',
        accent: 'oklch(0.69 0.18 50.8)',
        background: 'oklch(0.96 0.002 264.5)',
        foreground: 'oklch(1 0 0)',
        textPrimary: 'oklch(0.17 0.01 264.5)',
        textSecondary: 'oklch(0.51 0.01 264.5)',
        borderColor: 'oklch(0.85 0.005 264.5)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
