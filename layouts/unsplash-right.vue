<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default">
      <slot />
    </div>
    <div class="w-full h-full" :style="styles">
    <shoutout :user="user" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { getPhoto } from '../unsplashApi'

export default {
  props: {
    photoId: {
      type: String,
      required: true
    },
    class: {
      type: String
    }
  },
  setup(props) {
    const user = ref(null);
    const styles = ref({})

    getPhoto(props.photoId).then((response) => {
      user.value = response.user
      styles.value = response.styles
    });

    return { user, styles };
  }
}
</script>
