/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
    extend: {
      animation: ['motion-safe'],
      darkMode: 'class',
      colors: {
        logoColor: "#4190EA",
        darkGray: '#111827',
        navyBlue: '#192841',
        lightGray: "#D1D5DB",
        darkBlue: "#1F2937",
        primary0Blue: "#203B8A",           
        primary1: "#FFFFFF",
        primary2: "#5E6978",
        primary3: "#333333",
        primary4: "#FCFBF4",
        primary5: "#667085",
        primary6: "#28374B",
        primary7: "#000000",
        primary8: "#FCFBF4",
        primary9: "#EAAA00",
        primary10: "#60B342",
        secR: "#FFD700",
        secT: "#85868D",
        secH: "#000000",
        sec1: "#0766AD",
        sec2: "#458CC1",
        sec3: "#232F49",
        sec4: "#D9D9D9",
        sec5: "#eab308",
        sec6: "#54555B",
        sec7: "#25D366",
        sec8: "#FF0000",
        sec9: "#586CA7",
        sec10: "#5E6978",
        secB: "#CED5DB",
        secLB: "#F1F5F9"
      },
      fontFamily: {
        'body': ['"Open Sans"', "sans"],
        'sans': ['Outfit', 'sans'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        pS: "16px",
        pL: "20px",
        pXL: "24px"
      },
    },
  },
  plugins: [],
}

