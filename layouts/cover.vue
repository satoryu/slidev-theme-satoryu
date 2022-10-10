<template>
  <div class="slidev-layout cover" :style="styles">
    <slot />
  </div>
</template>

<script>
import { handleBackground } from '@slidev/client/layoutHelper'

export default {
  props: {
    background: ''
  },
  computed: {
    styles() {
      return handleBackground(this.background, true)
    }
  },
  setup() {

  },
}
</script>
