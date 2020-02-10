export default {
  getCachePosts: state => state.cachePosts,
  getPosts: state => state.posts,

  getCurrentPostIndex: (_state, getters, _rootState, rootGetters) => {
    return [...getters.getPosts].findIndex(
      post => post.id === rootGetters.getModalName,
    )
  },
  getPrevPostIndex: (_state, getters) => {
    if (getters.getCurrentPostIndex === 0) {
      return getters.getPosts.length
    } else {
      return getters.getCurrentPostIndex - 1
    }
  },
  getNextPostIndex: (_state, getters) => {
    if (getters.getCurrentPostIndex === getters.getPosts.length - 1) {
      return 0
    } else {
      return getters.getCurrentPostIndex + 1
    }
  },

  getPosts1: state => [...state.posts].slice(0, 6),
}
