<script setup lang="ts">
import { computed } from 'vue'

const {
  align,
  vertical,
} = defineProps<{
  align?: keyof typeof alignMap
  vertical?: boolean
}>()

const alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  stretch: 'stretch',
}

const classes = computed(() => ({
  'real-card-actions': true,
  [`real-card-actions--${alignMap[align ?? vertical ? 'stretch' : 'left']}`]: align,
  'real-card-actions--vertical': vertical,
  'real-card-actions--horizontal': !vertical,
}))
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="scss">
.real-card-actions {
  padding: var(--real-theme-card-actions-padding, 1rem);
  align-items: center;

  &--horizontal {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
