export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        script: [{
            src: "https://data.r4nd0.de/umami.js",
            async: true,
            'data-website-id': '8cedc6dc-9714-4c43-b55a-7102fb6d590c'
        }, ],
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
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

}