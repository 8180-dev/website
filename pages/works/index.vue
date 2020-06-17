<template>
  <Wrapper class="page-works">
    <div class="pw__title">
      <TitleLevel1 :variation="`works`" />

      <p class="pw__note">
        制作実績について、掲載に問題がある場合は、お問い合わせのメールアドレスまでご連絡頂けると幸いです。
      </p>
    </div>
    <WorksList />
  </Wrapper>
</template>

<script>
import Wrapper from '~/components/Wrapper'
import TitleLevel1 from '~/components/TitleLevel1'
import WorksList from '~/components/WorksList'

import HeadMixin from '~/mixins/Head'
import FetchWorks from '~/mixins/FetchWorks'

import PostList from '~/assets/json/post.json'

export default {
  components: {
    WorksList,
    TitleLevel1,
    Wrapper,
  },

  mixins: [HeadMixin, FetchWorks],

  data() {
    return {
      title: 'WORKS｜8180/株式会社ハイパーボール/Hyperbole Inc.',
      list: PostList,
    }
  },

  computed: {
    //
  },

  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('setMenuOpen', false)
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

.pw__note {
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: $color-gray-level2;
  letter-spacing: 0.05em;

  @include desktop {
    margin-top: 45px;
    font-size: 1.2rem;
  }
}
</style>
