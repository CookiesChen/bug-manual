import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import school from './modules/school'
import apply from './modules/apply'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [
    'user',
    'apply',
    'school'
  ]
})

const actions = {}
const getters = {}
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user, school, apply
  },
  plugins: [vuexLocal.plugin]
})