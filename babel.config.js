module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'auto'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'babel-plugin-dynamic-import-node',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ],
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties'
  ]
};
