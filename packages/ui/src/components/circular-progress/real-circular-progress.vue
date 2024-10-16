<script setup lang="ts">
import { computed } from 'vue'

const {
  centerColor,
  color = 'primary',
  indeterminate = false,
  max = 100,
  min = 0,
  reverse = false,
  size = 32,
  stroke = 4,
  underlay = true,
  value = 50,
} = defineProps<{
  centerColor?: string
  color?: string
  indeterminate?: boolean
  max?: number
  min?: number
  reverse?: boolean
  size?: number
  stroke?: number
  underlay?: boolean | string
  value?: number
}>()

const classes = computed(() => ({
  'real-circular-progress': true,
  [`text-${color}`]: true,
}))

const radius = computed(() => (size - stroke) / 2)
const sizeInPx = computed(() => `${size}px`)

const underlayColor = computed(() => typeof underlay === 'string'
  ? `text-${underlay}`
  : undefined)

const centerClasses = computed(() => ({
  'real-circular-progress--center': true,
  [`text-${centerColor}`]: true,
}))

const overlayClasses = computed(() => ({
  'real-circular-progress--overlay': true,
  'real-circular-progress--indeterminate': indeterminate,
}))

const svgClasses = computed(() => ({
  'real-circular-progress--svg-spin': indeterminate,
}))

const length = computed(() => 2 * Math.PI * radius.value)
const length50 = computed(() => -length.value / 4)
const lengthTo = computed(() => -length.value)

const filledLength = computed(() => length.value * (1 - value / max))
</script>

<template>
  <div
    :class="classes"
    role="progressbar"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="value"
  >
    <svg
      :class="svgClasses"
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 100 100"
      transform="rotate(-90)"
    >
      <circle
        v-if="!!underlay"
        class="real-circular-progress--underlay"
        :class="underlayColor"
        cx="50%"
        cy="50%"
        :r="radius"
        fill="transparent"
        :stroke-width="stroke"
        :stroke-dasharray="length"
        stroke-dashoffset="0"
      />

      <circle
        v-if="centerColor"
        :class="centerClasses"
        cx="50%"
        cy="50%"
        :r="radius - stroke / 2"
        fill="currentColor"
        :stroke-width="0"
      />

      <circle
        :class="overlayClasses"
        cx="50%"
        cy="50%"
        :r="radius"
        fill="transparent"
        :stroke-width="stroke"
        :stroke-dasharray="length"
        :stroke-dashoffset="reverse ? -filledLength : filledLength"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.real-circular-progress {
  & > svg {
    width: 100%;
    height: 100%;
    color: currentColor;
    stroke: currentColor;
    width: v-bind(sizeInPx);
    height: v-bind(sizeInPx);
  }

  &--underlay {
    color: rgba(var(--real-theme-foreground-text), 0.12);
  }

  &--overlay {
    color: currentColor;
    transition: stroke-dashoffset 0.3s ease;
  }

  &--center {
    color: currentColor;
    transition: color 0.3s ease;
  }

  &--overlay.real-circular-progress--indeterminate {
    animation: real-circular-progress-indeterminate 1.5s ease-in-out infinite;
  }

  &--svg-spin {
    transform-origin: 50% 50%;
    animation: real-circular-progress-spin 2s linear infinite;
  }
}

@keyframes real-circular-progress-indeterminate {
  0% {
    stroke-dasharray: 1, v-bind(length);
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: v-bind(length), v-bind(length);
    stroke-dashoffset: v-bind(length50);
  }

  to {
    stroke-dasharray: v-bind(length), v-bind(length);
    stroke-dashoffset: v-bind(lengthTo);
  }
}

@keyframes real-circular-progress-spin {
  0% {
    transform: rotate3d(0, 0, 1, 0);
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

  to {
    transform: rotate3d(0, 0, 1, 359deg);
  }
}
</style>
