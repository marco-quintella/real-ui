<script setup lang="ts">
import { MqCard, MqCardContent, MqCardTitle, MqCircularProgress } from '../../../src'
</script>

<template>
  <div>
    <MqCard>
      <MqCardTitle>
        Color
      </MqCardTitle>

      <MqCardContent>
        <MqCircularProgress />
        <MqCircularProgress color="secondary" />
        <MqCircularProgress color="success" />
        <MqCircularProgress color="info" />
        <MqCircularProgress color="warning" />
        <MqCircularProgress color="error" />
      </MqCardContent>
    </MqCard>
  </div>
</template>

<style lang="sass">

</style>
