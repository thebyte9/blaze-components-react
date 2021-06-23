function withOpacity(varibleName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rga(var(${varibleName}), ${opacityValue})`;
    }

    return `rgb(var(${varibleName}))`;
  };
}

module.exports = {
  purge: ['./src/**/*.ts'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        blaze: {
          'button-base': withOpacity('--color-button-text-base'),
          'button-muted': withOpacity('--color-button-text-muted'),
          'button-inverted': withOpacity('--color-button-text-inverted'),
        },
      },
      backgroundColor: {
        blaze: {
          'button-hover': withOpacity('--color-button-hover'),
          'button-pressed': withOpacity('--color-button-pressed'),
          'button-disabled': withOpacity('--color-button-disabled'),
          'button-outline-fill': withOpacity('--color-button-outline-fill'),
          'button-outline-hover': withOpacity('--color-button-outline-hover'),
          'button-outline-pressed': withOpacity('--color-button-outline-pressed'),
          'button-outline-disabled': withOpacity('--color-button-outline-pressed'),
        },
      },
      borderColor: {
        blaze: {
          'button-outline-disabled-border': withOpacity('--color-button-outline-border'),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
