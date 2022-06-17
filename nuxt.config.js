export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: "https://data.r4nd0.de/umami.js",
        async: true,
        'data-website-id': '8cedc6dc-9714-4c43-b55a-7102fb6d590c'
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-chimera/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBlCI1DZDuJ-14cFsGAYOYdQSYG0e5Qc9Q',
          authDomain: 'personalsite-e797f.firebaseapp.com',
          databaseURL:
            'https://personalsite-e797f-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'personalsite-e797f',
          storageBucket: 'personalsite-e797f.appspot.com',
          messagingSenderId: '212345716629',
          appId: '1:212345716629:web:5877e3c68eae4d7c45009c',
          measurementId: 'G-8444RHLSVT',
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // chimera config
  chimera: {
    prefetch: true,
    prefetchTimeout: 4000,
  },
}
