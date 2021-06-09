import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import canciones from '@/modules/canciones'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // datos de prueba
    canciones,
  }
})
