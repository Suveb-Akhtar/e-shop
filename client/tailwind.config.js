/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      },
      boxShadow: {
        custom: "0 5px 15px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
