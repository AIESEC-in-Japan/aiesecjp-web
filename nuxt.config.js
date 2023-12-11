require("dotenv").config();
const {API_KEY} = process.env;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'aiesecjp-web',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'AIESEC in Japan official website'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // auto import
  components: true,
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }

  },
  /*
  ** Global CSS
  */
  css: [
    './assets/resetcss/reset.css'
  ],
  /*
  ** style-resources
  */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/vuetify', '@nuxtjs/google-gtag', 'cookie-universal-nuxt'],
  plugins: [
    './plugins/scroll.js',
    './plugins/windowSize.js',
    './plugins/isMobile.js',
    './plugins/basicSectionSize'
  ],
  styleResources: {
    scss: [
      './assets/scss/main.scss'
    ],
  },
  env: {
    API_KEY
  },
  // see https://storybook.nuxtjs.org
  storybook: {
    stories: [
      '~/stories/**/*.stories.js',
      "~/components/**/stories/**/*.stories.@(js|vue)"
    ],
  }
}
