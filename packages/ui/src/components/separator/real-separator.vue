<script setup lang="ts">
import { computed } from 'vue'

const {
  vertical,
  inset,
  spaced,
  color,
  size,
} = defineProps<{
  spaced?: boolean | string
  inset?: boolean | string
  vertical?: boolean | string
  color?: string
  size?: string
}>()

const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
}

const orientation = computed(() => vertical === true ? 'vertical' : 'horizontal')

const orientationClass = computed(() => `real-separator--${orientation.value}`)

const insetClass = computed(() => inset === true
  ? `${orientationClass.value}-inset`
  : inset === 'item'
    ? `${orientationClass.value}-item-inset`
    : inset === 'item-thumbnail'
      ? `${orientationClass.value}-item-thumbnail-inset`
      : '')

const classes = computed(() => ({
  'real-separator': true,
  [orientationClass.value]: true,
  [insetClass.value]: !!inset,
  [`bg-${color}`]: !!color,
}))

const styles = computed(() => {
  const _styles: Record<string, string | number> = {}

  if (size)
    _styles[vertical === true ? 'width' : 'height'] = size

  if (spaced) {
    const size = spaced === true
      ? `${margins.md}px`
      : spaced in margins
        ? `${margins[spaced as keyof typeof margins]}px`
        : spaced

    const dir = vertical
      ? ['Left', 'Right']
      : ['Top', 'Bottom']

    _styles[`margin${dir[0]}`] = _styles[`margin${dir[1]}`] = size
  }

  return _styles
})
</script>

<template>
  <hr
    :class="classes"
    :style="styles"
    :aria-orientation="orientation"
  >
</template>

<style lang="scss">
.real-separator {
  border: 0;
  background-color: rgba(var(--real-theme-separator-color));
  margin: 0;
  transition:
    background 0.3s,
    opacity 0.3s;
  flex-shrink: 0;

  &--horizontal {
    display: block;
    height: var(--real-theme-separator-width, 1px);

    &-inset {
      margin-left: var(--real-theme-separator-inset-horizontal-margin, 1rem);
      margin-right: var(--real-theme-separator-inset-horizontal-margin, 1rem);
    }

    &-item-inset {
      margin-left: var(--real-theme-separator-item-inset-margin);
      margin-right: 0;
    }

    &-item-thumbnail-inset {
      margin-left: var(--real-theme-separator-item-thumbnail-inset-margin);
      margin-right: 0;
    }
  }

  &--vertical {
    width: var(--real-theme-separator-width, 1px);
    height: auto;
    align-self: stretch;

    &-inset {
      margin-top: var(--real-theme-separator-inset-vertical-margin, 1rem);
      margin-bottom: var(--real-theme-separator-inset-vertical-margin, 1rem);
    }
  }
}
</style>
