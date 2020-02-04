export default {
  setPosts({ commit }, value) {
    commit('posts', value)
  },
  setCachePosts({ commit }, value) {
    commit('cachePosts', value)
  },
}
