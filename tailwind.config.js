import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
   
    extend: {
      colors: {
        colortext: "#282828"
      }
    },
  },
  plugins: [typography, daisyui],
};
