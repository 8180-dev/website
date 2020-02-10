<template>
  <div class="modal-close">
    <span class="mc__inner">
      <span v-for="index in 2" :key="`li${index}`" class="mc__line" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ModalClose',
}
</script>

<style lang="scss" scoped>
.modal-close {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $circle-size-s;
  height: $circle-size-s;
  border: 1px solid $color-gray-level2;
  border-radius: 50%;
  //
  @include touch {
    top: -3vw;
    left: 3vw;
  }
  //
  @include desktop {
    width: $circle-size-m;
    height: $circle-size-m;
  }
  //
  @include fullhd {
    width: $circle-size-l;
    height: $circle-size-l;
  }
}

.mc__inner {
  position: absolute;
  top: calc(50% - 15px / 2);
  left: calc(50% - 15px / 2);
  display: inline-block;
  width: 15px;
  height: 15px;
  opacity: 1;
  //
  @include desktop {
    top: calc(50% - 30px / 2);
    left: calc(50% - 30px / 2);
    width: 30px;
    height: 30px;
  }
}

.mc__line {
  position: absolute;
  top: calc(50% - 1px / 2);
  left: 0;
  display: inline-block;
  width: 15px;
  height: 1px;
  background-color: $color-white;
  //
  @include desktop {
    width: 30px;
  }
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
