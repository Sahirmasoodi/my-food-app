/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733', // Warm red for call-to-action buttons, highlights
        'secondary': '#FF8F00', // Warm orange for accents and highlights
        'accent': '#28A745', // Green for freshness, healthy food
        'light': '#FFF5E1', // Light cream for background
        'dark': '#2E2E2E', // Dark for text
        'neutral': '#F4F4F4', // Light gray for neutral backgrounds
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Modern and clean font
        serif: ['Merriweather', 'serif'], // Great for headings and titles
      },
    },
  },
  plugins: [],
}

