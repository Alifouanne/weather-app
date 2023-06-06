/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#003459",
        subtitle: "#007EA7",
        backgroundMain: "#FFFFFF",
      },
      fontFamily: {
        main: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
