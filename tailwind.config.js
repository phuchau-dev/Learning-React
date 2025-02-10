/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        default: '#f9f9f9',
        'default-foreground': '#333333',
        focus: '#1e90ff',
      },
      fontSize: {
        tiny: '0.75rem',
      },
      borderRadius: {
        full: '9999px',
      },
      opacity: {
        disabled: '0.5',
      },
      spacing: {
        10: '2.5rem',
      },
    },
  },
  variants: {
    extend: {
      outline: ['focus-visible'],
    },
  },
  plugins: [],
};
