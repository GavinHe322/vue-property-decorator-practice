export default {
  input: 'lib/index.js',
  output: {
    file: 'lib/index.umd.js',
    format: 'umd',
    name: 'VuePropertyDecoratorPractice',
    globals: {
      vue: 'Vue',
      'vue-class-component-practice': 'VueClassComponentPractice'
    },
    exports: 'named',
  },
  external: ['vue', 'vue-class-component-practice', 'reflect-metadata']
}
