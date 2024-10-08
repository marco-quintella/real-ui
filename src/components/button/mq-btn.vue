<script setup lang="ts">
import { computed } from 'vue'

const {
  color = 'primary',
  size = 'md',
  density = 'normal',
  absolute,
  fixed,
  loading,
  disabled,
  variant = 'elevated',
  rounded,
} = defineProps<{
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  density?: 'dense' | 'normal' | 'loose'
  absolute?: boolean
  fixed?: boolean
  loading?: boolean
  disabled?: boolean
  rounded?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'pill'
  variant?: 'flat' | 'elevated' | 'outlined' | 'text' | 'tonal' | 'plain'
}>()

const classes = computed(() => {
  return {
    'mq-btn': true,
    [`bg-${color} text-over-${color}`]: variant !== 'outlined' && variant !== 'text' && variant !== 'plain' && variant !== 'tonal',
    [`text-${color}`]: variant === 'outlined' || variant === 'text' || variant === 'plain' || variant === 'tonal',
    [`bg-${color}`]: variant === 'tonal',
    'mq-btn--size-x-small': size === 'xs',
    'mq-btn--size-small': size === 'sm',
    'mq-btn--size-medium': size === 'md',
    'mq-btn--size-large': size === 'lg',
    'mq-btn--size-x-large': size === 'xl',
    'mq-btn--density-dense': density === 'dense',
    'mq-btn--density-normal': density === 'normal',
    'mq-btn--density-loose': density === 'loose',
    'mq-btn--absolute': absolute,
    'mq-btn--fixed': fixed,
    'mq-btn--loading': loading,
    'mq-btn--disabled': disabled,
    'mq-btn--flat': variant === 'flat',
    'mq-btn--elevated': variant === 'elevated',
    'mq-btn--outlined': variant === 'outlined',
    'mq-btn--text': variant === 'text',
    'mq-btn--tonal': variant === 'tonal',
    'mq-btn--plain': variant === 'plain',
    [`border-${color}`]: variant === 'outlined',
  }
})

const overlayClasses = computed(() => {
  return {
    'mq-btn__overlay': true,
    [`bg-${color}`]: variant === 'outlined' || variant === 'text' || variant === 'plain',
  }
})

const borderRadius = computed(() => {
  if (typeof rounded === 'number') {
    return `${rounded}px`
  }

  switch (rounded) {
    case 'xs':
      return '2px'
    case 'sm':
      return '4px'
    case 'md':
      return '6px'
    case 'lg':
      return '8px'
    case 'xl':
      return '12px'
    case 'pill':
      return '9999px'
    default:
      return '6px'
  }
})
</script>

<template>
  <button :class="classes">
    <span :class="overlayClasses" />
    <span class="mq-btn__underlay" />

    <span class="mq-btn__content">
      <slot />
    </span>
  </button>
</template>

<style lang="sass">
.mq-btn
  align-items: center
  border-radius: v-bind(borderRadius)
  border-style: solid
  border-width: 0
  display: inline-flex
  flex-shrink: 0
  font-weight: 500
  grid-template-areas: "prepend content append"
  grid-template-columns: max-content auto max-content
  justify-content: center
  letter-spacing: .0269rem
  line-height: 1.375rem
  max-width: 100%
  outline: none
  position: relative
  text-decoration: none
  text-indent: .0269rem
  text-transform: capitalize
  transition: all .135s ease
  transition-duration: .28s
  transition-property: box-shadow, transform, opacity, background
  transition-timing-function: cubic-bezier(.4, 0, .2, 1)
  user-select: none
  -moz-user-focus: none
  -ms-user-select: none
  -webkit-user-select: none
  vertical-align: middle

  &--size-x-small
    --mq-btn-size: .6875rem
    --mq-btn-height: 22px
    font-size: var(--mq-btn-size)
    min-width: 40px
    padding: 0 12px

  &--size-small
    --mq-btn-size: .875rem
    --mq-btn-height: 28px
    font-size: var(--mq-btn-size)
    min-width: 48px
    padding: 0 16px

  &--size-medium
    --mq-btn-size: 1rem
    --mq-btn-height: 36px
    font-size: var(--mq-btn-size)
    min-width: 56px
    padding: 0 20px

  &--size-large
    --mq-btn-size: 1.125rem
    --mq-btn-height: 44px
    font-size: var(--mq-btn-size)
    min-width: 64px
    padding: 0 24px

  &--size-x-large
    --mq-btn-size: 1.25rem
    --mq-btn-height: 52px
    font-size: var(--mq-btn-size)
    min-width: 72px
    padding: 0 28px

  &--density-dense
    height: calc(var(--mq-btn-height) - 12px)

  &--density-loose
    height: calc(var(--mq-btn-height) + 12px)

  &--density-normal
    height: var(--mq-btn-height)

  &--border
    border-width: thin
    box-shadow: none

  &--absolute
    position: absolute

  &--fixed
    position: fixed

  &:hover > &__overlay, &:focus > &__overlay
    opacity: var(--mq-hover-opacity)

  &:focus-visible > &__overlay
    opacity: var(--mq-focus-opacity)
    background-color: white

  &__content
    z-index: 0

  &__overlay
    transition: none
    border-radius: inherit
    opacity: 0
    transition: opacity .2s ease-in-out
    background: black

  &__overlay, &__underlay
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    pointer-events: none

  &:active
    transform: scale(.98)

  &--outlined:active > &__overlay
    opacity: .15

  &:not(&--loading) &__overlay
    transition: opacity .15s ease-in-out
    will-change: opacity

  &--elevated:not(&--disabled)
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .06)

  &--outlined
    background-color: transparent !important
    border-width: thin

  &--text, &--plain
    background-color: transparent !important
    box-shadow: none

  &--flat, &--text, &--plain, &--tonal
    box-shadow: none

  &--plain
    opacity: .6
    transition: opacity .15s ease-in-out
    will-change: opacity

    &:hover
      opacity: 1

  &--plain:hover > &__overlay
    opacity: 0

  &--plain:active > &__overlay
    opacity: .15
    transition: opacity .15s ease-in-out

  &--tonal
    --mq-background-opacity: .15

  &--tonal:hover
    --mq-background-opacity: .2

  &--tonal:active > &__overlay
    opacity: .1
</style>
