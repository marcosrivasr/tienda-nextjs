/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "nav-shadow": "0 0 20px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        banner:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('http://localhost:3001/_next/static/media/banner.8481a878.webp')",
      },
    },
  },
  plugins: [],
};
