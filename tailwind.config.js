/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#02000e",
        "custom-blue": "#09C3FE",
      },
    },
  },
  plugins: [],
};
