<template>
  <div class="the-hero">
    <div ref="bg" class="th__bg" />

    <div class="th__video-area">
      <div class="th__video" :style="videoStyle">
        <YoutubePlayer :video-id="`eT6LHbdS0f0`" />
      </div>
    </div>

    <div v-if="false" class="th__loading" :class="[{ 'is-disable': play }]">
      <span>
        ビデオローディング ...
      </span>
    </div>

    <div class="th__line" />
    <div class="th__overlay" />

    <div class="th__logo">
      <HeroLogo />
    </div>

    <mq-layout mq="widescreen+" class="th__button th__button--archive">
      <n-link to="/works/">
        <HeroButton :text="`作品 <br> アーカイブ`" />
      </n-link>
      <div class="th__button-line th__button-line--archive" />
    </mq-layout>

    <div class="th__bottom">
      <div class="th__button th__button--news">
        <a v-scroll-to="`#news`" href="#">
          <HeroButton :text="`ニュース`" />
        </a>
        <div class="th__button-line th__button-line--news" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroLogo from '~/components/HeroLogo'
import HeroButton from '~/components/HeroButton'
import YoutubePlayer from '~/components/YoutubePlayer'

export default {
  name: 'TheHero',
  components: {
    HeroButton,
    HeroLogo,
    YoutubePlayer,
  },

  data() {
    return {
      current: 0,
      play: false,
    }
  },

  computed: {
    videoStyle() {
      const aspect = {
        v: this.$store.getters.getPageHeight / 9,
        h: this.$store.getters.getPageWidth / 16,
      }

      const size = {
        width: '',
        height: '',
      }

      if (aspect.v > aspect.h) {
        size.height = this.$store.getters.getPageHeight + 'px'
        size.width = aspect.v * 16 + 'px'
      } else {
        size.width = this.$store.getters.getPageWidth + 'px'
        size.height = aspect.h * 9 + 'px'
      }

      return size
    },
  },

  watch: {
    //
  },

  created() {
    //
  },

  mounted() {
    this.$nextTick(() => {
      // this.$refs.video.play()
    })
  },

  beforeDestroy() {
    //
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.the-hero {
  position: relative;
  z-index: 1;
  height: calc(var(--vh, 1vh) * 100);
  //
  @include desktop {
    height: 100vh;
  }
}

.th__bg {
  z-index: 5;
  background: transparent;
  background-image: radial-gradient($color-black 30%, rgba($color-black, 0) 0),
    radial-gradient($color-black 30%, rgba($color-black, 0) 0);
  background-position: 0 0, 2px 2px;
  background-size: 4px 4px;
  opacity: 0.8;

  @include overlay;

  @include desktop {
    background-image: radial-gradient($color-black 35%, rgba($color-black, 0) 0),
      radial-gradient($color-black 35%, rgba($color-black, 0) 0);
    background-position: 0 0, 2px 2px;
    background-size: 4px 4px;
    opacity: 0.9;
  }
}

.th__video-area {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.th__video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  //
  /deep/ iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.th__loading {
  position: absolute;
  right: calc(50%);
  bottom: 60px;
  z-index: 9;
  font-size: 1.6rem;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  transition: opacity 0.6s $easeOutSine;

  @include touch {
    transform: translateX(50%);
  }

  @include desktop {
    right: $section-gutter-desktop;
    bottom: calc(100vh / 9 * 1 - 1em / 2);
  }

  &.is-disable {
    opacity: 0;
  }

  span {
    animation: flash 0.15s infinite;
  }
}

.th__line {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  background-image: linear-gradient($color-gray-level4 0.5px, transparent 0),
    linear-gradient(90deg, $color-gray-level4 0.5px, transparent 0);
  background-size: calc(100vw / 5) calc(var(--vh, 1vh) * 100 / 7);
  opacity: 0.2;
  //
  @include desktop {
    background-image: linear-gradient($color-gray-level4 1px, transparent 0),
      linear-gradient(90deg, $color-gray-level4 1px, transparent 0);
    background-size: calc(100vw / 9) calc(100vh / 9);
  }
}

.th__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: $color-black-dark;
  // mix-blend-mode: multiply;
  opacity: 0.35;
}

.th__logo {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9;
  width: 157px;
  height: 70px;
  transform: translate(-50%, -50%);
  //
  @include desktop {
    width: calc(100vw * 637 / 1920 * 0.8);
    height: calc(100vw * 286 / 1920 * 0.8);
  }
}

.th__button {
  z-index: 9;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  //
  @include desktop {
    font-size: 1.2rem;
  }
  //
  @include fullhd {
    font-size: 1.6rem;
  }
  //
  &--news {
    position: relative;
    //
    @include touch {
      left: 3vw;
    }
    //
    @include desktop {
      // left: calc(#{$circle-size-m} / -2);
      order: 1;
    }
    //
    @include fullhd {
      // left: calc(#{$circle-size-l} / -2);
    }
  }
  //
  &--archive {
    position: absolute;
    top: calc(50% - #{$circle-size-m} / 2);
    right: $section-gutter-desktop;
    line-height: calc(1em * 21 / 12);
    //
    @include fullhd {
      top: calc(50% - #{$circle-size-l} / 2);
    }
  }
}

.th__button-line {
  position: absolute;
  background-color: $color-gray-level2;
  //
  &--archive {
    top: calc(50% - 1px / 2);
    left: 100%;
    width: $section-gutter-desktop;
    height: 1px;
  }
  //
  &--news {
    top: 100%;
    left: calc(50% - 0.5px / 2);
    width: 0.5px;
    height: 20px;
    //
    @include desktop {
      width: 1px;
      height: 200px;
    }
  }
}

.th__bottom {
  position: absolute;
  right: $section-gutter-mobile;
  bottom: 20px;
  left: $section-gutter-mobile;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //
  @include desktop {
    right: 0;
    bottom: calc(100vh / 9 * 1 - #{$circle-size-m} / 2);
    left: calc(50% - #{$circle-size-m} / 2);
    padding-right: $section-gutter-desktop;
  }
  //
  @include fullhd {
    bottom: calc(100vh / 9 * 1 - #{$circle-size-l} / 2);
    left: calc(50% - #{$circle-size-l} / 2);
  }
}

.th__title {
  //
  @include desktop {
    position: relative;
    // left: calc(#{$section-gutter-desktop} * -1);
    order: 2;
  }
  //
  @include fullhd {
    // left: calc(#{$circle-size-l} / -2 / 4);
  }
}
</style>
