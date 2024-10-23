<script setup lang="ts">
import { RealCard, RealBtn, RealCardSection, RealSeparator, RealCardActions } from 'real-ui-dev'
import { ref } from 'vue';

const lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
</script>

<template>
  <div>
    <h1>Cards</h1>

    <h3>Basic</h3>
    <div class="flex flex-wrap gap-4 items-start">
      <RealCard class="w-full max-w-xs">
        <RealCardSection>
          {{ lorem }}
        </RealCardSection>
      </RealCard>

      <RealCard
        class="text-white max-w-xs w-full"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);"
      >
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealCardSection class="pt-0">
          {{ lorem }}
        </RealCardSection>
      </RealCard>

      <RealCard bordered flat class="max-w-xs w-full">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
        </RealCardSection>

        <RealCardSection class="pt-0">
          {{ lorem }}
        </RealCardSection>

        <RealSeparator inset />

        <RealCardSection>
          {{ lorem }}
        </RealCardSection>
      </RealCard>
    </div>

    <h3>With Actions</h3>
    <div class="flex flex-wrap gap-4 items-start">
      <RealCard class="w-full max-w-xs bg-secondary text-white">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealCardSection>
          {{ lorem }}
        </RealCardSection>

        <RealSeparator />

        <RealCardActions>
          <RealBtn>Action 1</RealBtn>
          <RealBtn>Action 2</RealBtn>
        </RealCardActions>
      </RealCard>

      <RealCard class="w-full max-w-xs">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealSeparator />

        <RealCardActions vertical>
          <RealBtn variant="plain">Action 1</RealBtn>
          <RealBtn variant="plain">Action 2</RealBtn>
        </RealCardActions>
      </RealCard>

      <RealCard class="w-full max-w-xs bg-secondary text-white">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealCardSection>
          {{ lorem }}
        </RealCardSection>

        <RealSeparator />

        <RealCardActions class="justify-end">
          <RealBtn>Action 1</RealBtn>
          <RealBtn>Action 2</RealBtn>
        </RealCardActions>
      </RealCard>

      <RealCard class="w-full max-w-xs">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealSeparator />

        <RealCardActions vertical class="items-end">
          <RealBtn variant="plain">Action 1</RealBtn>
          <RealBtn variant="plain">Action 2</RealBtn>
        </RealCardActions>
      </RealCard>
    </div>

    <h3>With Media</h3>
    <div class="flex flex-wrap gap-4 items-start">
      <RealCard class="w-full max-w-xs bg-secondary text-white">
        <img src="https://picsum.photos/360/240">
        <RealCardSection>
          <div class="text-2xl font-bold">
            Our Changing Planet
          </div>
          <div class="text-sm font-semibold">
            by John Doe
          </div>
        </RealCardSection>

        <RealCardSection>
          {{ lorem }}
        </RealCardSection>
      </RealCard>
    </div>
  </div>
</template>
