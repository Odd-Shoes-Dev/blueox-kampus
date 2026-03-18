module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#1a1a1a',
        white: '#ffffff',
        cream: '#ffffff',
        coral: '#e05a3a',
        'coral-dark': '#c94e30',
        'coral-light': '#f4a08e',
        gray: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#d8d4cd',
          400: '#aaa',
          500: '#888',
          600: '#666',
          700: '#4a4a4a',
          800: '#2f2f2f',
          900: '#1f1f1f'
        },
        blue: {
          50: '#fff4f1',
          100: '#fbe2dc',
          200: '#f4c2b6',
          300: '#eea38f',
          400: '#e98167',
          500: '#e05a3a',
          600: '#c94e30',
          700: '#a74128',
          800: '#843320',
          900: '#602519'
        },
        red: {
          400: '#e98167',
          500: '#e05a3a',
          600: '#c94e30'
        },
        green: {
          400: '#e98167',
          500: '#e05a3a',
          600: '#c94e30'
        },
        purple: {
          400: '#e98167',
          500: '#e05a3a',
          600: '#c94e30'
        },
        sky: {
          400: '#e98167',
          500: '#e05a3a',
          600: '#c94e30'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(.4,0,.2,1)'
      },
      transitionDuration: {
        'brand': '350ms'
      },
      animation: {
        'marquee': 'marquee 20s linear infinite'
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' }
        }
      }
    }
  },
  plugins: []
};
