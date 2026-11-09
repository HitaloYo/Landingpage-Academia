<script setup lang="ts">
const props = defineProps<{
  /** Left and top of the rotated bar's bounding box, in design pixels. */
  x: number
  y: number
  /** Size of that bounding box. */
  boxW: number
  boxH: number
  /** Unrotated bar size. */
  length: number
  thickness: number
  angle: number
  color: string
}>()

const px = (n: number) => `calc(${n} * var(--u))`

const style = computed(() => ({
  left: px(props.x + props.boxW / 2),
  top: px(props.y + props.boxH / 2),
  width: px(props.length),
  height: px(props.thickness),
  background: props.color,
  transform: `translate(-50%, -50%) rotate(${props.angle}deg)`,
}))
</script>

<template>
  <div class="bar" :style="style" aria-hidden="true" />
</template>

<style scoped>
.bar {
  position: absolute;
}

@media (max-width: 959.98px) {
  .bar {
    display: none;
  }
}
</style>
