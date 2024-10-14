<script setup lang="ts">
import { RealCard, RealCardSection, RealSeparator } from '../../../src'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <h1>Separator</h1>

    <RealCard>
      <RealCardSection>
        <div style="font-size: 1.5rem; font-weight: 700;">
          Cancun
        </div>
        <div>by John Doe</div>
      </RealCardSection>

      <RealSeparator />

      <RealCardSection>
        <div style="font-size: 1.5rem; font-weight: 700;">
          Paris
        </div>
        <div>by Jane Doe</div>
      </RealCardSection>
    </RealCard>

    <RealCard style="display: flex;">
      <RealCardSection>Link</RealCardSection>
      <RealSeparator vertical />
      <RealCardSection>Link</RealCardSection>
      <RealSeparator vertical />
      <RealCardSection>Link</RealCardSection>
    </RealCard>
  </div>
</template>

<style lang="scss">

</style>
