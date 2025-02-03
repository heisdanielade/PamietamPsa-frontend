/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        gray: {
          900: "#0F1112",
          800: "#151718",
          700: "#181A1E",
          400: "#55565C",
        },
        indigo: {
          400: "#927CFF",
          700: "#4D3E97",
        },
        green: {
          400: "#01F0C8",
          700: "#009C80",
        },
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
