<template>
  <div class="slidev-layout unsplash" :style="styles">
    <slot />
    <shoutout :user="user" />
  </div>
</template>

<script>
import { ref } from "vue";

import { getPhoto } from '../unsplashApi'

export default {
  props: {
    photoId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const user = ref(null);
    const styles = ref({})

    getPhoto(props.photoId).then((response) => {
      user.value = response.user
      styles.value = response.styles
    });

    return { user, styles };
  },
};
</script>
