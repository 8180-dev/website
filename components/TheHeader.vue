<template>
  <header class="the-header">
    <n-link to="/" class="th__logo">
      <svg class="header-logo" viewBox="0 0 130.95 44.01">
        <title>logo-head</title>
        <g>
          <path
            class="a"
            d="M110,.61A21.17,21.17,0,0,0,89.11,22,20.93,20.93,0,1,0,131,22,21.16,21.16,0,0,0,110,.61Zm0,35.13A13.59,13.59,0,0,1,96.6,22a13.44,13.44,0,1,1,26.87,0A13.59,13.59,0,0,1,110,35.74Z"
          />
          <path
            class="a"
            d="M42.37.61a3.76,3.76,0,0,0-3.8,3.72V39.68a3.8,3.8,0,0,0,7.6,0V4.33A3.76,3.76,0,0,0,42.37.61Z"
          />
          <path
            class="a"
            d="M33.42,27.3a16.67,16.67,0,0,0-6.79-13.44,10.48,10.48,0,1,0-19.84,0A16.71,16.71,0,1,0,33.42,27.3ZM13.85,10.43a2.86,2.86,0,0,1,5.72,0,2.83,2.83,0,0,1,0,.41,2.86,2.86,0,0,1-5.66,0A2.83,2.83,0,0,1,13.85,10.43Zm2.86,26.1a9.19,9.19,0,0,1-5.05-16.87A9.19,9.19,0,0,1,25.9,27.34,9.19,9.19,0,0,1,16.71,36.53Z"
          />
          <path
            class="a"
            d="M68.07,44A16.71,16.71,0,0,0,78,13.86a10.48,10.48,0,1,0-19.84,0A16.71,16.71,0,0,0,68.07,44Zm0-7.48a9.2,9.2,0,1,1,9.19-9.19A9.2,9.2,0,0,1,68.07,36.53Zm-2.86-26.1a2.86,2.86,0,1,1,0,.41A2.83,2.83,0,0,1,65.21,10.43Z"
          />
        </g>
      </svg>
    </n-link>

    <mq-layout mq="desktop" class="th__trigger">
      <button @click="$store.dispatch('toggleMenuOpen')">
        <MenuTrigger />
      </button>
    </mq-layout>

    <div class="th__menu">
      <TheMenu />
    </div>
  </header>
</template>

<script>
import TheMenu from '~/components/TheMenu'
import MenuTrigger from '~/components/MenuTrigger'

export default {
  name: 'TheHeader',
  //
  components: {
    TheMenu,
    MenuTrigger,
  },
}
</script>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  top: 20px;
  right: $section-gutter-mobile;
  left: $section-gutter-mobile;
  z-index: $z-header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //
  @include desktop {
    top: 40px;
    right: $section-gutter-desktop;
    left: $section-gutter-desktop;
  }
}

.th__logo {
  position: relative;
  z-index: $z-header;
  display: inline-block;
  width: 65px;
  height: 22px;
  // rest
  @include desktop {
    width: 94px;
    height: 31px;
  }
  //
  svg {
    @include overlay;
  }
}

.header-logo {
  //
  .a {
    fill: $color-white;
  }
}

.th__trigger {
  position: relative;
  z-index: $z-header;
}

.th__menu {
  //
  @include touch {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $z-menu;
    pointer-events: none;
  }
}
</style>
