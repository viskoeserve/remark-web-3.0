// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Remark | India's Best Job Portal | Jobs & Recruiter App",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo/remark-logo-1000.png'
        }
      ],
      meta: [
        {
          name: 'author',
          content: 'Visko HR Private Limited'
        },
        {
          name: 'title',
          content: "Remark | India's Best Job Portal | Jobs & Recruiter App"
        },
        {
          name: 'description',
          content: "The best AI inbuilt job portal in India for HR professionals, recruiters, and job seekers. Use our user-friendly job application to simplify the hiring process."
        },
        {
          name: 'keywords',
          content: 'job portal,india job portal,job apply application,job portal sites in india,application regarding job'
        }
      ]
    }
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
    'nuxt-viewport'
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  }
})
