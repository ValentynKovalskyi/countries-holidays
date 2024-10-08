// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
    alias: {
        '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
        '@types': fileURLToPath(new URL('./utils/types', import.meta.url)),
        '@constants': fileURLToPath(
            new URL('./utils/constants', import.meta.url)
        ),
        '@api': fileURLToPath(new URL('./api', import.meta.url)),
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
        }
    }
});
