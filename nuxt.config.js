// import { UnusedFilesWebpackPlugin } from 'unused-files-webpack-plugin'
const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const apiUrl = `https://wp.8180.co.jp/wp-json/wp/v2/`

module.exports = {
  target: 'static',

  buildModules: ['@aceforth/nuxt-optimized-images', '@nuxtjs/style-resources'],

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '株式会社ハイパーボールは2018年5月に設立したアニメーションに特化した映像制作会社です。Hyperboleとは「8180」と書いて「ハイパーボール」と読みます。意味は「誇張、大げさな表現」',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-lazyload.client.js',
    '~plugins/console.js',
    '~plugins/vue-youtube.client.js',
    '~plugins/routerOption.js',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-user-agent',
    'nuxt-mq',
    'cookie-universal-nuxt',
    'nuxt-webfontloader',
    [
      '~/modules/api',
      {
        config: '~/api.config.js',
        baseURI: `${apiUrl}`,
      },
    ],
    [
      'vue-scrollto/nuxt',
      {
        easing: [1.0, 0.0, 0.0, 1.0],
        duration: 800,
        offset: 0,
      },
    ],
    [
      '@uto-usui/nuxt-google-gtag',
      {
        id: 'UA-165344069-1',
        config: {
          send_page_view: true,
          custom_map: {
            dimension12: 'vol34-narrative-and-deployment',
          },
        },
      },
    ],
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyC3mdrrwEsofIWAjitYYJT9evPoiqNx528',
      },
    ],
  ],

  sitemap: {
    hostname: 'http://8180.co.jp',
    gzip: true,
  },

  /**
   * media query breakpoint
   */
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      desktop: 1024,
      widescreen: 1200,
      fullhd: 1680,
    },
  },

  /**
   * import font style sheet
   */
  webfontloader: {
    google: {
      families: ['M+PLUS+Rounded+1c:100,300,400,500,700,800,900&display=swap'],
    },
  },

  /**
   * nuxt-optimized-images
   */
  optimizedImages: {
    optimizeImages: true,
  },

  /**
   * page transition
   */
  pageTransition: {
    css: false,
    enter(_el, done) {
      done()
    },
    leave(_el, done) {
      done()
    },
  },

  styleResources: {
    scss: [
      '~/assets/sass/foundation/variable/_variable.scss',
      '~/assets/sass/foundation/mixin/_mixin.scss',
    ],
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    splitChunks: {
      layouts: true,
    },

    /**
     * reduce bundle size checker
     */
    // analyze: true,

    // babel: {
    //   plugins: ['@babel/plugin-syntax-dynamic-import'],
    // },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue'],
          }),
        )
      }
      // glsl
      config.module.rules.push({
        test: /\.(glsl|vs|fs)$/,
        use: ['raw-loader', 'glslify-loader'],
        exclude: /(node_modules)/,
      })
      // import alias
      config.resolve.alias.Sass = path.resolve(__dirname, './assets/sass/')
      config.resolve.alias.Js = path.resolve(__dirname, './assets/js/')
      config.resolve.alias.Images = path.resolve(__dirname, './assets/images/')
      config.resolve.alias['~'] = path.resolve(__dirname)
      config.resolve.alias['@'] = path.resolve(__dirname)
      //
      config.devtool = '#source-map'
    },

    /**
     * prefix
     */
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    plugins: [
      // new UnusedFilesWebpackPlugin({
      //   patterns: ['components/**/*.vue', 'components/**/*.js'],
      // }),
    ],
  },

  router: {
    base: process.env.BASE_URL || '/',
  },

  generate: {
    //
  },

  workbox: {
    cachingExtensions: '~/plugins/workbox-range-request.js',
    runtimeCaching: [
      // video
      {
        urlPattern: /.*\.mp4/,
        handler: `NetworkOnly`,
      },
      // wp assets
      {
        urlPattern: `https://wp.8180.co.jp/wp/wp-content/uploads/.*`,
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
      // wp rest API response
      {
        urlPattern: `/wp-json/.*`,
        handler: 'networkFirst',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
      // google fonts
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
  manifest: {
    name: '8180',
    lang: 'ja',
    start_url: '/',
    display: 'standalone',
  },
}
