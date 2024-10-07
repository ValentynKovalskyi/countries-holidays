// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  alias: {
  '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
  '@types': fileURLToPath(new URL('./utils/types', import.meta.url)),
  }
})
