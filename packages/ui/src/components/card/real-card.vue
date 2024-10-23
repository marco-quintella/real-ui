<script setup lang="ts">
import { computed } from 'vue'

const {
  tag = 'div',
  square,
  flat,
  bordered,
} = defineProps<{
  tag?: string
  flat?: boolean
  square?: boolean
  bordered?: boolean
}>()

const classes = computed(() => ({
  'real-card': true,
  'real-card--bordered': bordered,
  'real-card--flat': flat,
  'real-card--square': square,
}))
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
.real-card {
  box-shadow: var(--real-theme-card-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
  border-radius: var(--real-theme-card-border-radius, 0.5rem);
  background: rgba(var(--real-theme-card-background, '255, 255, 255'));
  vertical-align: top;
  position: relative;

  &--bordered {
    border: 1px solid rgba(var(--real-theme-card-border-color, '0, 0, 0'));
  }

  > img {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0;
  }

  > div,
  > img {
    &:first-child {
      border-top: 0;
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }

    &:last-child {
      border-bottom: 0;
      border-bottom-right-radius: inherit;
      border-bottom-left-radius: inherit;
    }
  }
}
</style>
