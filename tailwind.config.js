/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundMain: "url('./assets/bg.jpg')",
        avatar: "url('./assets/avatar.png')",
        sphere: "url('./assets/Sphere.svg')",
        Rock: "url('./assets/Rock.svg')",
        Ellipse1: "url('./assets/Ellipse 5.svg')",
        Ellipse2: "url('./assets/Ellipse 5 (1).svg')",
        RoundCube3: "url('./assets/Round Cube3.svg')",
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.10) 100%)'
      },
      screens: {
        sm: '320px',
        '2sm': '360px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}

