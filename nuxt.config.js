// require('dotenv').config()
// const {env_test} = process.env.VUE_APP_apiKey

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    apiKey: "AIzaSyBxQnVz9BYb3R0rgilwSN6xGIP83YGrYbY",
    authDomain: "playground-b85cc.firebaseapp.com",
    databaseURL: "https://playground-b85cc.firebaseio.com",
    projectId: "playground-b85cc",
    storageBucket: "playground-b85cc.appspot.com",
    messagingSenderId: "617685239053",
    appId: "1:617685239053:web:7c4020d4d737d250e79c44",
    measurementId: "G-6YE6R287F2"
  }
}
