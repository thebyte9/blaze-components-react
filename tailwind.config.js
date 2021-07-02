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
        button: {
          base: withOpacity('--color-text-base'),
          primary: withOpacity('--color-text-primary'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          outlined: withOpacity('--color-text-outlined'),
          'outlined-disabled': withOpacity('--color-text-outlined-disabled'),
        },
      },
      backgroundColor: {
        button: {
          primary: withOpacity('--color-button-primary'),
          hover: withOpacity('--color-button-primary-hover'),
          disabled: withOpacity('--color-button-disabled'),
          pressed: withOpacity('--color-button-pressed'),
          outlined: withOpacity('--color-button-outlined'),
          'outlined-hover': withOpacity('--color-button-outlined-hover'),
        },
      },
      borderRadius: {
        button: 'var(--border-radius-button)',
        'button-large': 'var(--border-radius-button-large)',
      },
      borderColor: {
        button: {
          outlined: withOpacity('--border-outlined-button'),
          'outlined-disabled': withOpacity('--border-outlined-disabled-button'),
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
    },
  },
};
