import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      name: 'myLibrary',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      plugins: [ terser() ],
    },
  ],
};
