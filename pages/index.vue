<template>
  <Wrapper class="page-home">
    <TheHero />
    <SectionNews />
  </Wrapper>
</template>

<style scoped lang="scss">
//
</style>

<script>
import Wrapper from '~/components/Wrapper'
import TheHero from '~/components/TheHero'
import SectionNews from '~/components/SectionNews'

import HeadMixin from '~/mixins/Head'

export default {
  components: {
    Wrapper,
    TheHero,
    SectionNews,
  },

  mixins: [HeadMixin],

  data() {
    return {
      posts: [],
      title: 'HOME｜8180',
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
