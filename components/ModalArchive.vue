<template>
  <div class="modal-archive">
    <TitleLevel2 :text="`アーカイブ`" />
    <ul class="ma__items">
      <li
        v-for="(item, index) in $store.getters['post/getPosts']"
        :key="`ma__item${index}`"
        class="ma__item"
      >
        <a
          href="#"
          class="ma__target"
          :data-id="item.id"
          @click.prevent="$store.dispatch('setModalName', item.id)"
          >{{ item.title }}
          <span class="ma__arrow">
            <TheArrow />
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import TheArrow from '~/components/TheArrow'
import TitleLevel2 from '~/components/TitleLevel2'

export default {
  name: 'ModalArchive',
  components: { TheArrow, TitleLevel2 },
}
</script>

<style lang="scss" scoped>
.modal-archive {
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: $color-black;
  //
  @include touch {
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
  }
  //
  @include desktop {
    padding-top: 200px;
    padding-bottom: 200px;
  }
}

.ma__items {
  padding-top: 50px;
  //
  @include desktop {
    width: calc(100vw * 1080 / 1920);
    padding-top: 90px;
    margin: auto;
  }
}

.ma__item {
  text-align: left;
}

.ma__target {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 1rem;
  line-height: 1.5;
  color: $color-white;
  border-bottom: 1px solid $color-gray-level0;
  //
  @include desktop {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 1.6rem;
    border-width: 2px;
  }
  //
  &:hover {
    //
  }
}

.ma__arrow {
  position: relative;
  width: 14px;
  height: 8px;
  //
  @include desktop {
    width: 28px;
    height: 16px;
  }
}
</style>
