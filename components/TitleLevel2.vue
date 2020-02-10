<template>
  <h2 class="title-level2" v-html="text" />
</template>
<script>
export default {
  name: 'TitleLevel2',

  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.title-level2 {
  font-size: 1.5rem;
  font-weight: $font-weight-plus-bold;
  line-height: 1.4;
  color: $color-white;
  //
  @include desktop {
    font-size: 3rem;
  }
}
</style>
