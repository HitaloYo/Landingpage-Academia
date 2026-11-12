# Landing page · Academia Júlio César

Landing page de uma academia de musculação, com apresentação, estrutura (ambiente, equipamentos e professores), chamada para matrícula e contato por WhatsApp.

Feita com **Nuxt 4** e **Vue 3**, em componentes:

```
app/
  components/
    HeroSection.vue      chamada principal e botão de matrícula
    FeaturesSection.vue  ambiente, equipamentos e professores
    DiagonalBar.vue      faixa decorativa entre as seções
    SiteFooter.vue       endereço e contatos
  utils/contacts.ts      links de WhatsApp e Instagram em um só lugar
```

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # site estático em .output/public
```
