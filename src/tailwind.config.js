export default {
    content: [
      "./src/**/*.tsx",
    ],
    theme: {
      extend: {
        daisyui: {
          themes: {
            mytheme: {
              primary: "#B91879",
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('daisyui'),
    ],
  }
  