/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarySt: "#2561e7",
        primarySd: "#0c1f4a",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins:[],
}

