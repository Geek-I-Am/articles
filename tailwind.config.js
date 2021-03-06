module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
        gray: {
          50: '#4b5563',
        },
      },
    },
    typography: {
      default: {
        css: {
          h1: {
            color: '#276749',
          },
          h2: {
            color: '#276749',
          },
          h3: {
            color: '#276749',
          },
          h4: {
            color: '#276749',
          },
          h5: {
            color: '#276749',
          },
          h6: {
            color: '#276749',
          },
          a: {
            color: '#276749',
          },
          blockquote: {
            color: '#2f855a',
            background: '#e2e8f0',
            padding: 10,
          },
          strong: {
            color: '#276749',
          },
          code: {
            color: '#38a169',
          },
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
          ul: {
            padding: 10,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
