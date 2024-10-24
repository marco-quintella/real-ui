<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { type RatioProps, useRatio } from '../../composables'
import { useTimeout } from '../../composables/timeout'
import { RealSpinner } from '../spinner'

const { src, alt, ratio, srcset, placeholderSrc } = defineProps<{
  alt?: string
  src?: string
  srcset?: string
  placeholderSrc?: string
} & RatioProps>()

const emit = defineEmits<{
  (e: 'load', src: string): void
  (e: 'error', err: Event): void
}>()

const naturalRatio = ref<number>()
const ratioStyle = useRatio(computed(() => ratio), naturalRatio)

const isLoaded = ref(false)
const isLoading = ref(false)
const hasError = ref(false)

const image = ref<{
  src?: string
  srcset?: string
}>()

const placeholderImg = computed(() => placeholderSrc
  ? {
      src: placeholderSrc,
    }
  : undefined)

const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout()

const classes = computed(() => ({
  'real-img': true,
}))

const styles = computed(() => ({}))

const imgClasses = computed(() => ({
  'real-img__img': true,
  'real-img__img--loaded': isLoaded.value,
}))

const imgStyles = computed(() => ({}))

function setLoading() {
  removeLoadTimeout()
  isLoading.value = true
}

function clearLoading() {
  removeLoadTimeout()
  isLoading.value = false
}

function onLoad({ target }: Event) {
  removeLoadTimeout()

  if (target instanceof HTMLImageElement) {
    naturalRatio.value = target.naturalHeight === 0
      ? 0.5
      : target.naturalWidth / target.naturalHeight

    waitForCompleteness(target as HTMLImageElement, 1)
  }
}

function waitForCompleteness(target: HTMLImageElement, retries: number) {
  isLoaded.value = false

  if (retries === 1000)
    return

  if (target.complete) {
    onReady(target)
  }
  else {
    registerLoadTimeout(() => {
      waitForCompleteness(target, retries + 1)
    }, 50)
  }
}

function onReady(target: HTMLImageElement) {
  clearLoading()
  isLoaded.value = true
  emit('load', target.src)
}

function onError(err: Event) {
  removeLoadTimeout()
  hasError.value = true
  isLoaded.value = false

  image.value = placeholderImg.value

  clearLoading()
  emit('error', err)
}

watch([() => src, () => srcset], () => {
  removeLoadTimeout()
  hasError.value = false

  if (!src && !srcset) {
    clearLoading()
    image.value = placeholderImg.value
  }
  else {
    setLoading()
  }

  image.value = {
    src,
    srcset,
  }
}, { immediate: true })
</script>

<template>
  <div :class="classes" :style="styles" role="img" :aria-label="alt">
    <div v-if="ratioStyle" :style="ratioStyle" />
    <div v-if="image" class="real-img__container">
      <img
        :alt="alt"
        :class="imgClasses"
        :src="image?.src"
        :srcset="image?.srcset"
        :style="imgStyles"
        aria-hidden="true"
        @error="onError"
        @load="onLoad"
      >
    </div>

    <transition name="real-transition--fade">
      <div v-if="!isLoading" class="real-img__content">
        <slot v-if="hasError" name="error" />
        <slot v-else />
      </div>
      <div v-else class="real-img__loading">
        <slot v-if="!!$slots.loading" name="loading" />
        <slot v-else>
          <RealSpinner />
        </slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.real-img {
  position: relative;
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;

  &__container {
    border-radius: inherit;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    opacity: 0;

    transition: opacity 0.3s ease-in;

    &--loaded {
      opacity: 1;
    }
  }

  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
