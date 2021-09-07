import plugin from 'tailwindcss/plugin';

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

const valid = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('warning', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`warning${separator}${className}`)}:warning`;
    });
  });
});

export default valid;
