<script>
export default {
  async fetch({ app, store }) {
    const query = {
      // type: 'works',
      //      custom_per_page: 1,
      //      _embed: 1,
    }
    if (store.getters['post/getPosts'][0]) {
      return false
    } else {
      const { data } = await app.$api.get(`/works`, query)
      store.dispatch('post/setPosts', data)
      store.dispatch('setPostReady', true)

      console.log('🙏🏻 get 8180 works data +', data.length)
    }
  },
}
</script>
