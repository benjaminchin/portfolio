/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#63696a",
          "secondary": "#464746",
          "accent": "#e5e4df",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#1a8ab7",
          "success": "#93c247",
          "warning": "#ffac00",
            "error": "#ea4221",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily : {
        "inter": "Inter"
      }
    },
  },
  plugins: [require("daisyui")],
}
