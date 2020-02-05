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
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 120px;
  overflow-x: hidden;
  //
  @include desktop {
    padding-bottom: 200px;
  }
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
  //
  &.page-works {
    padding-top: 135px;
    padding-right: 3.33vw;
    padding-left: 3.33vw;
    //
    @include desktop {
      padding-top: 220px;
    }
  }
}
</style>
