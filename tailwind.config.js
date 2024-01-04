import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colortext: "#282828",
        pinkit: '#B91879',
        pinkit_hover:'#811155',
        pinkit_active: '#ce5da1'
      }
    },
  },
  plugins: [typography, daisyui],
};
