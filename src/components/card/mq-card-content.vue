<script setup lang="ts">

</script>

<template>
  <div class="mq-card-content">
    <slot />
  </div>
</template>

<style lang="sass">
.mq-card-content
  padding: 24px
  line-height: 1.75
  font-size: 1rem
  font-weight: 400
  color: rgba(var(--mq-theme-foreground-text), 0.7)

.mq-card-title + .mq-card-content
  padding-top: 0
</style>
