/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: '#EDFF66'
        }
      },
      clipPath: {
        "default": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Initial state
        "final": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Adjust as needed
      },
      height: {
        "dvh": "100dvh",
      },
      translate: {
        "center": "-50%",
      },
    },
  },
  plugins: [],
}