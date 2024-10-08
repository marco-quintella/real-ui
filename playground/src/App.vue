<script setup lang="ts">
</script>

<template>
  <div class="mq-theme-light main">
    <div class="menu">
      <div>Menu</div>

      <router-link to="/button">
        Button
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<style scoped lang="sass">
.main
  display: flex

.menu
  display: flex
  flex-direction: column
  padding-right: 1rem
</style>
