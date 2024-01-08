/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
    },
    extend: {
      animation: ["motion-safe"],
      colors: {
        primary0Blue: "#203B8A",
        primary1: "#FFFFFF",
        primary2: "#5E6978",
        primary3: "#333333",
        primary4: "#FCFBF4",
        primary5: "#667085",
        primary6: "#28374B",
        secR: "#FFD700",
        secT: "#85868D",
        secH: "#000000",
        sec1: "#0766AD",
        sec2: "#458CC1",
        sec3: "#232F49",
        sec4: "#D9D9D9",
        sec5: "#FFD700",
      },
      fontFamily: {
        body: ['"Open Sans"', "sans"],
        sans: ["Outfit", "sans"],
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        pS: "16px",
        pL: "20px",
        pXL: "24px",
      },
    },
  },
  plugins: [],
};
