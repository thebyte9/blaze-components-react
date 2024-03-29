const path = require('path');

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: true,
  },
  stories: ['../packages/**/stories/**/*.stories.mdx', '../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-tailwind-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../packages'));

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './tsconfig.json',
            transpileOnly: true,
            errorsAsWarnings: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.fallback,
          assert: require.resolve('assert-browserify/'),
          path: require.resolve('path-browserify'),
          fs: false,
        },
        alias: {
          ...config.alias,
          '@blaze-react/utils': path.resolve(__dirname, '../packages/Utils/src'),
          '@blaze-react/button': path.resolve(__dirname, '../packages/Button/src'),
          '@blaze-react/select': path.resolve(__dirname, '../packages/Select/src'),
          '@blaze-react/input': path.resolve(__dirname, '../packages/Input/src'),
          '@blaze-react/avatar': path.resolve(__dirname, '../packages/Avatar/src'),
          '@blaze-react/checkboxes': path.resolve(__dirname, '../packages/Checkboxes/src'),
          '@blaze-react/chips': path.resolve(__dirname, '../packages/Chips/src'),
          '@blaze-react/themes': path.resolve(__dirname, '../packages/themes/src'),
          '@blaze-react/modal': path.resolve(__dirname, '../packages/Modal/src'),
          '@blaze-react/icon': path.resolve(__dirname, '../packages/Icon/src'),
          '@blaze-react/skeleton': path.resolve(__dirname, '../packages/Skeleton/src'),
          '@blaze-react/pagination': path.resolve(__dirname, '../packages/Pagination/src'),
        },
      },
    };
  },
};
