import plugin from 'tailwindcss/plugin';

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

const valid = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('error', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`error${separator}${className}`)}:error`;
    });
  });
});

export default valid;
