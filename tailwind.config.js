import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
   
    extend: {
      colors: {
        background: "#B7B7B7",
        colortext: "#282828"
      }
    },
  },
  plugins: [typography, daisyui],
};
