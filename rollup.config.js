import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

const plugins = [
  external(),
  postcss({
    modules: true
  }),
  url(),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/env', '@babel/preset-react'],
    plugins: ['@babel/plugin-external-helpers']
  }),
  resolve(),
  commonjs()
];

export default [{
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  },
  plugins
},
{
  input: 'src/index.js',
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true
  },
  plugins
}
];
