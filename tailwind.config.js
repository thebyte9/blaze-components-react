function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }

    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        button: {
          primary: withOpacity('--color-text-primary'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        button: {
          primary: withOpacity('--color-button-primary'),
          hover: withOpacity('--color-button-primary-hover'),
          disabled: withOpacity('--color-button-disabled'),
          pressed: withOpacity('--color-button-pressed'),
        },
      },
      borderRadius: {
        button: 'var(--border-radius-button)',
        'button-large': 'var(--border-radius-button-large)',
      },
    },
  },
  variants: {
    extend: {},
  },
};
