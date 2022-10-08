<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="logo rounded-lg absolute bottom-0 right-0 m-1 w-10 h-10"></div>
  </div>
</template>

<style lang="postcss">

.logo {
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
}

</style>