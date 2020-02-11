<template>
  <section class="section-profile">
    <div class="sp__title">
      <TitleLevel3 :variation="`profile`" />
    </div>

    <div class="sp__text" v-html="postJson.profile.text" />

    <ul class="sp__cards">
      <li
        v-for="(item, index) in postJson.profile.cards"
        :key="`sp__card${index}`"
        class="sp__card"
      >
        <ProfileCard :index="index" :item="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import TitleLevel3 from '~/components/TitleLevel3'
import ProfileCard from '~/components/ProfileCard'

import postJson from '~/assets/json/post.json'

export default {
  name: 'SectionProfile',
  components: {
    ProfileCard,
    TitleLevel3,

    //
  },

  data() {
    return {
      postJson,
    }
  },
}
</script>

<style lang="scss" scoped>
.section-profile {
  //
}

.sp__text {
  font-size: 1.2rem;
  line-height: calc(1em * 42 / 24);
  color: $color-white;
  text-align: justify;
  //
  @include desktop {
    width: 780px;
    margin: auto;
    font-size: 1.6rem;
  }
  //
  /deep/ > p + p {
    margin-top: 1.5em;
  }
}

.sp__cards {
  margin-top: 65px;
  //
  @include desktop {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }
}

.sp__card {
  + .sp__card {
    @include touch {
      margin-top: 75px;
    }
    //
    @include desktop {
      margin-left: calc(100vw * 150 / 1920);
    }
  }
}
</style>
