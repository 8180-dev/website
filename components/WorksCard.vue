<template>
  <div class="works-card">
    <div class="wc__figure-wrap">
      <figure
        v-lazy:background-image="require('Images/dummy/thumb.jpg')"
        class="wc__figure"
      />
    </div>

    <div class="wc__caption">
      <h3 class="wc__title" v-text="meta.title"></h3>
      <div class="wc__time" v-text="meta.time"></div>
    </div>

    <div class="wc__more">
      <div class="wc__more-text">クワシク</div>
      <div class="wc__more-icon">
        <TheArrow />
      </div>
    </div>
  </div>
</template>

<script>
import TheArrow from '~/components/TheArrow'

export default {
  name: 'WorksCard',
  components: { TheArrow },
  props: {
    meta: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.works-card {
  overflow: hidden;
  background-color: $color-black;
  border-radius: 15px;
  box-shadow: 0 0 50px rgba($color-black-dark, 0.6);
}

.wc__figure-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * 420 / 700 / 2);
  padding-bottom: calc(100% * 420 / 700 / 2);
  overflow: hidden;
}

.wc__figure {
  @include bg-cover;
  @include overlay;
}

.wc__caption {
  min-height: 140px;
  padding: 40px 25px 0;
  text-align: left;
}

.wc__title {
  font-size: 1.4rem;
  color: $color-white;
  //
  @include desktop {
    //
  }
}

.wc__time {
  margin-top: 10px;
  font-size: 1.2rem;
  color: $color-gray-level2;
}

.wc__more {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  color: $color-gray-level2;
  border-top: 1px solid $color-gray-level0;
}

.wc__more-text {
  font-size: 1.4rem;
  //
  @include desktop {
    font-size: 1.4rem;
  }
}

.wc__more-icon {
  position: relative;
  width: 25px;
  height: 14px;
}
</style>
