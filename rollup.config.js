import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import typescript from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      del({
        targets: 'dist',
        runOnce: true,
      }),
      nodeResolve(),
      commonjs(),
      eslint({
        fix: true,
        throwOnError: true,
      }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
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
        plugins: [terser()],
      },
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: 'dist/types',
        hook: 'buildEnd',
        runOnce: true,
      }),
    ],
  },
];
