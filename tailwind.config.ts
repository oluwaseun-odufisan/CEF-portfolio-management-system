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
          canvas: "#F5F8FC",
          surface: "#FFFFFF",
          surfaceAlt: "#EEF4FA",
          navy: "#312783",
          navy2: "#251D66",
          ink: "#181A34",
          slate: "#5B6278",
          muted: "#7B8295",
          line: "#DCE3F0",
          gold: "#36A9E1",
          gold2: "#187DAF",
          green: "#2E6F59",
          green2: "#1F4F40",
          amber: "#B97822",
          amber2: "#7B4E12",
          red: "#A23D35",
          red2: "#792B26",
          blueGrey: "#647196",
          blueGrey2: "#38405F",
          white: "#FFFFFF"
        }
      },
      borderRadius: {
        panel: "10px",
        control: "5px"
      },
      boxShadow: {
        panel: "0 18px 40px rgba(49, 39, 131, 0.12)",
        lift: "0 10px 22px rgba(49, 39, 131, 0.08)"
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
