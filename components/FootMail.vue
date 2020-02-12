<template>
  <div
    class="foot-mail"
    :class="[
      {
        'is-scroll': scrollY > 100,
      },
    ]"
  >
    <a href="mailto:info@8180.co.jp" target="_blank" class="fm__inner">
      <div class="fm__title">お問い合わせアドレス</div>
      <div class="fm__line" />
      <div class="fm__address">info@8180.co.jp</div>
      <div class="fm__icon">
        <svg viewBox="0 0 37.92 27.23">
          <title>mail</title>
          <g>
            <rect
              class="a"
              x="1.5"
              y="1.5"
              width="34.92"
              height="24.23"
              rx="5"
            />
            <polyline class="a" points="1.96 5.77 18.96 15.38 35.96 5.77" />
          </g>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FootMail',

  computed: {
    /**
     * @return number
     */
    scrollY() {
      return this.$store.getters.getPageScrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.foot-mail {
  position: fixed;
  bottom: 15px;
  left: $section-gutter-mobile;
  z-index: $z-footer-mail;
  //
  @include touch {
    right: $section-gutter-mobile;
    opacity: 0;
    transition: opacity 0.5s $easeInOutSine;
    will-change: opacity;
  }
  //
  @include desktop {
    bottom: calc(100vh / 9 * 1 - 80px / 2);
    left: $section-gutter-desktop;
  }
  //
  @include fullhd {
    bottom: calc(100vh / 9 * 1 - 90px / 2);
  }
  //
  &.is-scroll {
    @include touch {
      opacity: 1;
    }
  }
}

.fm__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: $color-black;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba($color-black-dark, 0.6);
  //
  @include desktop {
    width: calc(100vw / 9 * 4 - #{$section-gutter-desktop} * 2);
    height: 80px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 20px;
  }
  //
  @include widescreen {
    width: calc(100vw / 9 * 3 - #{$section-gutter-desktop} * 2);
  }
  //
  @include fullhd {
    height: 90px;
    padding-right: 35px;
    padding-left: 35px;
  }
}

.fm__title {
  font-size: 0.8rem;
  color: $color-gray-level2;
  //
  @include desktop {
    font-size: 1.2rem;
  }
  //
  @include fullhd {
    font-size: 1.4rem;
  }
}

.fm__detail {
  //
}

.fm__line {
  flex: 1 1;
  height: 1px;
  margin-right: 5px;
  margin-left: 5px;
  background-color: $color-gray-level2;
  //
  @include desktop {
    margin-right: 10px;
    margin-left: 10px;
  }
}

.fm__address {
  font-size: 1rem;
  color: $color-white;
  //
  @include desktop {
    font-size: 1.4rem;
  }
  //
  @include fullhd {
    font-size: 1.8rem;
  }
}

.fm__icon {
  position: relative;
  width: 17px;
  height: 12px;
  margin-left: 10px;

  //
  @include desktop {
    width: calc(34px * 0.75);
    height: calc(24px * 0.75);
    margin-left: 15px;
  }
  //
  @include fullhd {
    width: 34px;
    height: 24px;
    margin-left: 25px;
  }
  //
  > svg {
    @include overlay;
  }
  //
  .a {
    fill: none;
    stroke: $color-gray-level2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
  }
}
</style>
