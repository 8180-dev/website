const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.ts',
      '.glsl',
      '.vs',
      '.fs',
      '.vert',
      '.frag',
    ],
    root: path.resolve(__dirname),
    // for WebStorm
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
      Sass: path.resolve(__dirname, './assets/sass/'),
      Js: path.resolve(__dirname, './assets/Js/'),
      Images: path.resolve(__dirname, './assets/images/'),
    },
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
  ],
}
