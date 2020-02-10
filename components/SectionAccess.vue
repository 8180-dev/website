<template>
  <section class="section-access">
    <div class="sa__inner">
      <div class="sa__map">
        <AccessMap />
        <a
          class="sa__map-link"
          href="https://goo.gl/maps/DMJXJ5bZC4YVHovc9"
          target="_blank"
          >グーグルマップデミル</a
        >
      </div>

      <div class="sa__caption">
        <p class="sa__address">
          株式会社ハイパーボール ／ Hyperbole Inc. <br />
          168-0074 東京都杉並区上高井戸1-2-4ポルトメウス307 <br />
          TEL : 03-5357-8228
        </p>
        <p class="sa__copy">COPYRIGHTS © Hyperbole. All Rights Reserved.</p>
      </div>
    </div>
  </section>
</template>

<script>
import AccessMap from '~/components/AccessMap'

export default {
  name: 'SectionAccess',
  components: { AccessMap },

  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss" scoped>
.section-access {
  //
}

.sa__inner {
  //
}

.sa__map {
  //
  @include desktop {
    text-align: right;
  }
}

.sa__map-link {
  display: inline-block;
  padding: 0.75em 2em;
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: $font-weight-plus-e-bold;
  color: $color-white;
  border: 1px solid $color-gray-level2;
  border-radius: 15px / 50%;
  //
  @include desktop {
    margin-top: 30px;
    font-size: 1.6rem;
    border-radius: 25px / 50%;
  }
}

.sa__caption {
  margin-top: 30px;
  font-size: 1rem;
  text-align: left;
  //
  @include desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
    font-size: 1.2rem;
  }
}

.sa__address {
  line-height: 1.5;
  color: $color-white;
  //
  @include desktop {
    line-height: 2;
  }
}

.sa__copy {
  color: $color-gray-level2;
  //
  @include touch {
    margin-top: 15px;
  }
}
</style>
