require("dotenv").config();
const {API_KEY} = process.env;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - ' + 'AIESEC in Japan',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'アイセックは、世界100以上の国と地域​に​支部を持ち​、​約30,000人の若者が所属する非営利組織です。海外インターンシップやオンラインの国際交流プログラムなどの運営と参加を通じて、平和で人々の可能性が最大限発揮された社会の実現を目指しています。'},
  
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
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-gtag',
    '@nuxtjs/google-analytics',
  'cookie-universal-nuxt'],
  'google-gtag': {
    id: 'G-0XWZPJW27L'
  },
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
