import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
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
