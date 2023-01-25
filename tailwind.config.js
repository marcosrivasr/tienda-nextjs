/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nav-shadow": "0 0 20px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
