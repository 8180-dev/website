<template>
  <div
    id="layout"
    :class="[
      {
        'is-ready': $store.getters.getPageReady,
        'is-ie': $ua.browser() === 'Internet Explorer',
        'is-firefox': $ua.browser() === 'Firefox',
        'is-edge': $ua.browser() === 'Edge',
        'is-pc': $ua.isFromPc(),
        'is-mobile': !$ua.isFromPc(),
      },
      $ua.browser(),
      $ua.deviceType(),
    ]"
    class="layout-default"
  >
    <div class="ld__inner">
      <nuxt />
    </div>

    <div class="ld__head">
      <TheHeader />
    </div>

    <div class="ld__foot-mail">
      <FootMail />
    </div>

    <client-only>
      <Debug v-if="isDebug" />
    </client-only>
  </div>
</template>

<script>
import Debug from '~/components/Debug'
import TheHeader from '~/components/TheHeader'
import FootMail from '~/components/FootMail'

import data from '~/assets/js/data'

export default {
  components: {
    Debug,
    TheHeader,
    FootMail,
  },
  data() {
    return {
      isDebug: true,
    }
  },
  computed: {
    //
  },
  created() {
    this.isDebug = process.env.NODE_ENV === 'development'
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // height: 100vh;
    // height: calc(var(--vh, 1vh) * 100);
    data.init()
    this.$store.dispatch('setPageData', data)
    //
    this.$nextTick(() => {
      //
    })
  },
  methods: {
    //
  },
}
</script>

<style scoped lang="scss">
.layout-default {
  width: 100%;
  overflow: hidden;
  //
  @include desktop {
    min-height: 100vh;
  }
}

.ld__inner {
  position: relative;
  z-index: 9;
}

.ld__head {
  z-index: $z-header;
}
</style>

<style lang="scss">
@import '~Sass/foundation/_reset';
@import '~Sass/foundation/base/_base';
@import '~Sass/animation/_keyframes';
@import '~Sass/object/utility/_utility';

@font-face {
  font-family: 'MyYuGothicM';
  font-weight: normal;
  src: local('YuGothic-Medium'), local('Yu Gothic Medium'),
    local('YuGothic-Regular');
}

@font-face {
  font-family: 'MyYuGothicM';
  font-weight: bold;
  src: local('YuGothic-Bold'), local('Yu Gothic');
}
</style>
