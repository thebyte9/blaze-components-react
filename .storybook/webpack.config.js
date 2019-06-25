const path = require("path");
const SRC_PATH = path.join(__dirname, '../packages');
module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        }
      ]
  }, 
  {
    test: /\.css$/,
    include: [
        path.resolve(__dirname, "not_exist_path")
    ],
    loader: "style!css"
});
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};