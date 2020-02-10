<template>
  <div v-if="$store.getters.getModalOpen" class="the-modal">
    <div ref="box" class="tm__inner">
      <div class="tm__title">
        <TitleLevel2 :text="post && post.title" />
      </div>

      <div class="tm___main">
        <div
          v-if="post && post.acf && post.acf['youtube-id']"
          class="tm___video"
        >
          <ModalVideo :video-id="post && post.acf && post.acf['youtube-id']" />
        </div>

        <div
          v-if="
            post &&
              post.acf &&
              post.acf.images &&
              post.acf.images[0] &&
              post.acf.images[0].image
          "
          class="tm___image"
        >
          <ModalImage :images="post && post.acf && post.acf.images" />
        </div>

        <div class="tm__caption">
          <div class="tm__caption-title">
            {{ post && post.title }}
          </div>
          <p
            class="tm__caption-text"
            v-html="post && post.acf && post.acf.caption"
          />
        </div>
      </div>

      <ModalNav />

      <ModalArchive />
    </div>
    <div class="tm__close">
      <button @click.prevent="$store.dispatch('setModalOpen', false)">
        <ModalClose />
      </button>
    </div>
    <div class="tm__bg"></div>
  </div>
</template>

<script>
import ModalVideo from '~/components/ModalVideo'
import ModalImage from '~/components/ModalImage'
import ModalNav from '~/components/ModalNav'
import ModalArchive from '~/components/ModalArchive'
import TitleLevel2 from '~/components/TitleLevel2'
import ModalClose from '~/components/ModalClose'

export default {
  name: 'TheModal',
  components: {
    ModalClose,
    TitleLevel2,
    ModalArchive,
    ModalNav,
    ModalImage,
    ModalVideo,
  },

  computed: {
    post() {
      return this.$store.getters['post/getPosts'].find(
        data => data.id === this.$store.getters.getModalName,
      )
    },
    getModalName() {
      return this.$store.getters.getModalName
    },
  },

  watch: {
    getModalName(name) {
      console.log('✨ change getModalName', name)

      const { box } = this.$refs
      box && (box.scrollTop = 0)
    },
  },

  mounted() {
    //
  },
}
</script>

<style lang="scss" scoped>
.the-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-modal;
  pointer-events: auto;
}

.tm__bg {
  z-index: 5;
  background-color: $color-black-dark;
  //
  @include overlay;
}

.tm__close {
  position: fixed;
  top: $section-gutter-mobile;
  right: $section-gutter-mobile;
  z-index: $z-modal-close;
  //
  @include desktop {
    top: calc(195px + 45px / 2);
    right: calc((100vw - (100vw * 1080 / 1920)) / 2 / 2);
    transform: translateY(-50%) translateX(50%);
  }
}

.tm__inner {
  position: relative;
  z-index: 9;
  height: 100%;
  padding-top: 120px;
  overflow: auto;
  //
  @include desktop {
    padding-top: 195px;
  }
}

.tm__title {
  padding-bottom: 50px;
  //
  @include desktop {
    padding-bottom: 100px;
  }
}

.tm___main {
  @include desktop {
    width: calc(100vw * 1080 / 1920);
    margin-right: auto;
    margin-left: auto;
  }
}

.tm___title {
  //
}

.tm___video {
  @include touch {
    padding-right: 3vw;
    padding-left: 3vw;
  }
}

.tm___image {
  @include touch {
    padding-right: 3vw;
    padding-left: 3vw;
  }
}

.tm__caption {
  padding-bottom: 70px;
  margin-top: 50px;
  font-size: 1.3rem;
  line-height: calc(1em * 45 / 26);
  text-align: left;
  //
  @include touch {
    padding-right: $section-gutter-mobile;
    padding-left: $section-gutter-mobile;
  }
  //
  @include desktop {
    padding-bottom: 200px;
    margin-top: 100px;
    font-size: 1.6rem;
    line-height: 2;
  }
}

.tm__caption-title {
  font-size: 1.3rem;
  font-weight: $font-weight-plus-bold;
  line-height: 1.5;
  color: $color-white;
  //
  @include desktop {
    font-size: 1.6rem;
  }
}

.tm__caption-text {
  margin-top: 25px;
  color: $color-gray-level2;
  //
  @include desktop {
    margin-top: 35px;
  }
}
</style>
