<template>
  <div class="modal-video">
    <div class="mv__inner" :data-youtube-id="videoId">
      <client-only>
        <youtube
          ref="youtube"
          :player-vars="playerVars"
          :video-id="videoId"
          @playing="playing"
          @paused="paused"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalVideo',

  props: {
    videoId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      playerVars: {
        autoplay: 1,
      },
    }
  },

  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },

  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      // console.log('\o/ we are watching!!!')
    },
    paused() {
      //
    },
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
