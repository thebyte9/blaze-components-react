import plugin from 'tailwindcss/plugin';

interface IHideScrollbar {
  addUtilities: any;
}

const hideScrollbar = plugin(function ({ addUtilities }: IHideScrollbar) {
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

export default hideScrollbar;
