// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo/remark-logo-1000.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css'
        }
      ],
      
      meta: [
        {
          name: 'author',
          content: 'Visko HR Private Limited'
        },
        {
          name: 'title',
          content: "Remark Jobs | Best Job Portal in India | Reshaping Hiring"
        },
        {
          name: 'description',
          content: "Find jobs & talents using native AI tools. Find the best jobs & growth opportunities. Best Job Portal in India. Get personalized job recommendations for Free."
        },
        {
          name: 'keywords',
          content: 'job portal,india job portal,job apply application,job portal sites in india,application regarding job'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js'
        }
      ]
    },
  },
  
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-swiper',
    '@nuxtjs/svg-sprite',
    'nuxt-multi-cache',
    'nuxt-viewport',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@formkit/auto-animate/nuxt'
  ],
  primevue: {
      options: {
        unstyled: true
      },
  },
  site: {
    url: 'https://remarkhr.com',
    name: "Remark Jobs | Best Job Portal in India | Reshaping Hiring",
    description: 'Find jobs & talents using native AI tools. Find the best jobs & growth opportunities. Best Job Portal in India. Get personalized job recommendations for Free.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  seo: {
    fallbackTitle: true,
    automaticDefaults: true,
  },
  sitemap: {
    hostname: 'https://remarkhr.com',
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    gzip: true,
  },
  piniaPersistedstate: {
    storage: 'localStorage'
  },
})
