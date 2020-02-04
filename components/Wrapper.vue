<template>
  <div
    id="wrap"
    :class="[
      {
        'is-ready': $store.getters.getPageReady,
        'is-open': $store.getters.getMenuOpen,
      },
    ]"
    class="wrapper"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  // backface-visibility: hidden;
  // transition: transform 1s $easeOutCirc;
  // will-change: transform;
  //
  &.is-ready {
    // position: static;
  }
  //
  &.is-open {
    //
  }
}
</style>
