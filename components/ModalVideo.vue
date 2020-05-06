<template>
  <div class="modal-video">
    <div class="mv__inner" :data-youtube-id="videoId">
      <YoutubePlayer :video-id="videoId" />
    </div>
  </div>
</template>

<script>
import YoutubePlayer from '~/components/YoutubePlayer'

export default {
  name: 'ModalVideo',

  components: { YoutubePlayer },

  props: {
    videoId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      //
    }
  },

  computed: {
    //
  },

  methods: {
    //
  },
}
</script>

<style lang="scss" scoped>
.modal-video {
  //
}

.mv__inner {
  position: relative;
  height: 0;
  padding-top: 25px;
  padding-bottom: 56.25%;
  //
  /deep/ iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
  }
}
</style>
