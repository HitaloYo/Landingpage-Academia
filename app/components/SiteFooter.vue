<script setup lang="ts">
const items = [
  {
    key: 'local',
    icon: '/images/icon-local.png',
    label: 'Quadra: V01, Casa: 01, Residencial Teresina sul ll',
    gap: 7.4,
    iconW: 24.27,
    iconH: 37.87,
  },
  {
    key: 'email',
    icon: '/images/icon-envelope.svg',
    label: 'kelly.slim@hotmail.com',
    href: 'mailto:kelly.slim@hotmail.com',
    gap: 51,
    iconW: 21,
    iconH: 15,
  },
  {
    key: 'telefone',
    icon: '/images/icon-phone.png',
    label: '(86) 9 8805-6599',
    href: 'tel:+5586988056599',
    gap: 8.7,
    iconW: 23.48,
    iconH: 23.48,
  },
  {
    key: 'instagram',
    icon: '/images/icon-instagram.svg',
    label: 'Acesse aqui',
    srLabel: 'Instagram: ',
    href: INSTAGRAM_URL || undefined,
    gap: 7.2,
    iconW: 25.33,
    iconH: 25,
  },
  {
    key: 'whatsapp',
    icon: '/images/icon-whatsapp.png',
    label: 'Acesse aqui',
    srLabel: 'WhatsApp: ',
    href: WHATSAPP_URL,
    gap: 18,
    iconW: 25,
    iconH: 25,
  },
]
</script>

<template>
  <footer id="contatos" class="footer">
    <div class="stage">
      <ul class="list">
        <li v-for="item in items" :key="item.key">
          <a
            class="item"
            :href="item.href"
            :style="{ '--gap': item.gap, '--icon-w': item.iconW, '--icon-h': item.iconH }"
          >
            <img class="icon" :src="item.icon" alt="">
            <span><span v-if="item.srLabel" class="sr">{{ item.srLabel }}</span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
      <p class="credit">Site desenvolvido por <strong>Ruan Jarso</strong></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer);
}

.stage {
  width: calc(1280 * var(--u));
  height: calc(141 * var(--u));
  margin-inline: auto;
  padding: calc(35 * var(--u)) 0 0 calc(57 * var(--u));
}

.list {
  display: grid;
  grid-template-columns:
    calc(226 * var(--u)) calc(312 * var(--u)) calc(253 * var(--u)) calc(233 * var(--u)) 1fr;
  align-items: center;
  height: calc(50 * var(--u));
  margin: 0;
  padding: 0;
  list-style: none;
}

.item {
  display: flex;
  align-items: center;
  gap: calc(var(--gap) * var(--u));
  font-size: calc(13 * var(--u));
}

.icon {
  width: calc(var(--icon-w) * var(--u));
  height: calc(var(--icon-h) * var(--u));
  flex: none;
  object-fit: contain;
}

li:first-child .item span {
  max-width: calc(150 * var(--u));
  font-size: calc(12 * var(--u));
}

.credit {
  margin: calc(24 * var(--u)) 0 0 calc(421 * var(--u));
  color: rgba(255, 255, 255, 0.88);
  font-size: calc(16 * var(--u));
}

.credit strong {
  color: #fff;
}

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: 959.98px) {
  .stage {
    width: 100%;
    height: auto;
    padding: 78px 20px 25px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 72px;
    width: fit-content;
    height: auto;
    margin-inline: auto;
  }

  .item {
    gap: 9px;
  }

  .icon {
    width: 35px;
    height: 35px;
  }

  li:first-child .icon {
    height: 55px;
  }

  li:first-child .item span {
    max-width: 212px;
    font-size: 13px;
  }

  .credit {
    margin: 120px 0 0;
    text-align: center;
  }
}
</style>
