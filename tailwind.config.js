/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        flower: "url('/public/images/flower-cover.jpg')",
      },
    },
  },
  plugins: [],
};
