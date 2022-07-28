import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import persistedstate from 'vuex-persistedstate'

let list = axios.get('./data.json')
export default new Vuex.Store({
  state: {
    list
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedstate()]
})


