<template>
  <base-layout layout-name="cover" :style="styles">
    <slot />
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout.vue'
import { handleBackground } from '@slidev/client/layoutHelper'

export default {
  props: {
    background: ''
  },
  components: { BaseLayout },
  computed: {
    styles() {
      return handleBackground(this.background, true)
    }
  },
  setup() {

  },
}
</script>
