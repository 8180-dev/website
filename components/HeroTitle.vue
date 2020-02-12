<template>
  <div class="hero-title">
    <div class="ht__inner">
      <div class="ht__title" v-text="text" />
      <div class="ht__detail">
        クワシク
        <div class="ht__arrow">
          <TheArrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheArrow from '~/components/TheArrow'

export default {
  name: 'HeroTitle',

  components: { TheArrow },

  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-title {
  display: flex;
  align-items: center;
  width: calc(100vw * 410 / 750);
  padding-top: 0.5em;
  padding-right: 1.2em;
  padding-bottom: 0.5em;
  padding-left: 1.2em;
  font-size: 0.8rem;
  border: 0.5px solid $color-gray-level2;
  border-radius: 10px / 50%;
  //
  @include desktop {
    bottom: calc(var(--vh, 1vh) * 100 / 9 * 1);
    width: calc(100vw / 9 * 4 - #{$section-gutter-desktop} * 2);
    font-size: 1.2rem;
    border-radius: 15px / 50%;
  }
  //
  @include widescreen {
    width: calc(100vw / 9 * 3 - #{$section-gutter-desktop} * 2);
    font-size: 1.4rem;
    border-radius: 17px / 50%;
  }
  //
  @include fullhd {
    font-size: 1.6rem;
    border-radius: 20px / 50%;
  }
}

.ht__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.ht__title {
  padding-right: 1em;
  overflow: hidden;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-feature-settings: 'palt';
}

.ht__detail {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  font-size: 0.8rem;
  color: $color-gray-level2;
  //
  @include desktop {
    font-size: 1.2rem;
  }
  //
  @include widescreen {
    font-size: 1.4rem;
  }
  //
  @include fullhd {
    font-size: 1.6rem;
  }
}

.ht__arrow {
  position: relative;
  width: 14px;
  height: 8px;
  margin-left: 10px;
  //
  @include desktop {
    width: 28px;
    height: 16px;
  }
}
</style>
