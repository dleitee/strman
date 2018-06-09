import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/strman.js',
  output: {
    file: 'lib/strman.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve({
      modulesOnly: true,
      jsnext: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    commonjs(),
  ],
}
