const path = require('path');

module.exports = {
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
