import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        cef: {
          canvas: "#EEF1F2",
          surface: "#FFFDF7",
          surfaceAlt: "#E8ECEE",
          navy: "#0D1524",
          navy2: "#162234",
          ink: "#141E2D",
          slate: "#566271",
          muted: "#74808E",
          line: "#CBD3D7",
          gold: "#C4A052",
          gold2: "#8B6728",
          green: "#2E6F59",
          green2: "#1F4F40",
          amber: "#B97822",
          amber2: "#7B4E12",
          red: "#A23D35",
          red2: "#792B26",
          blueGrey: "#4D6476",
          blueGrey2: "#314656",
          white: "#FFFFFF"
        }
      },
      borderRadius: {
        panel: "10px",
        control: "5px"
      },
      boxShadow: {
        panel: "0 18px 40px rgba(13, 21, 36, 0.1)",
        lift: "0 10px 22px rgba(13, 21, 36, 0.07)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Aptos",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
