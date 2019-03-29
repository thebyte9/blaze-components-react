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
  externals: [
    { react: 'react' },
    {
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types',
        root: 'PropTypes'
      }
    }
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'blaze-components.js',
  }
};
