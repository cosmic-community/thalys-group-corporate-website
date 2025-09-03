/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#00A3E0', 
        dark: '#0F172A',
        light: '#F8FAFC',
        accent: '#00D1FF',
        'primary-dark': '#01283f',
        'dark-blue': '#000d1a',
        'cyan-custom': '#00fbff',
        'blue-custom': '#045273',
        'text-custom': '#e9ecef',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        'text-gradient': 'linear-gradient(90deg, var(--primary), var(--accent))',
      }
    },
  },
  plugins: [],
}