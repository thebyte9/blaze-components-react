import plugin from 'tailwindcss/plugin';

interface IRequiredPlugin {
  addVariant: any;
  e: any;
}

const required = plugin(function ({ addVariant, e }: IRequiredPlugin) {
  addVariant('required', ({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: any) => {
      return `.${e(`required${separator}${className}`)}:required`;
    });
  });
});

export default required;
