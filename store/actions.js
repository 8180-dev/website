export default {
  setPageData({ commit }, value) {
    commit('pageData', value)
  },

  toggleMenuOpen({ commit, state }) {
    let isOpen = state.menuOpen
    isOpen = !isOpen
    commit('menuOpen', isOpen)
  },
  setMenuOpen({ commit }, value) {
    commit('menuOpen', value)
  },

  setModalName({ commit }, value) {
    commit('modalName', value)
  },

  setPostReady({ commit }, value) {
    commit('postReady', value)
  },
  setPageReady({ commit }, value) {
    commit('pageReady', value)
  },

  setPageName({ commit }, data) {
    commit('pageName', data)
  },
}
