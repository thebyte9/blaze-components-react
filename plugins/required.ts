/* eslint @typescript-eslint/no-var-requires: "off" */

const plugin = require('tailwindcss/plugin');

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

module.exports = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('required', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`required${separator}${className}`)}:required`;
    });
  });
});
