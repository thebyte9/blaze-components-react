const path = require('path');

const ENTRY_POINT = path.resolve(__dirname, './src/');

module.exports = {
  entry: ENTRY_POINT,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }
    ],
  },
  externals: {
    react: 'commonjs react',
    'prop-types': 'commonjs prop-types',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'blaze-components.js',
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: 'blaze-components-react',
    globalObject: 'this',

  }
};
