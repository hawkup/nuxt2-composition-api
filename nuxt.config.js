require('dotenv').config()
const yn = require('yn')

module.exports = {
  ssr: true,
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-composition-api',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/feature-toggle.js',
    '~/plugins/portal.js',
    { src: '~/plugins/vue-loading-skeleton.js', mode: 'client' },
    { src: '~/plugins/vue-scroll-loader.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/web-vitals'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    'nuxt-multi-cache',
    'nuxt-feature-toggle'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minimize: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.spacex.land/graphql',
      }
    }
  },

  multiCache: {
    enabled: true,
    debug: true,
    outputDir: '~/cache',
    server: {
      auth: {
        username: 'admin',
        password: 'hunter2'
      }
    },
    pageCache: {
      enabled: true
    },
    dataCache: {
      enabled: true
    }
  },

  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'en'
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYRICS_ID
  },

  publicRuntimeConfig: {
    featureToggle: {
      queryString: process.env.NODE_ENV === 'development',
      toggles: {
        company: yn(process.env.FEATURE_ENABLE_COMPANY)
      }
    }
  }
}
