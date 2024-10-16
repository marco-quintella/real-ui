<script setup lang="ts">
const {
  tag = 'div',
} = defineProps<{
  tag?: string
}>()
</script>

<template>
  <component :is="tag" class="real-card-section">
    <slot />
  </component>
</template>

<style lang="scss">
.real-card-section {
  position: relative;
  padding: var(--real-theme-card-section-padding, 1rem);
}
</style>
