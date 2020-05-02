<template>
  <div class="works-card">
    <div class="wc__figure-wrap">
      <figure v-lazy:background-image="getImage" class="wc__figure" />
    </div>

    <div class="wc__caption">
      <h3 class="wc__title" v-text="meta && meta.title"></h3>
      <div class="wc__time" v-text="getDate(meta && meta.date)"></div>
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
import dayjs from 'dayjs'
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

  computed: {
    getImage() {
      if (
        this.meta &&
        this.meta.acf &&
        this.meta.acf.images &&
        this.meta.acf.images[0] &&
        this.meta.acf.images[0].image
      ) {
        return this.meta.acf.images[0].image
      } else {
        return { height: 0, width: 0 }
      }
    },
  },

  methods: {
    getDate: date => dayjs(date).format('YYYY MM'),
  },
}
</script>

<style lang="scss" scoped>
.works-card {
  overflow: hidden;
  border-radius: 15px;
  -webkit-mask-image: -webkit-radial-gradient(#000, #000);
}

.wc__figure-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * 420 / 700 / 2);
  padding-bottom: calc(100% * 420 / 700 / 2);
  overflow: hidden;
  opacity: 0.8;
  transition: 0.3s $easeOutSine;
  //
  .works-card:hover & {
    opacity: 1;
  }
}

.wc__figure {
  @include bg-cover;
  @include overlay;
}

.wc__caption {
  min-height: 140px;
  padding: 35px 25px 0;
  text-align: left;
}

.wc__title {
  font-size: 1.4rem;
  line-height: 1.5;
  color: $color-white;
  //
  @include desktop {
    font-size: 1.6rem;
  }
}

.wc__time {
  margin-top: 10px;
  font-size: 1.2rem;
  color: $color-gray-level2;
  //
  @include desktop {
    //
  }
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
