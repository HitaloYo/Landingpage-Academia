export default defineNuxtConfig({
  compatibilityDate: '2026-11-08',
  devtools: { enabled: false },
  css: ['@fontsource-variable/inter/index.css', '~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Júlio César Academia',
      meta: [
        {
          name: 'description',
          content:
            'Transforme sua saúde e bem-estar hoje! Na Júlio César, você encontra treinos personalizados, equipamentos de qualidade e um ambiente motivador.',
        },
      ],
    },
  },
})
