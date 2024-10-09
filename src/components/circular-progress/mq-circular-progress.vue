<script setup lang="ts">
import { computed } from 'vue'

const {
  color = 'primary',
  min = 0,
  max = 100,
  size = 32,
  stroke = 4,
  underlay = true,
} = defineProps<{
  color?: string
  min?: number
  max?: number
  size?: number
  stroke?: number
  underlay?: boolean | string
}>()

const model = defineModel<number>({ default: 50 })

const classes = computed(() => ({
  'mq-circular-progress': true,
  [`text-${color}`]: true,
}))

const radius = computed(() => (size - stroke) / 2)
const sizeInPx = computed(() => `${size}px`)

const underlayColor = computed(() => typeof underlay === 'string'
  ? `text-${underlay}`
  : undefined)

const length = computed(() => 2 * Math.PI * radius.value)
const filledLength = computed(() => length.value * (1 - model.value / max))
</script>

<template>
  <div
    :class="classes"
    role="progressbar"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="model"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 100 100"
      transform="rotate(-90)"
    >
      <circle
        v-if="!!underlay"
        class="mq-circular-progress--underlay"
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
        class="mq-circular-progress--overlay"
        cx="50%"
        cy="50%"
        :r="radius"
        fill="transparent"
        :stroke-width="stroke"
        :stroke-dasharray="length"
        :stroke-dashoffset="filledLength"
      />
    </svg>
  </div>
</template>

<style lang="sass" scoped>
.mq-circular-progress
  width: v-bind(sizeInPx)
  height: v-bind(sizeInPx)

  & > svg
    width: 100%
    height: 100%
    color: currentColor
    stroke: currentColor

  &--underlay
    color: rgba(var(--mq-theme-foreground-text), .12)

  &--overlay
    color: currentColor
    transition: stroke-dashoffset 0.3s ease
</style>
