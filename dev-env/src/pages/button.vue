<script setup lang="ts">
import { RealBtn } from 'real-ui-dev'
</script>

<template>
  <div class="list">
    <div>
      <h2>Colors</h2>
      <p>The <code>color</code> prop is used to change background color.</p>

      <div class="horizontal">
        <RealBtn>
          Primary
        </RealBtn>

        <RealBtn color="secondary">
          Secondary
        </RealBtn>

        <RealBtn color="success">
          Success
        </RealBtn>

        <RealBtn color="info">
          Info
        </RealBtn>

        <RealBtn color="warning">
          Warning
        </RealBtn>

        <RealBtn color="error">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Outlined</h2>
      <p>The <code>outlined</code> prop is used to create outlined buttons.</p>

      <div class="horizontal">
        <RealBtn variant="outlined">
          Primary
        </RealBtn>

        <RealBtn color="secondary" variant="outlined">
          Secondary
        </RealBtn>

        <RealBtn color="success" variant="outlined">
          Success
        </RealBtn>

        <RealBtn color="info" variant="outlined">
          Info
        </RealBtn>

        <RealBtn color="warning" variant="outlined">
          Warning
        </RealBtn>

        <RealBtn color="error" variant="outlined">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Flat</h2>
      <p>The <code>flat</code> prop is used to create flat buttons.</p>

      <div class="horizontal">
        <RealBtn variant="flat">
          Primary
        </RealBtn>

        <RealBtn color="secondary" variant="flat">
          Secondary
        </RealBtn>

        <RealBtn color="success" variant="flat">
          Success
        </RealBtn>

        <RealBtn color="info" variant="flat">
          Info
        </RealBtn>

        <RealBtn color="warning" variant="flat">
          Warning
        </RealBtn>

        <RealBtn color="error" variant="flat">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Rounded</h2>
      <p>Use <code>rounded</code> prop to control the border radius of the button.</p>

      <div class="horizontal">
        <RealBtn>
          Normal Button
        </RealBtn>

        <RealBtn rounded="lg" color="secondary">
          Rounded Button
        </RealBtn>

        <RealBtn :rounded="0" color="success">
          Square Button
        </RealBtn>

        <RealBtn rounded="pill" color="info">
          Pill Button
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Text</h2>
      <p>Use <code>text</code> variant option to create text button. Text buttons have no box shadow and no background.</p>

      <div class="horizontal">
        <RealBtn variant="text">
          Primary
        </RealBtn>

        <RealBtn color="secondary" variant="text">
          Secondary
        </RealBtn>

        <RealBtn color="success" variant="text">
          Success
        </RealBtn>

        <RealBtn color="info" variant="text">
          Info
        </RealBtn>

        <RealBtn color="warning" variant="text">
          Warning
        </RealBtn>

        <RealBtn color="error" variant="text">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Plain</h2>
      <p>Use <code>plain</code> variant to create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.</p>

      <div class="horizontal">
        <RealBtn variant="plain">
          Primary
        </RealBtn>

        <RealBtn color="secondary" variant="plain">
          Secondary
        </RealBtn>

        <RealBtn color="success" variant="plain">
          Success
        </RealBtn>

        <RealBtn color="info" variant="plain">
          Info
        </RealBtn>

        <RealBtn color="warning" variant="plain">
          Warning
        </RealBtn>

        <RealBtn color="error" variant="plain">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Tonal</h2>
      <p>Use <code>tonal</code> variant option to create a light background button.</p>

      <div class="horizontal">
        <RealBtn variant="tonal">
          Primary
        </RealBtn>

        <RealBtn color="secondary" variant="tonal">
          Secondary
        </RealBtn>

        <RealBtn color="success" variant="tonal">
          Success
        </RealBtn>

        <RealBtn color="info" variant="tonal">
          Info
        </RealBtn>

        <RealBtn color="warning" variant="tonal">
          Warning
        </RealBtn>

        <RealBtn color="error" variant="tonal">
          Error
        </RealBtn>
      </div>
    </div>

    <div>
      <h2>Sizing</h2>
      <p>Buttons can be given different sizing options to fit a multitude of scenarios</p>

      <div class="horizontal">
        <RealBtn size="xs">
          Extra Small
        </RealBtn>

        <RealBtn size="sm">
          Small
        </RealBtn>

        <RealBtn size="md">
          Medium
        </RealBtn>

        <RealBtn size="lg">
          Large
        </RealBtn>

        <RealBtn size="xl">
          Extra Large
        </RealBtn>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.list
  display: flex
  flex-direction: column
  gap: 1rem

.horizontal
  display: flex
  gap: 1rem
</style>
