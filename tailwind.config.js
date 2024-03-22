/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        ShadowBlur: "3px 3px 12px 3px rgba(255,255,255,0.075)"
      },
      colors: {
        theme: {
          DEFAULT: "#FB7C25",
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#ffd7a9',
          '300': '#feba73',
          '400': '#fc913b',
          '500': '#fb7c25',
          '600': '#ec560a',
          '700': '#c33f0b',
          '800': '#9b3311',
          '900': '#7d2d11',
          '950': '#431407'
        },
        primary: '#FB7C25',
        purpleTheme: "#8c75e7",
        themeDark: "#B1336E",
        themeLight: "#2300FF",
        secondary: "#1e7f9c",
        facebook: "#4267B2",
        instagram: "#bc2a8d",
        twitter: "#1da1f2",
        linkedin: "#0077b5",
        pinterest: "#E60023",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        panel: "#13AF82",
        screens: {
          'sm': '840px',
        }
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [
  ],
}