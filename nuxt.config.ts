// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ["@/assets/css/main.scss"],
  devtools: { enabled: true },
  routeRules:{
    '/arcane-raiders': {redirect: 'https://store.steampowered.com/app/2899410/Arcane_Raiders/'}
  }
})
