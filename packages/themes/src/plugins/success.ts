import plugin from 'tailwindcss/plugin';

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

const success = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('valid', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`valid${separator}${className}`)}:valid`;
    });
  });
});

export default success;
