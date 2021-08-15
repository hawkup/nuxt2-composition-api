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
    { src: '~/plugins/inject-ww.js', mode: 'client' },
    { src: '~/plugins/gtm.js', mode: 'client' },
    { src: '~/plugins/v-lazy-component.js', mode: 'client' },
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
    '@nuxtjs/web-vitals',
    '@nuxtjs/date-fns',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    'nuxt-multi-cache',
    'nuxt-feature-toggle',
    '@nuxtjs/dayjs',
    '@nuxtjs/proxy',
    '@nuxtjs/gtm',
    'nuxt-history-state',
    '@nuxtjs/sentry'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minimize: true,
    extend(config, { isClient, loaders: { vue }}) {
      config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      })

      vue.compilerOptions = {
        modules: [
          {
            preTransformNode(astEl) {
              const { attrsMap, attrsList } = astEl
              const index = attrsList.findIndex(x => x.name === 'data-id')
              if (index >= 0) {
                const value = `${attrsList[index].value}!!${process.env.PADDING_KEY}`
                attrsList[index].value = btoa(value)
              }
              return astEl
            }
          }
        ]
      }
    }
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
      enabled: false
    },
    dataCache: {
      enabled: true
    }
  },

  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'en'
    },
    workbox: {
      enabled: false
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYRICS_ID
  },

  dateFns: {
    locales: ['en', 'th']
  },

  dayjs: {
    locales: ['en', 'th']
  },

  proxy: {
    '/rest': 'https://api.spacex.land'
  },

  gtm: {
    enabled: false,
    id: process.env.GOOGLE_TAG_MANAGER_ID
  },

  publicRuntimeConfig: {
    featureToggle: {
      queryString: process.env.NODE_ENV === 'development',
      toggles: {
        company: yn(process.env.FEATURE_ENABLE_COMPANY)
      }
    },
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },

  historyState: {
    maxHistoryLength: 50,
    reloadable: false,
    overrideDefaultScrollBehavior: true,
    scrollingElements: '#scroll'
  },

  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  }
}
