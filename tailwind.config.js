/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/pages/assets/images/bg.png')",
      },
      fontFamily: {
        sans: ["Sequel Sans", "system-ui"],
      },
    },
  },
  plugins: [],
};
