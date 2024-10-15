// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo/remark-logo-1000.png",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],

     
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js",
        },
      ],
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxtjs/svg-sprite",
    "nuxt-multi-cache",
    "nuxt-viewport",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@formkit/auto-animate/nuxt",
  ],
  primevue: {
    options: {
      unstyled: true,
    },
  },
  site: {
    url: 'https://remarkhr.com',
    name: 'Remark - Job & Recruiter App',
    description: 'Find jobs & talents using native AI tools. Find the best jobs & growth opportunities. Best Job Portal in India. Get free personalized job recommendations.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  seo: {
    fallbackTitle: true,
    automaticDefaults: false,
  },
  sitemap: {
    hostname: "https://remarkhr.com",
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    gzip: false,
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
});
