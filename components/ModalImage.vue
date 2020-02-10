<template>
  <div class="modal-image">
    <ul class="mi__images">
      <li
        v-for="(item, index) in images"
        :key="`mi__image${index}`"
        class="mi__image"
      >
        <LazyImage :src="item.image" />
      </li>
    </ul>
  </div>
</template>

<script>
import LazyImage from '~/components/LazyImage'

export default {
  name: 'ModalImage',
  components: { LazyImage },

  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-image {
  //
}

.mi__images {
  //
}

.mi__image {
  margin-top: 3vw;
  overflow: hidden;
  border-radius: 15px;
  //
  @include desktop {
    margin-top: 50px;
  }
  //
  /deep/ img {
    width: 100%;
  }
}
</style>
