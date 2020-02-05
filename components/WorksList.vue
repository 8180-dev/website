<template>
  <div class="works-list">
    <ul class="wl__items">
      <li
        v-for="(item, index) in list"
        :key="`wl__item${index}`"
        class="wl__item"
      >
        <a class="wl__target" href="#">
          <WorksCard :meta="item" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
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
</style>
