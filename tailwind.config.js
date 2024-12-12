/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      body: ["Roboto", "Arial", "Helvetica"],
      highlight: ["Bebas Neue", "Lucida Grande", "Tahoma"],
    },

    extend: {
      fontSize: {
        base: ["16px", "24px"],
        "2xl": ["24px", "30px"],
        "4xl": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "1.25px",
          },
        ],
        "6xl": [
          "52px",
          {
            lineHeight: "62px",
            letterSpacing: "1.25px",
          },
        ],
      },
      colors: {
        "main-blue": "#2649f3",
        "main-blue-light": "#5670fa",
        "main-blue-secondary-light": "#5F80FD",
        "main-blue-100": "#e2e5ed",
        "main-blue-section-secondary": "#283FF8",
        "main-purple": "#7861f7",
        "main-turquoise": "#1ce6fd",
        "neutral-0": "#ffffff",
        "neutral-1": "#EEF0F4",
        "neutral-2": "#E2E5EE",
        "neutral-3": "#C9CFE1",
        "neutral-4": "#9DA4BA",
        "neutral-5": "#7E859D",
        "neutral-6": "#5D647A",
        "neutral-7": "#3b4256",
        "neutral-8": "#1F2436",
        "neutral-9": "#080e20",
      },
    },
  },
  plugins: [],
}
