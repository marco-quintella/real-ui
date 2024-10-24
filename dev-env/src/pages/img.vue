<template>
  <div>
    <h1>Img</h1>
    <div class="flex gap-4 items-start justify-start">
      <real-img
        src="https://picsum.photos/200/300"
        class="w-150px"
      />

      <real-img
        src="https://picsum.photos/500"
        :ratio="1"
        class="w-150px"
        placeholder-src="https://img.pokemondb.net/artwork/large/pikachu.jpg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RealImg } from 'real-ui-dev';
</script>

<style lang="scss">

</style>
