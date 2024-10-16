<script setup lang="ts">
import { computed } from 'vue'
import { useSizeDefaults } from '../../composables'

const {
  size = '3em',
  color = 'primary',
  thickness = 5,
} = defineProps<{
  size?: number | string
  color?: string
  thickness?: number
}>()

const cSize = computed(() => {
  return size in useSizeDefaults
    ? `${useSizeDefaults[size as keyof typeof useSizeDefaults]}px`
    : size
})

const classes = computed(() => ({
  'real-spinner': true,
  [`text-${color}`]: !!color,
}))
</script>

<template>
  <svg
    :class="classes"
    :width="cSize"
    :height="cSize"
    viewBox="25 25 50 50"
  >
    <circle
      class="path"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      :stroke-width="thickness"
      stroke="currentColor"
      stroke-miterlimit="10"
    />
  </svg>
</template>

<style lang="scss">
.real-spinner {
  vertical-align: middle;
  animation: real-spin 2s linear infinite;
  transform-origin: center center;

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: real-spinner-dash 1.5s ease-in-out infinite;
  }
}

@keyframes real-spin {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  25% {
    transform: rotate3d(0, 0, 1, 90deg);
  }

  50% {
    transform: rotate3d(0, 0, 1, 180deg);
  }

  75% {
    transform: rotate3d(0, 0, 1, 270deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 359deg);
  }
}

@keyframes real-spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
