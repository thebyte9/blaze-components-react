module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: false,
      },
    ],
    '@babel/plugin-syntax-jsx',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
