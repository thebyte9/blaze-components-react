/* eslint @typescript-eslint/no-var-requires: "off" */

const plugin = require('tailwindcss/plugin');

interface IHideScrollbar {
  addUtilities: any;
}

module.exports = plugin(function ({ addUtilities }: IHideScrollbar) {
  const scrollbar = {
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

  addUtilities(scrollbar);
});
