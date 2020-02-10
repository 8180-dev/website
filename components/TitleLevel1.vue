<template>
  <div class="the-title1">
    <div class="tt1__icon" :class="[`tt1__icon--${variation}`]">
      <svg v-if="variation === 'news'" viewBox="0 0 40 35.29">
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
      <svg v-else-if="variation === 'works'" viewBox="0 0 35.66 35.48">
        <title>works</title>
        <g>
          <path
            class="a"
            d="M32.91,22.26a.89.89,0,0,0-.89.89V31a2.66,2.66,0,0,1-2.66,2.66H4.44A2.66,2.66,0,0,1,1.78,31V7.9A2.67,2.67,0,0,1,4.44,5.23h7.88a.89.89,0,1,0,0-1.77H4.44A4.44,4.44,0,0,0,0,7.9V31a4.45,4.45,0,0,0,4.44,4.44H29.36A4.46,4.46,0,0,0,33.8,31V23.15A.89.89,0,0,0,32.91,22.26Z"
          />
          <path
            class="a"
            d="M33.45,1.17a4,4,0,0,0-5.66,0L12,17a.92.92,0,0,0-.23.39L9.64,24.93a.87.87,0,0,0,.23.86.88.88,0,0,0,.86.23l7.52-2.08a1,1,0,0,0,.4-.23L34.49,7.86a4,4,0,0,0,0-5.65ZM13.89,17.59l13-13L31,8.81l-13,13Zm-.84,1.68,3.34,3.34-4.62,1.28ZM33.23,6.61l-.94.94L28.11,3.37l.94-.94a2.22,2.22,0,0,1,3.14,0l1,1A2.22,2.22,0,0,1,33.23,6.61Z"
          />
        </g>
      </svg>
      <svg v-else-if="variation === 'access'" viewBox="0 0 27.15 33.55">
        <title>map</title>
        <g>
          <path
            class="b"
            d="M26.15,13.57c0,7-12.58,19-12.58,19S1,20.52,1,13.57a12.58,12.58,0,0,1,25.15,0Z"
          />
          <circle class="b" cx="13.57" cy="14.07" r="4.74" />
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

        case 'works':
          name = 'ワークス'
          break

        case 'access':
          name = 'アクセス'
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
  &--works {
    width: 17px;
    height: 17px;
    //
    @include desktop {
      width: 35px;
      height: 35px;
    }
  }
  //
  &--access {
    width: 12px;
    height: 15px;
    //
    @include desktop {
      width: 25px;
      height: 31px;
    }
  }
  //
  svg {
    @include overlay;
  }
  //
  .a {
    fill: $color-white;
  }
  //
  .b {
    fill: none;
    stroke: $color-white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
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
