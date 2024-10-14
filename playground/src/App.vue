<script setup lang="ts">
</script>

<template>
  <div class="main">
    <div class="menu">
      <div>Menu</div>

      <router-link to="/button">
        Button
      </router-link>

      <router-link to="/card">
        Card
      </router-link>

      <router-link to="/circular-progress">
        Circular Progress
      </router-link>

      <router-link to="/separator">
        Separator
      </router-link>

      <router-link to="/spinner">
        Spinner
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
