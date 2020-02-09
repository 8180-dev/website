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
  //
}
</style>
