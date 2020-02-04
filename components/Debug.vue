<template>
  <div class="debug">
    {{ fps }} / {{ getPageWidth }} / {{ getPageHeight }} /
    {{ getPageScrollY }} / {{ getPageMouseX }} / {{ getPageMouseY }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { FpsCalculator } from 'Js/FpsCalculator'

export default {
  name: 'Debug',
  data() {
    return {
      fps: 0,
    }
  },
  computed: {
    ...mapGetters([
      'getPageHeight',
      'getPageWidth',
      'getPageScrollY',
      'getPageMouseX',
      'getPageMouseY',
      'getPageReady',
    ]),
  },
  watch: {
    getPageReady(value) {
      console.log('getPageReady getPageReady getPageReady', value)
    },
  },
  mounted() {
    this.fpsCalc()
  },
  methods: {
    fpsCalc() {
      const fps = new FpsCalculator({
        callBack: this.setFps,
        log: null,
      })
      fps.start()
    },
    setFps(val) {
      this.fps = val
    },
  },
}
</script>

<style lang="scss" scoped>
.debug {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: $z-debug;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: bold;
  color: $color-blue;
  background-color: rgba($color-white, 0.5);
  //
  @include tablet {
    //
  }
  //
  &::after,
  &::before {
    position: fixed;
    top: calc(50% - 1px);
    right: 0;
    left: 0;
    height: 2px;
    // content: '';
    background-color: rgba($color-white, 0.5);
  }
  //
  &::before {
    transform: rotate(90deg);
    //
    @include desktop {
      transform: rotate(90deg);
    }
  }
}
</style>
