<template>
  <div class="works-list">
    <ul class="wl__items">
      <li
        v-for="(item, index) in items"
        :key="`wl__item${index}`"
        class="wl__item"
      >
        <a
          class="wl__target"
          href="#"
          :data-link="item.id"
          @click.prevent="
            $store.dispatch('setModalName', item.id) &&
              $store.dispatch('setModalOpen', true)
          "
        >
          <WorksCard :meta="item" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { orderBy } from 'Js/array'
import WorksCard from '~/components/WorksCard'

export default {
  name: 'WorksList',
  components: { WorksCard },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    items() {
      return orderBy(this.$store.getters['post/getPosts'], ['order'], ['desc'])
    },
  },
}
</script>

<style lang="scss" scoped>
.works-list {
  //
}

.wl__items {
  //
  @include desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(100vw * 1460 / 1920);
    margin: auto;
  }
}

.wl__item {
  margin-bottom: 45px;
  //
  @include desktop {
    // space - 3%
    width: calc((100% - 3% * 2) / 3);
    margin-bottom: calc((100vw * 1460 / 1920) * 0.03);
  }
}

.wl__target {
  display: block;
  background-color: $color-black;
  box-shadow: 0 0 50px rgba(black, 0.2);
  transition: transform 0.3s $easeInOutSine, box-shadow 0.3s $easeInOutSine;
  //
  &:hover {
    background-color: lighten($color-black, 0.5%);
    box-shadow: 0 20px 80px rgba(black, 0.5);
    transform: translateY(-10px);
  }
}
</style>
