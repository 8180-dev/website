<template>
  <Wrapper class="page-company">
    <div class="pc__title">
      <TitleLevel1 :variation="`company`" />
    </div>
    <div class="pc__inner">
      <SectionMessage />
    </div>
    <div class="pc__inner">
      <SectionProfile />
    </div>
  </Wrapper>
</template>

<style scoped lang="scss">
//
</style>

<script>
import Wrapper from '~/components/Wrapper'

import HeadMixin from '~/mixins/Head'
import TitleLevel1 from '~/components/TitleLevel1'
import SectionMessage from '~/components/SectionMessage'
import SectionProfile from '~/components/SectionProfile'

export default {
  components: {
    SectionProfile,
    SectionMessage,
    TitleLevel1,
    Wrapper,
  },

  mixins: [HeadMixin],

  data() {
    return {
      posts: [],
      title: 'Company｜8180/株式会社ハイパーボール/Hyperbole Inc.',
    }
  },

  computed: {
    //
  },

  mounted() {
    this.$store.dispatch('setModalOpen', false)
    //
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
.pc__title {
  padding-bottom: 40px;
  border-bottom: 1px solid $color-gray-level2;
  //
  @include desktop {
    padding-bottom: 100px;
  }
}

.pc__inner {
  padding-top: 80px;
  padding-bottom: 80px;
  //
  @include touch {
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
  }
  //
  @include desktop {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  //
  + .pc__inner {
    border-top: 2px solid $color-gray-level0;
  }
}
</style>
