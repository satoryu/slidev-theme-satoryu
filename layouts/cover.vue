<template>
  <base-layout layout-name="cover">
    <slot />
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout.vue'

export default {
  components: { BaseLayout },
  setup() {

  },
}
</script>
