<template>
  <div class="the-title1">
    <div class="tt1__icon" :class="[`tt1__icon--${variation}`]">
      <svg viewBox="0 0 40 35.29">
        <title>{{ variation }} icon</title>
        <g>
          <path
            class="a"
            d="M15.47,28.05H6.33a.91.91,0,0,0,0,1.81h9.14a.91.91,0,1,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,28.05H20a.91.91,0,1,0,0,1.81h9.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,5.43H6.33a.91.91,0,0,0,0,1.81H29.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,10H20a.91.91,0,1,0,0,1.81h9.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,14.48H20a.91.91,0,1,0,0,1.81h9.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,19H20a.91.91,0,1,0,0,1.81h9.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M29.14,23.53H20a.91.91,0,1,0,0,1.81h9.14a.91.91,0,0,0,0-1.81Z"
          />
          <path
            class="a"
            d="M15.47,23.53H6.33a.91.91,0,0,0,0,1.81h9.14a.91.91,0,1,0,0-1.81Z"
          />
          <path
            class="a"
            d="M15.47,10H6.33a.9.9,0,0,0-.9.91V20a.9.9,0,0,0,.9.9h9.14a.9.9,0,0,0,.91-.9V10.86A.91.91,0,0,0,15.47,10Zm-.9,9.14H7.24V11.76h7.33Z"
          />
          <path
            class="a"
            d="M38.19,4.52H35.47V1.81A1.81,1.81,0,0,0,33.66,0H1.81A1.81,1.81,0,0,0,0,1.81v29a4.53,4.53,0,0,0,4.52,4.52h31A4.53,4.53,0,0,0,40,30.77V6.33A1.82,1.82,0,0,0,38.19,4.52Zm0,26.25a2.72,2.72,0,0,1-2.72,2.71H4.52a2.72,2.72,0,0,1-2.71-2.71v-29H33.66v27.6a2.26,2.26,0,0,0,2.26,2.26.91.91,0,1,0,0-1.81.45.45,0,0,1-.45-.45V6.33h2.72Z"
          />
        </g>
      </svg>
    </div>
    <h2 class="tt1__text" v-text="getJaName"></h2>
  </div>
</template>

<script>
export default {
  name: 'TitleLevel1',

  props: {
    variation: {
      type: String,
      default: 'news',
    },
  },

  computed: {
    getJaName() {
      let name = ''
      switch (this.variation) {
        case 'news':
          name = 'ニュース'
          break

        default:
          name = ''
      }

      return name
    },
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.the-title1 {
  //
}

.tt1__icon {
  position: relative;
  display: inline-block;
  margin-bottom: 18px;
  //
  @include desktop {
    margin-bottom: 25px;
  }
  //
  &--news {
    width: 20px;
    height: 17px;
    //
    @include desktop {
      width: 40px;
      height: 35px;
    }
  }
  //
  svg {
    @include overlay;
  }
  //
  .a {
    fill: #fff;
  }
  //
}

.tt1__text {
  font-size: 2.5rem;
  font-weight: $font-weight-plus-bold;
  color: $color-white;
  //
  @include desktop {
    font-size: 5rem;
  }
}
</style>
