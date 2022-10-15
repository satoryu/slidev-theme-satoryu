<template>
  <footer
    v-if="$slidev.nav.currentPage != 1"
    class="absolute bottom-0 px-1 h-10 w-full flex justify-end items-center"
  >
    <div class="logo rounded-lg w-8 h-8"></div>
  </footer>
</template>

<style lang="postcss">
.logo {
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
}
</style>