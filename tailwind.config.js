/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ["./src/**/*.{html,js}"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'cap1' : "url('/src/asset/images/cap1.png')",
          'paper' : "url('/src/asset/images/paper.png')",
          'bg3' : "url('/src/asset/images/bg3.png')",
        }
      },
    },
    plugins: [require("daisyui")],
  }