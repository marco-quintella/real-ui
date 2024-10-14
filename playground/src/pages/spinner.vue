<script setup lang="ts">
import { RealCard, RealCardContent, RealCardTitle, RealSpinner } from '../../../src'
</script>

<template>
  <div>
    <h1>Cards</h1>
    <div>
      <RealCard>
        <RealCardTitle>
          Spinner
        </RealCardTitle>

        <RealCardContent class="horizontal">
          <RealSpinner />
          <RealSpinner :thickness="2" />
          <RealSpinner size="2em" :thickness="10" />
        </RealCardContent>
      </RealCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.horizontal {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
