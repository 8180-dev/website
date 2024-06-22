<template>
  <section id="news" class="section-news">
    <div class="sn__inner">
      <div class="sn__title">
        <TitleLevel1 :variation="`news`" />
      </div>

      <div class="sn__box">
        <div class="sn__twitter">
          <a href="https://twitter.com/8180_Inc" target="_blank">@8180_Inc</a>
        </div>

        <div class="">
          <a
            class="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/8180_Inc?ref_src=twsrc%5Etfw"
            >Tweets by 8180_Inc</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleLevel1 from '~/components/TitleLevel1'

export default {
  name: 'SectionNews',
  components: { TitleLevel1 },

  data() {
    return {
      list: [],
    }
  },

  computed: {},

  mounted() {},
}
</script>

<style lang="scss" scoped>
.section-news {
  position: relative;
  z-index: 2;
  padding-top: 90px;
  background-color: $color-black;
  //
  @include desktop {
    padding-top: 200px;
  }
}

.sn__inner {
  padding-right: $section-gutter-mobile;
  padding-bottom: 60px;
  padding-left: $section-gutter-mobile;

  @include desktop {
    padding-bottom: 100px;
  }
}

.sn__title {
  margin-bottom: 50px;
  //
  @include desktop {
    margin-bottom: 75px;
  }
}

.sn__box {
  color: $color-white;
  text-align: left;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba($color-black-dark, 0.8);
  //
  @include desktop {
    width: calc(100vw * 1000 / 1920);
    margin-right: auto;
    margin-left: auto;
  }
}

.sn__twitter {
  padding: 15px;
  font-size: 1.2rem;
  font-weight: $font-weight-plus-bold;
  //
  @include desktop {
    padding: 20px 25px 25px;
    font-size: 2.4rem;
  }
}

.sn__items {
  background-color: $color-black-dark;
}

.sn__item {
  padding: 15px;
  font-size: 1rem;
  line-height: calc(1em * 35 / 20);
  //
  @include desktop {
    padding: 20px 25px;
    font-size: 1.4rem;
  }

  @include fullhd {
    padding: 40px 48px;
    font-size: 1.6rem;
  }

  + .sn__item {
    border-top: 1px solid $color-black;
  }
}

.sn__time {
  font-size: 1rem;

  @include desktop {
    font-size: 1.2rem;
  }
}

.sn__content {
  font-size: 1.2rem;
  line-height: calc(1em * 35 / 20);
  //
  @include desktop {
    font-size: 1.4rem;
  }

  @include fullhd {
    font-size: 1.6rem;
  }
  //
  /deep/ .u-hidden {
    display: none;
  }

  //
  /deep/ img {
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 15px;

    @include desktop {
      margin-top: 20px;
    }
  }

  //
  /deep/ .Emoji {
    width: 12px;
    margin-top: 0;
    margin-right: 2px;
    margin-left: 2px;
    vertical-align: middle;
  }

  /deep/ span {
    display: none;
  }
}
</style>
