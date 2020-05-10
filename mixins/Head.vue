<script>
/**
 * default meta
 * @type {{img: string, description: string, title: string, ogType: string}}
 */
const meta = {
  title: '8180',
  description:
    '株式会社ハイパーボールは2018年5月に設立したアニメーションに特化した映像制作会社です。Hyperboleとは「8180」と書いて「ハイパーボール」と読みます。意味は「誇張、大げさな表現」',
  keywords: '8180',
  img: 'https://8180.co.jp/ogp.png',
  ogType: 'website',
}

export default {
  /**
   * Meta information of each page
   * Insert from data {title, description, ogType}
   */
  head() {
    return {
      title: this.title || meta.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords || meta.keywords,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.desc || meta.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title || meta.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.desc || meta.description,
        },
        { hid: 'og:locale', name: 'og:locale', content: 'ja_JP' },
        {
          hid: 'og:type',
          name: 'og:type',
          content: this.ogType || meta.ogType,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://8180.co.jp/',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: meta.img,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title || meta.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.desc || meta.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: meta.img,
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@8180_Inc' },
      ],
    }
  },
}
</script>
