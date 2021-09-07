const plugin = require('tailwindcss/plugin');

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

module.exports = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('valid', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`valid${separator}${className}`)}:valid`;
    });
  });
});
