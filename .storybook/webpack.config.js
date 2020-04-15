const path = require("path");
const SRC_PATH = path.join(__dirname, '../packages');
module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: "ts-loader",
    options: {
      configFile: path.resolve(__dirname, "../.typescript/tsconfig.json")
    },
    include: [SRC_PATH],
  }, 
  {
    test: /\.css$/,
    include: [
        path.resolve(__dirname, "not_exist_path")
    ],
    loader: "style!css"
  },
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  }
  );
  config.resolve.extensions.push('.ts', '.tsx', '.js');
  return config;
};