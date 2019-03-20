import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: {
    dir: './dst',
    format: 'esm',
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
}
