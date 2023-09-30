// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  image: {
    format: ['webp', 'jpeg'],
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },
})
