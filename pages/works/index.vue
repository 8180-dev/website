<template>
  <Wrapper class="page-works">
    <div class="pw__title">
      <TitleLevel1 :variation="`works`" />
    </div>
    <WorksList />
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

  async fetch({ app, store }) {
    const query = {
      // type: 'works',
      //      custom_per_page: 1,
      //      _embed: 1,
    }
    if (store.getters['post/getPosts'][0]) {
      return false
    } else {
      const { data } = await app.$api.get(`/works`, query)
      store.dispatch('post/setPosts', data)
      store.dispatch('setPostReady', true)

      console.log('🙏🏻 get 8180 works data +', data.length)
      console.log('🙏🏻 get 8180 works data +', data[0])
    }
  },

  mounted() {
    this.$nextTick(() => {
      //
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
