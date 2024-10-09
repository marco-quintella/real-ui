<script setup lang="ts">
import { computed } from 'vue'

const {
  variant = 'elevated',
} = defineProps<{
  variant?: 'elevated'
}>()

const classes = computed(() => ({
  'mq-card': true,
  'mq-card--elevated': variant === 'elevated',
}))
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="sass">
.mq-card
  display: block
  overflow: hidden
  overflow-wrap: break-word
  position: relative
  padding: 0
  text-decoration: none
  z-index: 0
  border-radius: var(--mq-theme-card-border-radius)

  &--elevated
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1)
    transition: box-shadow 0.3s ease
    will-change: box-shadow
    z-index: 1
    background: rgb(var(--mq-theme-foreground))
    color: rgb(var(--mq-theme-foreground-text))
</style>
