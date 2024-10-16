<template>
  <ul>
    <li v-for="component in components" :key="component">
      <a :href="`/components/${component}`">
        {{ component }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const components = ref([
  'button',
  'card',
  'circular-progress',
  'separator',
  'spinner'
])
</script>
