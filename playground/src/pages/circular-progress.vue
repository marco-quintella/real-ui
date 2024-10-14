<script setup lang="ts">
import { MqCard, MqCardContent, MqCardTitle, MqCircularProgress } from '../../../src'
</script>

<template>
  <div class="vertical">
    <MqCard>
      <MqCardTitle>
        Color
      </MqCardTitle>

      <MqCardContent class="horizontal">
        <MqCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
        />
        <MqCircularProgress
          :size="90"
          :stroke="8"
          :value="35"
          center-color="secondary"
          color="info"
        />
        <MqCircularProgress
          :size="45"
          :stroke="25"
          :value="60"
          color="success"
        />
        <MqCircularProgress
          :size="50"
          :value="25"
          color="info"
        />
        <MqCircularProgress
          :size="75"
          :stroke="25"
          :underlay="false"
          :value="85"
          center-color="secondary"
          color="warning"
        />
        <MqCircularProgress
          :size="40"
          :stroke="8"
          :value="75"
          center-color="secondary"
          color="error"
        />
      </MqCardContent>
    </MqCard>

    <MqCard>
      <MqCardTitle>
        Reverse
      </MqCardTitle>

      <MqCardContent class="horizontal">
        <MqCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
          reverse
        />
        <MqCircularProgress
          :size="90"
          :stroke="8"
          :value="35"
          center-color="secondary"
          color="info"
          reverse
        />
        <MqCircularProgress
          :size="45"
          :stroke="25"
          :value="60"
          color="success"
          reverse
        />
        <MqCircularProgress
          :size="50"
          :value="25"
          color="info"
          reverse
        />
        <MqCircularProgress
          :size="75"
          :stroke="25"
          :underlay="false"
          :value="85"
          center-color="secondary"
          color="warning"
          reverse
        />
        <MqCircularProgress
          :size="40"
          :stroke="8"
          :value="75"
          center-color="secondary"
          color="error"
          reverse
        />
      </MqCardContent>
    </MqCard>

    <MqCard>
      <MqCardTitle>
        Indeterminate
      </MqCardTitle>

      <MqCardContent class="horizontal">
        <MqCircularProgress
          :size="50"
          :underlay="false"
          :value="75"
          indeterminate
        />
      </MqCardContent>
    </MqCard>
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
