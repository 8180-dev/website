<template>
  <section class="section-news">
    <div class="sn__inner">
      <div class="sn__title">
        <TitleLevel1 :variation="`news`" />
      </div>

      <div class="sn__box">
        <div class="sn__twitter">
          <a href="https://twitter.com/8180_Inc" target="_blank">@8180_Inc</a>
        </div>
        <ul class="sn__items">
          <li
            v-for="(item, index) in list"
            :key="`sn__item${index}`"
            class="sn__item"
            v-html="item.content"
          ></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import TitleLevel1 from '~/components/TitleLevel1'

export default {
  name: 'SectionNews',
  components: { TitleLevel1 },

  data() {
    return {
      list: [],
    }
  },

  mounted() {
    this.$nextTick(async () => {
      const { data } = await axios.get(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftwitrss.me%2Ftwitter_user_to_rss%2F?user=8180_Inc',
      )
      this.list = data.items
      console.log(this.list)
    })
  },
}
</script>

<style lang="scss" scoped>
.section-news {
  padding-top: 90px;
  //
  @include desktop {
    padding-top: 200px;
  }
}

.sn__inner {
  padding-right: $section-gutter-mobile;
  padding-left: $section-gutter-mobile;
}

.sn__title {
  margin-bottom: 50px;
  //
  @include desktop {
    margin-bottom: 75px;
  }
}

.sn__box {
  padding-bottom: 30px;
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
    font-size: 1.2rem;
  }
  //
  + .sn__item {
    border-top: 1px solid $color-black;
  }
  //
  /deep/ .u-hidden {
    display: none;
  }
  //
  /deep/ img {
    width: 100%;
    margin-top: 10px;
    border-radius: 15px;
  }
  //
  /deep/ .Emoji {
    width: 12px;
    margin-top: 0;
    margin-right: 2px;
    margin-left: 2px;
    vertical-align: middle;
  }
}
</style>
