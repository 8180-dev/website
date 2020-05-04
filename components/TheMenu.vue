<template>
  <div
    :class="[
      {
        'is-open': $store.getters.getMenuOpen,
        'is-scroll':
          $store.getters.getPageScrollY > $store.getters.getPageHeight * 0.75,
      },
    ]"
    class="the-menu"
  >
    <div class="tm__inner">
      <ul class="tm__list">
        <li
          v-for="(item, index) in list"
          :key="`menu${index}`"
          ref="items"
          class="tm__item"
        >
          <n-link :to="item.link" class="tm__target" v-html="item.name" />
        </li>
      </ul>
    </div>
    <mq-layout mq="desktop" class="tm__bg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'ホーム',
          link: '/',
        },
        {
          name: 'ワークス',
          link: '/works/',
        },
        {
          name: 'カンパニー',
          link: '/company/',
        },
        {
          name: 'アクセス',
          link: '/access/',
        },
      ],
    }
  },

  computed: {
    //
  },

  watch: {
    //
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.the-menu {
  //
  @include touch {
    @include overlay;
    //
    z-index: $z-menu;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: 0;
    //
    &.is-open {
      pointer-events: auto;
      opacity: 1;
    }

    &.is-scroll {
      //
    }
  }
  //
  @include desktop {
    //
  }
}

.tm__bg {
  z-index: 1;
  background-color: $color-black-dark;
  //
  @include overlay;
}

.tm__inner {
  position: relative;
  z-index: 9;
  //
  @include touch {
    width: 100%;
  }
}

.tm__list {
  //
  @include touch {
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
  }
  //
  @include desktop {
    display: flex;
  }
}

.tm__item {
  color: $color-white;
  //
  @include touch {
    + .tm__item {
      margin-top: 25px;
    }
  }
  //
  @include desktop {
    + .tm__item {
      margin-left: 45px;
    }
  }
  //
  @include widescreen {
    + .tm__item {
      margin-left: 55px;
    }
  }
}

.tm__target {
  display: block;
  width: 100%;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  font-size: 2.5rem;
  font-weight: $font-weight-plus-e-bold;
  background-color: rgba($color-black, 1);
  // border: 1px solid rgba($color-gray-level2, 1);
  border-radius: 37.5px / 50%;
  transition: background-color 0.2s $easeOutSine, border 0.2s $easeOutSine;
  //
  @include desktop {
    width: 105px;
    font-size: 1.4rem;
    border-width: 1px;
    border-radius: 20px / 50%;
  }
  //
  @include widescreen {
    width: 125px;
    font-size: 1.6rem;
    border-radius: 20px / 50%;
  }

  &.tm__target.tm__target:hover {
    background-color: lighten($color-black, 2.5%);
    transition: background-color 0s;
  }
}
</style>
