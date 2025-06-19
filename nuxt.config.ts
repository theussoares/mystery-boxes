// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', "@pinia/nuxt"],
  // tailwindcss: {
  //   configPath: "@/tailwind.config.ts"
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  image: {
    quality: 80,
    format: ['webp']
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true,
    },
    {
      path: '~/views',
      pathPrefix: false,
      global: true,
    }
  ],

  imports: {
    dirs: ['stores', 'composables', 'utils'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Mistety Boxes - Loja de Caixas Misteriosas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
      ]
    }
  },
})