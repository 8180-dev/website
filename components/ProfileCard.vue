<template>
  <div class="profile-card">
    <div class="pc__inner">
      <div
        class="pc__top"
        :class="[{ 'is-open': isOpen }]"
        @click="isOpen = !isOpen"
      >
        <h4 class="pc__name" v-text="item.name" />
        <figure class="pc__figure">
          <LazyImage :src="require(`Images/profile/${index + 1}.png`)" />
        </figure>
      </div>
      <div class="pc__bottom" :class="[{ 'is-open': isOpen }]">
        <div class="pc__bottom-inner">
          <div class="pc__texts">
            <p
              v-for="(_item, _index) in item.texts"
              :key="`pc__text${_index}`"
              class="pc__text"
              v-html="_item"
            ></p>
          </div>
          <a class="pc__link" :href="item.link" target="_blank">
            <div class="pc__link-text">アニメ@wiki</div>
            <div class="pc__icon">
              <svg viewBox="0 0 340 330">
                <g>
                  <image
                    class="a"
                    width="340"
                    height="330"
                    xlink:href="data:image/png;base64,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"
                  />
                  <g>
                    <rect
                      class="b"
                      x="156.5"
                      y="151.29"
                      width="32.29"
                      height="21.53"
                      rx="3"
                    />
                    <path
                      class="b"
                      d="M180.76,178.6H154.47a3,3,0,0,1-3-3V160.07"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <button
        :class="[{ 'is-open': isOpen }]"
        class="pc__button"
        @click="isOpen = !isOpen"
      >
        <span class="pc__cross">
          <span
            v-for="_index in 2"
            :key="`pc__cross-line${_index}`"
            class="pc__cross-line"
          ></span>
        </span>
        <span class="pc__button-text">プロフィール</span>
      </button>
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage'

export default {
  name: 'ProfileCard',
  components: { LazyImage },

  props: {
    index: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      isOpen: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-card {
  width: 250px;
  margin: auto;
  overflow: hidden;
  background-color: $color-black;
  border-radius: 15px;
  box-shadow: 0 0 50px rgba(black, 0.2);
  //
  @include desktop {
    width: 400px;
  }
  //
  @include widescreen {
    width: 500px;
  }
}

.pc__inner {
  //
}

.pc__top {
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid $color-gray-level0;
  //
  @include desktop {
    padding-top: 65px;
    padding-bottom: 65px;
    cursor: pointer;
  }
}

.pc__bottom {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.65s $easeOutCubic;
  //
  &.is-open {
    max-height: 1000px;
  }
}

.pc__bottom-inner {
  padding: 35px 20px 20px;
  background-color: $color-black-dark;
  //
  @include desktop {
    padding: 50px 30px 30px;
  }
}

.pc__name {
  margin-bottom: 35px;
  font-size: 1.5rem;
  color: $color-white;
  letter-spacing: 0.2em;
  //
  @include desktop {
    margin-bottom: 70px;
    font-size: 3rem;
  }
}

.pc__figure {
  width: 127px;
  height: 127px;
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  will-change: transform;
  -webkit-mask-image: -webkit-radial-gradient(#000, #000);
  //
  @include desktop {
    width: 215px;
    height: 215px;
  }
  //
  > img {
    opacity: 0.8;
    transition: 0.3s $easeOutSine;
    //
    .pc__top:hover & {
      opacity: 1;
      transition: 2s $easeOutSine;
      transform: translateZ(1px) scale(1.5);
    }
    //
    .pc__top.is-open & {
      opacity: 1;
      transition: 0.4s $easeOutSine;
      transform: translateZ(1px) scale(1.2);
    }
  }
}

.pc__texts {
  font-size: 1.2rem;
  line-height: calc(1em * 42 / 24);
  color: $color-white;
  text-align: justify;
  //
  @include desktop {
    font-size: 1.4rem;
  }
  //
  @include fullhd {
    font-size: 1.6rem;
  }
}

.pc__text {
  //
  + .pc__text {
    margin-top: 1.5em;
  }
}

.pc__link-text {
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  //
  @include desktop {
    font-size: 1.8rem;
    font-weight: $font-weight-plus-bold;
  }
}

.pc__link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  margin-top: 20px;
  margin-right: -10px;
  margin-left: -10px;
  color: $color-white;
  background-color: $color-black;
  //
  @include desktop {
    margin-top: 30px;
  }

  .a {
    opacity: 0.6;
  }

  .b {
    fill: none;
    stroke: $color-white;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  //
  &:hover {
    //
  }
}

.pc__icon {
  position: absolute;
  top: calc(50% - 13px / 2);
  right: 22px;
  display: none;
  width: 18px;
  height: 13px;
  //
  @include desktop {
    width: 37px;
    height: 27px;
  }
  //
}

.pc__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding-right: 22px;
  padding-left: 22px;
  //
  @include desktop {
    height: 115px;
    padding-right: 40px;
    padding-left: 40px;
  }
}

.pc__cross {
  position: relative;
  width: 25px;
  height: 25px;
  background-color: $color-black;
  border-radius: 50%;
  box-shadow: 0 0 25px rgba($color-black-dark, 0.8);
  transition: 0.3s $easeOutSine;
  //
  @include desktop {
    width: 50px;
    height: 50px;
  }
  //
  .pc__button:hover & {
    box-shadow: 0 0 30px rgba($color-black-dark, 1);
    transition: 0.6s $easeOutSine;
    transform: rotate(180deg);
  }
  //
  .pc__button.is-open & {
    transform: rotate(225deg);
  }
  //
  &::after {
    z-index: 1;
    content: '';
    background-color: $color-white;
    border-radius: 50%;
    transition: 0.6s $easeOutCubic;
    transform: scale(0);
    //
    @include overlay;
    //
    .pc__button.is-open & {
      transform: scale(1);
    }
  }
}

.pc__cross-line {
  position: absolute;
  top: calc(50% - 2px / 2);
  left: calc(50% - 10px / 2);
  z-index: 5;
  display: inline-block;
  width: 10px;
  height: 2px;
  background-color: $color-white;
  border-radius: 50% / 5px;
  transition: 0.3s $easeOutSine;
  //
  @include desktop {
    top: calc(50% - 4px / 2);
    left: calc(50% - 20px / 2);
    width: 20px;
    height: 4px;
    border-radius: 50% / 10px;
  }
  //
  &:first-of-type {
    transform: rotate(90deg);
  }
  //
  .pc__button.is-open & {
    background-color: $color-black;
  }
}

.pc__button-text {
  font-size: 0.9rem;
  font-weight: $font-weight-plus-bold;
  color: $color-white;
  letter-spacing: 0.2em;
  //
  @include desktop {
    font-size: 1.8rem;
  }
}
</style>
