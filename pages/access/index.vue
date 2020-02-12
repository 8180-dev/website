<template>
  <Wrapper class="page-access">
    <div class="pa__title">
      <TitleLevel1 :variation="`access`" />
    </div>
    <div class="pa__inner">
      <SectionAccess />
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
import SectionAccess from '~/components/SectionAccess'

export default {
  components: {
    TitleLevel1,
    SectionAccess,
    Wrapper,
  },

  mixins: [HeadMixin],

  data() {
    return {
      posts: [],
      title: 'Access｜8180',
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
.pa__title {
  margin-bottom: 50px;
  //
  @include desktop {
    margin-bottom: 180px;
  }
}

.pa__inner {
  //
  @include desktop {
    width: calc(100vw * 770 / 1024);
    margin: auto;
  }
  //
  @include desktop {
    width: calc(100vw * 770 / 1280);
    margin: auto;
  }
  //
  @include fullhd {
    width: calc(100vw * 770 / 1920);
  }
}
</style>
