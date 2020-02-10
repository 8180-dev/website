/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'

import storeState from './store/post/state'
import storeMutations from './store/post/mutations'
import storeActions from './store/post/actions'
import storeGetters from './store/post/getters'

import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'
import getters from './store/getters'

Vue.use(Vuex)

const post = {
  state: storeState,
  mutations: storeMutations,
  actions: storeActions,
  getters: storeGetters,
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    post,
  },
})

Vue.component('LazyImage', {})
Vue.component('GMap', {})
Vue.component('GMapMarker', {})
Vue.component('ClientOnly', {})
Vue.component('youtube', {})

System.config({
  paths: {
    '@/*': '*',
    '~/*': '*',
    'Sass/*': 'assets/sass/*',
    'Js/*': 'assets/js/*',
    'Images/*': 'assets/images/*',
  },
})
