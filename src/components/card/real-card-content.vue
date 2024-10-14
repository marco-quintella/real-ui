<script setup lang="ts">

</script>

<template>
  <div class="real-card-content">
    <slot />
  </div>
</template>

<style lang="scss">
.real-card-content {
  padding: 24px;
  line-height: 1.75;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(var(--real-theme-foreground-text), 0.7);
}

.real-card-title + .real-card-content {
  padding-top: 0;
}
</style>
