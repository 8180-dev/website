<template>
  <div class="the-hero">
    <div class="th__bg">
      <div class="hero-bg"></div>
    </div>

    <div class="th__line"></div>
    <div class="th__overlay"></div>

    <div class="th__logo">
      <HeroLogo />
    </div>

    <mq-layout mq="widescreen+" class="th__button th__button--archive">
      <n-link to="/works/">
        <HeroButton :text="`作品 <br> アーカイブ`" />
      </n-link>
      <div class="th__button-line th__button-line--archive"></div>
    </mq-layout>

    <div class="th__bottom">
      <div class="th__title">
        <HeroTitle />
      </div>

      <div class="th__button th__button--news">
        <a href="#">
          <HeroButton :text="`ニュース`" />
        </a>
        <div class="th__button-line th__button-line--news"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroLogo from '~/components/HeroLogo'
import HeroButton from '~/components/HeroButton'
import HeroTitle from '~/components/HeroTitle'

export default {
  name: 'TheHero',
  components: {
    HeroTitle,
    HeroButton,
    HeroLogo,
    //
  },

  data() {
    return {
      //
    }
  },

  computed: {
    //
  },

  created() {
    //
  },

  mounted() {
    this.$nextTick(() => {
      //
    })
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.the-hero {
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  //
  @include desktop {
    height: 100vh;
  }
}

.th__bg {
  //
}

.hero-bg {
  //
}

.th__line {
  z-index: 6;
  background-image: linear-gradient($color-gray-level4 0.5px, transparent 0),
    linear-gradient(90deg, $color-gray-level4 0.5px, transparent 0);
  background-size: calc(100vw / 5) calc(var(--vh, 1vh) * 100 / 7);
  opacity: 0.2;
  //
  @include overlay;
  //
  @include desktop {
    background-image: linear-gradient($color-gray-level4 1px, transparent 0),
      linear-gradient(90deg, $color-gray-level4 1px, transparent 0);
    background-size: calc(100vw / 9) calc(100vh / 9);
  }
}

.th__overlay {
  z-index: 5;
  background-color: $color-black-dark;
  mix-blend-mode: multiply;
  opacity: 0.5;
  //
  @include overlay;
}

.th__logo {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  width: 157px;
  height: 70px;
  transform: translate(-50%, -50%);
  //
  @include desktop {
    width: calc(100vw * 637 / 1920);
    height: calc(100vw * 286 / 1920);
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
    height: calc(var(--vh, 1vh) * 115 / 1345 * 100);
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
  bottom: calc(var(--vh, 1vh) * 115 / 1345 * 100);
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
