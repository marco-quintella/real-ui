<script setup lang="ts">
import { MqBtn } from '../../../src'
</script>

<template>
  <div class="list">
    <div>
      <h2>Colors</h2>
      <p>The <code>color</code> prop is used to change background color.</p>

      <div class="horizontal">
        <MqBtn>
          Primary
        </MqBtn>

        <MqBtn color="secondary">
          Secondary
        </MqBtn>

        <MqBtn color="success">
          Success
        </MqBtn>

        <MqBtn color="info">
          Info
        </MqBtn>

        <MqBtn color="warning">
          Warning
        </MqBtn>

        <MqBtn color="error">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Outlined</h2>
      <p>The <code>outlined</code> prop is used to create outlined buttons.</p>

      <div class="horizontal">
        <MqBtn variant="outlined">
          Primary
        </MqBtn>

        <MqBtn color="secondary" variant="outlined">
          Secondary
        </MqBtn>

        <MqBtn color="success" variant="outlined">
          Success
        </MqBtn>

        <MqBtn color="info" variant="outlined">
          Info
        </MqBtn>

        <MqBtn color="warning" variant="outlined">
          Warning
        </MqBtn>

        <MqBtn color="error" variant="outlined">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Flat</h2>
      <p>The <code>flat</code> prop is used to create flat buttons.</p>

      <div class="horizontal">
        <MqBtn variant="flat">
          Primary
        </MqBtn>

        <MqBtn color="secondary" variant="flat">
          Secondary
        </MqBtn>

        <MqBtn color="success" variant="flat">
          Success
        </MqBtn>

        <MqBtn color="info" variant="flat">
          Info
        </MqBtn>

        <MqBtn color="warning" variant="flat">
          Warning
        </MqBtn>

        <MqBtn color="error" variant="flat">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Rounded</h2>
      <p>Use <code>rounded</code> prop to control the border radius of the button.</p>

      <div class="horizontal">
        <MqBtn>
          Normal Button
        </MqBtn>

        <MqBtn rounded="lg" color="secondary">
          Rounded Button
        </MqBtn>

        <MqBtn :rounded="0" color="success">
          Square Button
        </MqBtn>

        <MqBtn rounded="pill" color="info">
          Pill Button
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Text</h2>
      <p>Use <code>text</code> variant option to create text button. Text buttons have no box shadow and no background.</p>

      <div class="horizontal">
        <MqBtn variant="text">
          Primary
        </MqBtn>

        <MqBtn color="secondary" variant="text">
          Secondary
        </MqBtn>

        <MqBtn color="success" variant="text">
          Success
        </MqBtn>

        <MqBtn color="info" variant="text">
          Info
        </MqBtn>

        <MqBtn color="warning" variant="text">
          Warning
        </MqBtn>

        <MqBtn color="error" variant="text">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Plain</h2>
      <p>Use <code>plain</code> variant to create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.</p>

      <div class="horizontal">
        <MqBtn variant="plain">
          Primary
        </MqBtn>

        <MqBtn color="secondary" variant="plain">
          Secondary
        </MqBtn>

        <MqBtn color="success" variant="plain">
          Success
        </MqBtn>

        <MqBtn color="info" variant="plain">
          Info
        </MqBtn>

        <MqBtn color="warning" variant="plain">
          Warning
        </MqBtn>

        <MqBtn color="error" variant="plain">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Tonal</h2>
      <p>Use <code>tonal</code> variant option to create a light background button.</p>

      <div class="horizontal">
        <MqBtn variant="tonal">
          Primary
        </MqBtn>

        <MqBtn color="secondary" variant="tonal">
          Secondary
        </MqBtn>

        <MqBtn color="success" variant="tonal">
          Success
        </MqBtn>

        <MqBtn color="info" variant="tonal">
          Info
        </MqBtn>

        <MqBtn color="warning" variant="tonal">
          Warning
        </MqBtn>

        <MqBtn color="error" variant="tonal">
          Error
        </MqBtn>
      </div>
    </div>

    <div>
      <h2>Sizing</h2>
      <p>Buttons can be given different sizing options to fit a multitude of scenarios</p>

      <div class="horizontal">
        <MqBtn size="xs">
          Extra Small
        </MqBtn>

        <MqBtn size="sm">
          Small
        </MqBtn>

        <MqBtn size="md">
          Medium
        </MqBtn>

        <MqBtn size="lg">
          Large
        </MqBtn>

        <MqBtn size="xl">
          Extra Large
        </MqBtn>
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
