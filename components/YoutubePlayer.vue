<template>
  <youtube
    ref="youtube"
    :player-vars="playerVars"
    :video-id="videoId"
    @playing="playing"
    @paused="paused"
    @ready="onReady"
  />
</template>

<script>
export default {
  name: 'YoutubePlayer',

  props: {
    videoId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      playerVars: {
        autohide: 1,
        autoplay: 1,
        controls: 0,
        disablekb: 0,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        loop: 0,
        modestbranding: 1,
        mute: 1,
        playsinline: 1,
        rel: 0,
      },
    }
  },

  computed: {
    player() {
      return this.$refs.youtube && this.$refs.youtube.player
    },
  },

  mounted() {
    this.player.addEventListener('onStateChange', this.onStateChange)
    this.player.addEventListener(
      'onPlaybackQualityChange',
      this.onPlaybackQualityChange,
    )
  },

  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('playing')
    },
    paused() {
      console.log('paused')
    },
    onReady() {
      console.log('onReady')

      const size =
        this.$mq === 'desktop'
          ? 'large'
          : this.$mq === 'widescreen' || this.$mq === 'fullhd'
          ? 'hd1080'
          : 'default'
      console.log('size', size, this.player.getAvailableQualityLevels())
      this.player.setPlaybackQuality(size)
      this.player.mute()
      this.player.playVideo()
    },
    onStateChange(event) {
      console.log('onStateChange')

      /**
       * Youtube States:
       *  -1 - unstarted
       *  0 - ended
       *  1 - playing
       *  2 - paused
       *  3 - buffering
       *  5 - video cued
       */
      if (event.data === 0) {
        this.player.playVideo()
      }
    },
    onPlaybackQualityChange(data) {
      console.log(data)
    },
  },
}
</script>
