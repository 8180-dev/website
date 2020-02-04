<template>
  <div
    :class="[{ 'is-open': $store.getters.getMenuOpen }]"
    class="menu-trigger"
  >
    <span class="mt__dot-wrap">
      <span v-for="index in 4" :key="`li${index}`" class="mt__dot" />
    </span>
    <span class="mt__line-wrap">
      <span v-for="index in 2" :key="`li${index}`" class="mt__line" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'MenuTrigger',

  computed: {
    //
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.menu-trigger {
  position: relative;
  left: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $circle-size-s;
  height: $circle-size-s;
  border: 0.5px solid $color-gray-level2;
  border-radius: 50%;
}

.mt__dot-wrap {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  //
  .menu-trigger.is-open & {
    opacity: 0;
  }
}

.mt__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: $color-white;
  border-radius: 59%;
  //
  &:nth-of-type(2) {
    left: 10px;
  }
  //
  &:nth-of-type(3) {
    top: 10px;
  }
  //
  &:nth-of-type(4) {
    top: 10px;
    left: 10px;
  }
}

.mt__line-wrap {
  position: absolute;
  top: calc(50% - 15px / 2);
  left: calc(50% - 15px / 2);
  display: inline-block;
  width: 15px;
  height: 15px;
  opacity: 0;
  //
  .menu-trigger.is-open & {
    opacity: 1;
  }
}

.mt__line {
  position: absolute;
  top: calc(50% - 1px / 2);
  left: 0;
  display: inline-block;
  width: 15px;
  height: 1px;
  background-color: $color-white;
  //
  &:nth-of-type(1) {
    transform: rotate(45deg);
  }
  //
  &:nth-of-type(2) {
    transform: rotate(-45deg);
  }
}
</style>
