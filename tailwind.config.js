/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsla(0, 0%, 7%, 1)",
        pureWhite: "hsla(0, 0%, 100%, 1)",
        yellow: "hsla(47, 89%, 63%, 1)",
        grey: "hsla(0, 0%, 50%, 1)",
      },
    },
  },
  plugins: [],
};
