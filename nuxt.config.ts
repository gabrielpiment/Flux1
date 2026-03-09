// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Flux - Plataforma de Engajamento do Cliente para Comunicação Omnichannel',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Reduza a carga da equipe e os custos de suporte com a plataforma de engajamento omnichannel do Flux powered by AI.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})

