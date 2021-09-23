const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    clean: true,
    libraryTarget: 'umd',
    library: '@blaze-react',
    globalObject: 'this',
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
    usedExports: true,
    removeAvailableModules: true,
    concatenateModules: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    fallback: {
      path: false,
      fs: false,
    },
    alias: {
      '@blaze-react/utils': path.resolve(__dirname, '../Utils/src'),
      '@blaze-react/button': path.resolve(__dirname, '../Button/src'),
      '@blaze-react/select': path.resolve(__dirname, '../Select/src'),
      '@blaze-react/input': path.resolve(__dirname, '../Input/src'),
      '@blaze-react/avatar': path.resolve(__dirname, '../Avatar/src'),
      '@blaze-react/checkboxes': path.resolve(__dirname, '../Checkboxes/src'),
      '@blaze-react/chips': path.resolve(__dirname, '../Chips/src'),
      '@blaze-react/themes': path.resolve(__dirname, '../themes/src'),
      '@blaze-react/icon': path.resolve(__dirname, '../Icon/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYSE ? 'json' : 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: path.resolve('./stats/stats.json'),
    }),
  ],
};
