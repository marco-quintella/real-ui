<script setup lang="ts">
import { computed } from 'vue'

const { ratio } = defineProps<{
  src?: string
  alt?: string
  ratio?: string | number
}>()

const aspectRatio = computed(() => ratio ?? '16 / 9')
</script>

<template>
  <div class="real-card-image-header">
    <img :src="src" :alt="alt ?? 'Card image'">
  </div>
</template>

<style lang="scss" scoped>
.real-card-image-header {
  position: relative;
  overflow: hidden;
  border-top-left-radius: var(--real-theme-card-border-radius);
  border-top-right-radius: var(--real-theme-card-border-radius);
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: var(--real-theme-card-border-radius);
    border-top-right-radius: var(--real-theme-card-border-radius);
    aspect-ratio: v-bind(aspectRatio);
  }
}
</style>
