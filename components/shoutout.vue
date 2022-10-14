<template>
  <div
    class="
      absolute
      bottom-0
      left-0
      text-xs
      p-1rem
      bg-gray-500 bg-opacity-30
      text-gray-50
    "
    v-if="user"
  >
    Photo by <a :href="user.link">{{ user.name }}</a>
    on <a href="https://unsplash.com/">Unsplash</a>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>