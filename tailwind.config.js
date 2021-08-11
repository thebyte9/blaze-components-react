const plugin = require('tailwindcss/plugin');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        tab: {
          base: withOpacity('--tab-text-color-base'),
          inverted: withOpacity('--tab-text-color-inverted'),
        },
        button: {
          base: withOpacity('--button-text-color-base'),
          primary: withOpacity('--button-text-color-primary'),
          muted: withOpacity('--button-text-color-muted'),
          inverted: withOpacity('--button-text-color-inverted'),
          outlined: withOpacity('--button-text-color-outlined'),
          'outlined-disabled': withOpacity('--button-text-color-outlined-disabled'),
        },
        modal: {
          header: withOpacity('--modal-text-color-header'),
          body: withOpacity('--modal-text-color-body'),
          footer: withOpacity('--modal-text-color-footer'),
        },
      },
      backgroundColor: {
        tab: {
          primary: withOpacity('--tab-fill-color-primary'),
          hover: withOpacity('--tab-fill-color-primary-hover'),
        },
        button: {
          primary: withOpacity('--button-fill-color-primary'),
          hover: withOpacity('--button-fill-color-primary-hover'),
          disabled: withOpacity('--button-fill-color-disabled'),
          pressed: withOpacity('--button-fill-color-pressed'),
          outlined: withOpacity('--button-fill-color-outlined'),
          'outlined-hover': withOpacity('--button-fill-color-outlined-hover'),
        },
        modal: {
          header: withOpacity('--modal-fill-color-header'),
          container: withOpacity('--modal-fill-color-container'),
          content: withOpacity('--modal-fill-color-content'),
          footer: withOpacity('--modal-fill-color-footer'),
        },
      },
      borderRadius: {
        tab: 'var(--tab-border-radius)',
        button: 'var(--button-border-radius)',
        'button-large': 'var(--button-border-radius-large)',
        modal: 'var(--modal-border-radius)',
      },
      borderColor: {
        button: {
          outlined: withOpacity('--button-border-outlined'),
          'outlined-pressed': withOpacity('--button-border-outlined-pressed'),
          'outlined-disabled': withOpacity('--button-border-outlined-disabled'),
        },
        modal: {
          footer: withOpacity('--modal-border-color-footer'),
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderWidth: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',

          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
