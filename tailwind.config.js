/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' for system preference
  content: ["./src/**/*.{html,js,jsx,ts,typescript}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-bg-primary)",
        textPrimary: "var(--color-text)",
        secondary: "var(--color-bg-secondary)",
        textSecondary: "var(--color-text-secondary)",
        tertiary: "var(--color-bg-tertiary)",
      },
      screens: {
        mobile: "298px",
        customScreen: "931px",
      },
    },
  },
  plugins: [],
};
