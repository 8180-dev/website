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
  padding-bottom: 80px;
  overflow-x: hidden;
  //
  @include desktop {
    padding-bottom: calc((100vh / 9 * 1 - 80px / 2) * 2 + 90px);
  }
  //
  @include widescreen {
    padding-bottom: calc((100vh / 9 * 1 - 90px / 2) * 2 + 90px);
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
  //
  &.page-access {
    padding-top: 135px;
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
    //
    @include desktop {
      padding-top: 220px;
    }
  }
  //
  &.page-company {
    padding-top: 135px;
    //
    @include desktop {
      padding-top: 220px;
    }
  }
}
</style>
