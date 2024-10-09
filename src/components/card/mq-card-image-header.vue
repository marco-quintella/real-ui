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
  <div class="mq-card-image-header">
    <img :src="src" :alt="alt ?? 'Card image'">
  </div>
</template>

<style lang="sass">
.mq-card-image-header
  position: relative
  overflow: hidden
  border-top-left-radius: var(--mq-theme-card-border-radius)
  border-top-right-radius: var(--mq-theme-card-border-radius)
  overflow: hidden

  img
    display: block
    width: 100%
    height: auto
    border-top-left-radius: var(--mq-theme-card-border-radius)
    border-top-right-radius: var(--mq-theme-card-border-radius)
    aspect-ratio: v-bind(aspectRatio)
</style>
