/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Poppins": ['Poppins'],
      "Roboto": ['Roboto'],
    },
    extend: {
      colors: {
        'yt-white': '#f1f1f1',
        'yt-black': '#0f0f0f',
        'yt-gray': '#212121',
        'yt-gray2': '#5a5a5a',
      },
    },
  },
  plugins: [],
}

