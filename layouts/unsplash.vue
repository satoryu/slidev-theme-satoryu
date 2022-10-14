<template>
  <div class="slidev-layout unsplash" :style="styles">
    <slot />
    <div
      class="
        absolute
        bottom-0
        left-0
        text-1
        p-1rem
        bg-gray-500 bg-opacity-30
        text-gray-50
      "
      v-if="caption"
    >
      Photo by <a :href="caption.user.link">{{ caption.user.name }}</a>
      on <a href="https://unsplash.com/">Unsplash</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import "whatwg-fetch";
import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

export default {
  props: {
    photoId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const imageUrl = ref(null);
    const caption = ref(null);
    const styles = ref({})

    unsplash.photos.get({ photoId: props.photoId }).then((response) => {
      console.log(response.response)
      imageUrl.value = response.response.urls.full;
      caption.value = {
        user: {
          name: response.response.user.name,
          link: response.response.user.links.html,
        },
      };
      styles.value = {
        background: undefined,
        backgroundImage: `url(${response.response.urls.full})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    });

    return { caption, imageUrl, styles };
  },
};
</script>
