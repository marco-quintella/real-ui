<script setup lang="ts">
import { RealCard, RealCardSection } from '../../../src'
</script>

<template>
  <div>
    <h1>Cards</h1>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <RealCard>
        <!-- <RealCardImageHeader src="https://picsum.photos/200" /> -->

        <!-- <RealCardTitle>
          Influencing the influencer
        </RealCardTitle> -->

        <RealCardSection>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </RealCardSection>
      </RealCard>

      <RealCard style="color: white; background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);">
        <RealCardSection>
          <div style="font-size: 1.5rem; font-weight: bold;">
            Cancun is back, better than ever!
          </div>
          <div>
            Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
          </div>
        </RealCardSection>

        <RealCardSection style="padding-top: 0;">
          <div>
            <strong>By: </strong> John Doe
          </div>
          <div>
            <strong>Published: </strong> 2 hours ago
          </div>
        </RealCardSection>
      </RealCard>
    </div>
  </div>
</template>

<style lang="sass">

</style>
