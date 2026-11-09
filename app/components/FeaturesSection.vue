<script setup lang="ts">
const COPY =
  'Contamos com um time de profissionais altamente qualificados quando o assunto é fazer você ir para o próximo nível da sua vida.'

const cards = [
  {
    title: 'EQUIPAMENTOS DE QUALIDADE',
    image: '/images/equipamentos.png',
    alt: 'Halteres e anilhas organizados na área de musculação',
    width: 407,
    inset: 26,
  },
  {
    title: 'PROFESSORES QUALIFICADOS',
    image: '/images/professores.png',
    alt: 'Equipe de professores da academia',
    width: 399,
    inset: 18,
  },
  {
    title: 'AMBIENTE MOTIVADOR',
    image: '/images/ambiente.png',
    alt: 'Fachada da Júlio César Academia à noite',
    width: 407,
    inset: 26,
  },
]

const ORANGE = '#fa6801'
const LONG = { boxW: 287.036, boxH: 323.735, length: 397, thickness: 36, angle: -49.12, color: ORANGE }
const THIN = { boxW: 209.44, boxH: 241.883, length: 316, thickness: 4, angle: -49.22, color: '#fff' }

const bars = [
  { ...THIN, x: 910, y: -3 },
  { ...THIN, x: 945, y: -3 },
  { ...LONG, x: 798, y: -33 },
  { ...LONG, x: 1007, y: -58 },
]
</script>

<template>
  <section id="atividades" class="features">
    <div class="stage">
      <DiagonalBar v-for="(b, i) in bars" :key="i" v-bind="b" />

      <article
        v-for="card in cards"
        :key="card.title"
        class="card"
        :style="{ '--card-w': card.width, '--inset': card.inset }"
      >
        <div class="circle">
          <img :src="card.image" :alt="card.alt" width="1030" height="1030" loading="lazy">
        </div>
        <h3 class="title">{{ card.title }}</h3>
        <p class="text">{{ COPY }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.features {
  overflow: hidden;
  background: var(--ink);
}

.stage {
  position: relative;
  display: flex;
  width: calc(1280 * var(--u));
  height: calc(832 * var(--u));
  margin-inline: auto;
  padding: calc(143 * var(--u)) 0 0 calc(70 * var(--u));
}

.card {
  position: relative;
  z-index: 1;
  width: calc(var(--card-w) * var(--u));
}

.circle {
  position: relative;
  width: calc(355 * var(--u));
  height: calc(355 * var(--u));
}

/* The exported image includes the ring and drop shadow, so it is larger than the circle. */
.circle img {
  position: absolute;
  top: -21.41%;
  left: -22.82%;
  width: 145.07%;
  height: auto;
  max-width: none;
}

.title,
.text {
  position: relative;
  margin-left: calc(var(--inset) * var(--u));
}

.title {
  margin-top: calc(27 * var(--u));
  font-size: calc(20 * var(--u));
  font-weight: 700;
  white-space: nowrap;
}

.text {
  width: calc(310 * var(--u));
  margin-top: calc(15 * var(--u));
  color: var(--muted);
  font-size: calc(16 * var(--u));
}

@media (max-width: 959.98px) {
  .stage {
    flex-direction: column;
    align-items: center;
    gap: 48px;
    width: 100%;
    height: auto;
    padding: 0 20px 62px;
  }

  .card {
    width: 100%;
    max-width: 350px;
  }

  .circle {
    width: 100%;
    max-width: 350px;
    height: auto;
    aspect-ratio: 1;
  }

  .title,
  .text {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }

  .title {
    margin-top: 24px;
    font-size: 16px;
    white-space: normal;
  }

  .text {
    max-width: 303px;
    margin: 9px auto 0;
  }
}
</style>
