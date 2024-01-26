import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        itacademy: {

          "primary": "#B91879",

          "primary-hover":'#811155',

          "primary-active": '#ce5da1',

          "secondary": "#F9BB47",

          "accent": "#27AE60",

          "info": "#2F80ED",

          "success": "#27AE60",

          "warning": "#E2AA3B",

          "error": "#EB5757",

          "black-2": "#1D1D1D",

          "black-3": "#282828",

          "white": "#FFFFFF",

          "grey": "#333333",

          "grey-1": "#4F4F4F",

          "grey-2": "#808080",

          "grey-3": "#7E7E7E",

          "grey-4-base": "#EBEBEB",
        },
      },
    ],
  },
  plugins: [typography,
    daisyui
  ],
}; 
