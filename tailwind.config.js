const { withOpacity } = require('@blaze-react/themes');
const forms = require('@tailwindcss/forms');
const hideScrollbar = require('@blaze-react/themes');
const required = require('@blaze-react/themes');
const success = require('@blaze-react/themes');
const error = require('@blaze-react/themes');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      ringColor: {
        input: {
          error: withOpacity('--input-ring-color-error'),
          loading: withOpacity('--input-ring-color-loading'),
        },
      },
      textColor: {
        button: {
          base: withOpacity('--button-text-color-base'),
          primary: withOpacity('--button-text-color-primary'),
          muted: withOpacity('--button-text-color-muted'),
          inverted: withOpacity('--button-text-color-inverted'),
          outlined: withOpacity('--button-text-color-outlined'),
          'outlined-disabled': withOpacity('--button-text-color-outlined-disabled'),
        },
        input: {
          base: withOpacity('--input-text-color-base'),
          error: withOpacity('--input-text-color-error'),
          success: withOpacity('--input-text-color-success'),
          warning: withOpacity('--input-text-color-warning'),
          loading: withOpacity('--input-text-color-loading'),
        },
        modal: {
          header: withOpacity('--modal-text-color-header'),
          body: withOpacity('--modal-text-color-body'),
          footer: withOpacity('--modal-text-color-footer'),
        },
        tab: {
          base: withOpacity('--tab-text-color-base'),
          inverted: withOpacity('--tab-text-color-inverted'),
        },
      },
      backgroundColor: {
        button: {
          primary: withOpacity('--button-fill-color-primary'),
          hover: withOpacity('--button-fill-color-primary-hover'),
          disabled: withOpacity('--button-fill-color-disabled'),
          pressed: withOpacity('--button-fill-color-pressed'),
          outlined: withOpacity('--button-fill-color-outlined'),
          'outlined-hover': withOpacity('--button-fill-color-outlined-hover'),
        },
        input: {
          base: withOpacity('--input-fill-color-base'),
          hover: withOpacity('--input-fill-color-hover'),
          focus: withOpacity('--input-fill-color-focus'),
        },
        modal: {
          header: withOpacity('--modal-fill-color-header'),
          container: withOpacity('--modal-fill-color-container'),
          content: withOpacity('--modal-fill-color-content'),
          footer: withOpacity('--modal-fill-color-footer'),
        },
        tab: {
          primary: withOpacity('--tab-fill-color-primary'),
          hover: withOpacity('--tab-fill-color-primary-hover'),
        },
      },
      borderRadius: {
        button: 'var(--button-border-radius)',
        'button-large': 'var(--button-border-radius-large)',
        input: 'var(--input-border-radius)',
        modal: 'var(--modal-border-radius)',
        tab: 'var(--tab-border-radius)',
      },
      borderColor: {
        button: {
          outlined: withOpacity('--button-border-outlined'),
          'outlined-pressed': withOpacity('--button-border-outlined-pressed'),
          'outlined-disabled': withOpacity('--button-border-outlined-disabled'),
        },
        input: {
          base: withOpacity('--input-border-base'),
          focus: withOpacity('--input-border-focus'),
          error: withOpacity('--input-border-error'),
          success: withOpacity('--input-border-success'),
          warning: withOpacity('--input-border-warning'),
          loading: withOpacity('--input-border-loading'),
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
      backgroundColor: ['disabled', 'active', 'hover'],
      textColor: ['disabled', 'active', 'hover'],
      borderWidth: ['disabled', 'active', 'hover'],
      borderColor: ['disabled', 'active', 'hover'],
      cursor: ['disabled'],
      outline: ['hover', 'active'],
    },
  },
  plugins: [hideScrollbar, required, success, error],
};
