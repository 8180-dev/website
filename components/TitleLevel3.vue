<template>
  <div class="the-title3">
    <div class="tt3__icon" :class="[`tt3__icon--${variation}`]">
      <svg v-if="variation === 'message'" viewBox="0 0 37.81 30.24">
        <title>message</title>
        <g>
          <path
            class="a"
            d="M29.81,1H8A7,7,0,0,0,1,8v8.5a7,7,0,0,0,7,7H20.17a14.29,14.29,0,0,1-1.26,5.74S26,28.36,26,23.5h3.77a7,7,0,0,0,7-7V8A7,7,0,0,0,29.81,1Z"
          />
          <line class="a" x1="8.74" y1="8.36" x2="29.07" y2="8.36" />
          <line class="a" x1="8.74" y1="12.2" x2="29.07" y2="12.2" />
          <line class="a" x1="8.74" y1="16.03" x2="29.07" y2="16.03" />
        </g>
      </svg>

      <svg v-else-if="variation === 'profile'" viewBox="0 0 35 35">
        <title>profile</title>
        <g>
          <path
            class="b"
            d="M35,17.5A17.5,17.5,0,1,0,17.5,35,17.49,17.49,0,0,0,35,17.5ZM17.5,2.05a15.45,15.45,0,0,1,12.8,24.1,17.48,17.48,0,0,0-25.6,0A15.45,15.45,0,0,1,17.5,2.05ZM6,27.79a15.43,15.43,0,0,1,23,0A15.42,15.42,0,0,1,6,27.79Z"
          />
          <path
            class="b"
            d="M17.5,18.53a6.16,6.16,0,0,0,6.15-6.16v-2a6.15,6.15,0,1,0-12.3,0v2A6.16,6.16,0,0,0,17.5,18.53Zm-4.1-8.21a4.1,4.1,0,0,1,8.2,0v2a4.1,4.1,0,0,1-8.2,0Z"
          />
        </g>
      </svg>
    </div>
    <h3 class="tt3__text" v-text="getJaName" />
  </div>
</template>

<script>
export default {
  name: 'TitleLevel3',

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
        case 'message':
          name = 'メッセージ'
          break

        case 'profile':
          name = 'プロフィール'
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
.the-title3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  //
  @include desktop {
    padding-bottom: 100px;
  }
}

.tt3__icon {
  position: relative;
  display: inline-block;
  margin-right: 8px;
  //
  @include desktop {
    margin-right: 15px;
  }
  //
  &--message {
    width: 17px;
    height: 14px;
    //
    @include desktop {
      width: 35px;
      height: 28px;
    }
  }
  //
  &--profile {
    width: 17px;
    height: 17px;
    //
    @include desktop {
      width: 35px;
      height: 35px;
    }
  }
  //
  svg {
    @include overlay;
  }
  //
  .a {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }
  //
  .b {
    fill: #fff;
  }
  //
}

.tt3__text {
  font-size: 1.5rem;
  font-weight: $font-weight-plus-bold;
  color: $color-white;
  //
  @include desktop {
    font-size: 3rem;
  }
}
</style>
