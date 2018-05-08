import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: ['react'],
  output: {
    name: 'app-ui-kit',
    file: pkg.main,
    format: 'umd',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react-dom': [ 'findDOMNode' ],
      },
    }),
  ],
};