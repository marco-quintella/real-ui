<script setup lang="ts">
import { RealCard, RealCardSection, RealCardTitle, RealCircularProgress } from '../../../src'
</script>

<template>
  <div class="vertical">
    <RealCard>
      <RealCardTitle>
        Color
      </RealCardTitle>

      <RealCardSection class="horizontal">
        <RealCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
        />
        <RealCircularProgress
          :size="90"
          :stroke="8"
          :value="35"
          center-color="secondary"
          color="info"
        />
        <RealCircularProgress
          :size="45"
          :stroke="25"
          :value="60"
          color="success"
        />
        <RealCircularProgress
          :size="50"
          :value="25"
          color="info"
        />
        <RealCircularProgress
          :size="75"
          :stroke="25"
          :underlay="false"
          :value="85"
          center-color="secondary"
          color="warning"
        />
        <RealCircularProgress
          :size="40"
          :stroke="8"
          :value="75"
          center-color="secondary"
          color="error"
        />
      </RealCardSection>
    </RealCard>

    <RealCard>
      <RealCardTitle>
        Reverse
      </RealCardTitle>

      <RealCardSection class="horizontal">
        <RealCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
          reverse
        />
        <RealCircularProgress
          :size="90"
          :stroke="8"
          :value="35"
          center-color="secondary"
          color="info"
          reverse
        />
        <RealCircularProgress
          :size="45"
          :stroke="25"
          :value="60"
          color="success"
          reverse
        />
        <RealCircularProgress
          :size="50"
          :value="25"
          color="info"
          reverse
        />
        <RealCircularProgress
          :size="75"
          :stroke="25"
          :underlay="false"
          :value="85"
          center-color="secondary"
          color="warning"
          reverse
        />
        <RealCircularProgress
          :size="40"
          :stroke="8"
          :value="75"
          center-color="secondary"
          color="error"
          reverse
        />
      </RealCardSection>
    </RealCard>

    <RealCard>
      <RealCardTitle>
        Indeterminate
      </RealCardTitle>

      <RealCardSection class="horizontal">
        <RealCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
          indeterminate
        />
      </RealCardSection>
    </RealCard>
  </div>
</template>

<style lang="sass" scoped>
.vertical
  display: flex
  flex-direction: column
  gap: 1rem

.horizontal
  display: flex
  justify-content: space-around
  gap: 1rem
  align-items: center
</style>
