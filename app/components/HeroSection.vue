<script setup lang="ts">
const ORANGE = '#fa6801'
const LONG = { boxW: 287.036, boxH: 323.735, length: 397, thickness: 36, angle: -49.12, color: ORANGE }
const THIN = { boxW: 209.44, boxH: 241.883, length: 316, thickness: 4, angle: -49.22, color: '#fff' }

const bars = [
  { ...LONG, x: 1023, y: 539 },
  { ...LONG, x: 1143, y: 616 },
  { ...THIN, x: 1114, y: 593 },
  { ...THIN, x: 1134.72, y: 608.94 },
]

// Position of each line's bounding box inside the "Garras" group, in design pixels.
const claws = [
  { x: 78.82, y: 110.4, w: 228.229, h: 231.248, t: 5.098 },
  { x: 113.75, y: 95.07, w: 227.386, h: 230.293, t: 3.823 },
  { x: 56, y: 113.48, w: 226.521, h: 229.314, t: 2.517 },
  { x: 32.49, y: 117.27, w: 228.651, h: 231.726, t: 5.735 },
  { x: 9.33, y: 120.7, w: 230.338, h: 233.637, t: 8.283 },
  { x: 0, y: 110.13, w: 228.651, h: 231.726, t: 5.735 },
  { x: 4.51, y: 85.57, w: 231.603, h: 235.069, t: 10.195 },
  { x: 9.36, y: 60.66, w: 227.386, h: 230.293, t: 3.823 },
  { x: 13.53, y: 36.46, w: 228.651, h: 231.726, t: 5.735 },
  { x: 29.8, y: 0, w: 227.808, h: 230.771, t: 4.46 },
]

const clawStyle = (c: (typeof claws)[number]) => ({
  left: `calc(${c.x + c.w / 2} * var(--u))`,
  top: `calc(${c.y + c.h / 2} * var(--u))`,
  height: `calc(${c.t} * var(--u))`,
})

const chevrons = [
  { n: 1, left: 10, top: 37, w: 129 },
  { n: 2, left: 16, top: 52, w: 117 },
  { n: 3, left: 22, top: 67, w: 105 },
  { n: 4, left: 25, top: 82, w: 97 },
]
</script>

<template>
  <section id="inicio" class="hero">
    <div class="band" aria-hidden="true" />

    <div class="stage">
      <div class="glow" aria-hidden="true"><div class="glow__shape" /></div>

      <div class="claws" aria-hidden="true">
        <img
          v-for="(c, i) in claws"
          :key="i"
          class="claw"
          :src="`/images/garras/${i}.svg`"
          alt=""
          :style="clawStyle(c)"
        >
      </div>

      <DiagonalBar v-for="(b, i) in bars" :key="i" class="hero__bar" v-bind="b" />

      <header class="top">
        <a href="#inicio" class="logo" aria-label="Júlio César Academia, início">
          <img src="/images/logo.jpg" alt="" width="229" height="185">
        </a>
        <nav class="nav" aria-label="Principal">
          <a href="#inicio">INICIO</a>
          <a href="#atividades">ATIVIDADES</a>
          <a href="#contatos">CONTATOS</a>
          <a href="#sobre">SOBRE NÓS</a>
        </nav>
      </header>

      <div class="intro">
        <h1 class="name">JÚLIO CÉSAR</h1>
        <p class="kind">ACADEMIA</p>
        <a class="cta" :href="WHATSAPP_URL" target="_blank" rel="noopener">MATRICULE-SE</a>
      </div>

      <!-- Temporário: é a foto do card "Ambiente". Trocar pelo export do frame "logo principal". -->
      <img
        class="photo"
        src="/images/ambiente.png"
        alt="Fachada da Júlio César Academia à noite"
        width="1030"
        height="1030"
        fetchpriority="high"
      >

      <div id="sobre" class="about">
        <h2 class="about__title">MUDE DE VIDA, TRANSFORME-SE, EVOLUA</h2>
        <p class="about__text">
          Transforme sua saúde e bem-estar hoje! Na Júlio Cesar, você encontra treinos personalizados,
          equipamentos de qualidade e um ambiente motivador para alcançar seus objetivos com qualidade e energia.
        </p>
        <a href="#atividades" class="more">
          CONHEÇA MAIS
          <img
            v-for="c in chevrons"
            :key="c.n"
            class="more__chevron"
            :src="`/images/chevrons/${c.n}.svg`"
            alt=""
            :style="{
              left: `calc(${c.left} * var(--u))`,
              top: `calc(${c.top} * var(--u))`,
              width: `calc(${c.w} * var(--u))`,
            }"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #fff calc(92 * var(--u)), #a4a4a4 calc(832 * var(--u)));
}

.band {
  position: absolute;
  inset: calc(415 * var(--u)) 0 0;
  z-index: 1;
  background: var(--ink);
}

.stage {
  position: relative;
  width: calc(1280 * var(--u));
  height: calc(832 * var(--u));
  margin-inline: auto;
}

.glow {
  position: absolute;
  left: calc(760 * var(--u));
  top: calc(-200 * var(--u));
  width: calc(2400 * var(--u));
  height: calc(1000 * var(--u));
  filter: blur(calc(56.75 * var(--u)));
}

.glow__shape {
  width: 100%;
  height: 100%;
  background: #fa6800;
  clip-path: polygon(4.79% 64.6%, 17.83% 10%, 100% 10%, 100% 100%, 20% 100%);
}

.claws {
  position: absolute;
  left: calc(1093 * var(--u));
  top: 0;
  width: calc(341.135 * var(--u));
  height: calc(354.334 * var(--u));
}

.claw {
  position: absolute;
  width: calc(319.817 * var(--u));
  max-width: none;
  transform: translate(-50%, -50%) rotate(-45.33deg) skewX(-3.88deg);
}

.hero__bar {
  z-index: 2;
}

.top {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  padding: calc(32 * var(--u)) 0 0 calc(27 * var(--u));
}

.logo {
  width: calc(103 * var(--u));
  height: calc(86 * var(--u));
  overflow: hidden;
}

.logo img {
  width: 103.35%;
  max-width: none;
  height: 100%;
}

.nav {
  display: flex;
  gap: calc(34 * var(--u));
  margin: calc(20 * var(--u)) 0 0 calc(64 * var(--u));
  color: var(--ink);
  font-size: calc(20 * var(--u));
  font-weight: 700;
}

.nav a:hover {
  color: var(--orange);
}

.intro {
  position: relative;
  z-index: 3;
  margin: calc(47 * var(--u)) 0 0 calc(204 * var(--u));
  color: var(--ink);
}

.name {
  font-size: calc(50 * var(--u));
  font-weight: 900;
  white-space: nowrap;
  margin-bottom: calc(-5.5 * var(--u));
}

.kind {
  font-size: calc(24 * var(--u));
  font-weight: 700;
}

.cta {
  display: grid;
  place-items: center;
  width: calc(231 * var(--u));
  height: calc(66 * var(--u));
  margin-top: calc(23 * var(--u));
  border-radius: calc(39 * var(--u));
  background: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), var(--orange);
  color: #fff;
  font-size: calc(18 * var(--u));
  font-weight: 700;
  transition: filter 0.15s;
}

.cta:hover {
  filter: brightness(1.08);
}

.photo {
  position: absolute;
  z-index: 3;
  left: calc(550.7 * var(--u));
  top: calc(29 * var(--u));
  width: calc(745.7 * var(--u));
  height: auto;
  max-width: none;
}

.about {
  position: absolute;
  z-index: 3;
  left: calc(78 * var(--u));
  top: calc(516 * var(--u));
  width: calc(551 * var(--u));
}

.about__title {
  font-size: calc(24 * var(--u));
  font-weight: 700;
}

.about__text {
  width: calc(510 * var(--u));
  margin-top: calc(9 * var(--u));
  color: var(--muted);
  font-size: calc(18 * var(--u));
}

.more {
  position: absolute;
  left: calc(162 * var(--u));
  top: calc(172 * var(--u));
  display: block;
  width: calc(154 * var(--u));
  height: calc(104 * var(--u));
  font-size: calc(18 * var(--u));
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}

.more__chevron {
  position: absolute;
  height: auto;
  max-width: none;
}

@media (max-width: 959.98px) {
  .hero {
    background: linear-gradient(180deg, #fff 92px, #a4a4a4 832px);
  }

  .band {
    top: 242px;
  }

  .stage {
    width: 100%;
    max-width: 430px;
    height: auto;
    padding-bottom: 54px;
  }

  .glow {
    left: -120px;
    top: -65px;
  }

  .claws {
    left: calc(100% - 66px);
    top: 15px;
    transform: scale(0.5164);
    transform-origin: 0 0;
  }

  .top {
    position: absolute;
    left: 11px;
    top: 12px;
    padding: 0;
  }

  .logo {
    width: 59px;
    height: 47px;
  }

  .nav {
    display: none;
  }

  .intro {
    position: absolute;
    inset: 61px 0 auto 70px;
    margin: 0;
  }

  .name {
    margin: 0;
    font-size: 20px;
  }

  .kind {
    font-size: 14px;
  }

  .cta {
    position: absolute;
    /* The hero's positioned ancestor here is .intro, 61px from the top and 70px from the left. */
    top: 404px;
    left: calc(50% - 77px - 35px);
    width: 154px;
    height: 44px;
    margin: 0;
    border-radius: 26px;
    font-size: 12px;
  }

  .photo {
    left: calc(50% - 215px + 48px - 76px);
    top: 32px;
    width: 483px;
  }

  .about {
    position: relative;
    left: auto;
    top: auto;
    width: 285px;
    margin: 0 auto;
    padding-top: 529px;
  }

  .about__title {
    font-size: 13px;
  }

  .about__text {
    width: 100%;
    margin-top: 7px;
    min-height: 102px;
    font-size: 14px;
  }

  .more {
    position: relative;
    left: auto;
    top: auto;
    margin: 25px auto 0;
  }
}
</style>
