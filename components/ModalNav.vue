<template>
  <div class="modal-nav">
    <div class="mn__inner">
      <a
        class="mn__back"
        href="#"
        :data-curret-id="$store.getters['post/getCurrentPostIndex']"
        @click.prevent="$store.dispatch('setModalOpen', false)"
        >イチラン</a
      >
      <a
        href="#"
        class="mn__page mn__page--next"
        :data-next-id="next"
        @click.prevent="
          $store.dispatch(
            'setModalName',
            $store.getters['post/getPosts'][next].id,
          )
        "
        >ツギ
        <span class="mn__page-arrow">
          <TheArrow />
        </span>
      </a>
      <a
        href="#"
        class="mn__page mn__page--prev"
        :data-prev-id="prev"
        @click.prevent="
          $store.dispatch(
            'setModalName',
            $store.getters['post/getPosts'][prev].id,
          )
        "
        >マエ
        <span class="mn__page-arrow">
          <TheArrow />
        </span>
      </a>
    </div>
  </div>
</template>
<script>
import TheArrow from '~/components/TheArrow'

export default {
  name: 'ModalNav',
  components: { TheArrow },

  computed: {
    next() {
      return this.$store.getters['post/getNextPostIndex']
    },
    prev() {
      return this.$store.getters['post/getPrevPostIndex']
    },
  },
}
</script>
<style lang="scss" scoped>
.modal-nav {
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: 2px solid $color-black;
  //
  @include touch {
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
  }
  //
  @include desktop {
    padding-top: 85px;
    padding-bottom: 85px;
    border-width: 2px;
  }
}

.mn__inner {
  //
  @include desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw * 975 / 1920);
    margin: auto;
  }
}

.mn__back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $circle-size-m;
  height: $circle-size-m;
  font-size: 1.5rem;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  border: 1px solid $color-gray-level2;
  border-radius: 50%;
  //
  @include touch {
    margin: auto;
  }
  //
  @include desktop {
    order: 2;
    font-size: 1.6rem;
  }
  //
  @include fullhd {
    width: $circle-size-l;
    height: $circle-size-l;
  }
  //
  &:hover {
    //
  }
}

.mn__page {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  font-size: 2.5rem;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  border: 1px solid $color-gray-level2;
  border-radius: 37.5px / 50%;
  //
  @include touch {
    margin-top: 35px;
  }
  //
  @include desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 145px;
    height: 60px;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 1.6rem;
    border-radius: 35px / 50%;
  }
  //
  .mn__page-arrow {
    width: 14px;
    height: 8px;
    //
    @include touch {
      position: absolute;
      top: 50%;
    }
    //
    @include desktop {
      position: relative;
      width: 28px;
      height: 16px;
    }
  }
  //
  &--prev {
    //
    @include desktop {
      order: 1;
    }
    //
    .mn__page-arrow {
      @include touch {
        left: 25px;
        transform: translateY(-50%) scaleX(-1);
      }
      //
      @include desktop {
        order: -1;
        transform: scaleX(-1);
      }
    }
  }
  //
  &--next {
    @include desktop {
      order: 3;
    }
    //
    .mn__page-arrow {
      @include touch {
        right: 25px;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
