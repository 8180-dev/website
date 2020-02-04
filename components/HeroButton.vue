<template>
  <div class="hero-button">
    <div class="hb__inner" v-html="text"></div>
  </div>
</template>
<script>
export default {
  name: 'HeroButton',

  props: {
    text: {
      default: '',
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.hero-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $circle-size-s;
  height: $circle-size-s;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  border: 0.5px solid $color-gray-level2;
  border-radius: 50%;
  //
  @include desktop {
    width: $circle-size-m;
    height: $circle-size-m;
    border-width: 1px;
  }
  //
  @include fullhd {
    width: $circle-size-l;
    height: $circle-size-l;
  }
}

.hb__inner {
  //
}
</style>
