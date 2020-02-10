<template>
  <Wrapper class="page-home">
    <TheHero />
    <SectionNews v-if="$store.getters.getPageReady" />
  </Wrapper>
</template>

<style scoped lang="scss">
//
</style>

<script>
import Wrapper from '~/components/Wrapper'
import TheHero from '~/components/TheHero'

import HeadMixin from '~/mixins/Head'

export default {
  components: {
    Wrapper,
    TheHero,
    SectionNews: () => import('~/components/SectionNews'),
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
    this.$store.dispatch('setModalOpen', false)
    //
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
