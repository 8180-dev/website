<template>
  <Wrapper class="page-works">
    <div class="pw__title">
      <TitleLevel1 :variation="`works`" />
    </div>
    <WorksList :list="list" />
  </Wrapper>
</template>

<script>
import Wrapper from '~/components/Wrapper'
import TitleLevel1 from '~/components/TitleLevel1'
import WorksList from '~/components/WorksList'

import HeadMixin from '~/mixins/Head'

import PostList from '~/assets/json/post.json'

export default {
  components: {
    WorksList,
    TitleLevel1,
    Wrapper,
  },

  mixins: [HeadMixin],

  data() {
    return {
      title: 'WORKS｜8180',
      list: PostList,
    }
  },

  computed: {
    //
  },

  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('setPageReady', true)
    })
  },

  beforeDestroy() {
    //
  },

  updated() {
    this.$nextTick(() => {
      //
    })
  },

  methods: {
    //
    update() {
      //
    },
  },
}
</script>

<style scoped lang="scss">
.pw__title {
  margin-bottom: 50px;
  //
  @include desktop {
    margin-bottom: 180px;
  }
}
</style>
