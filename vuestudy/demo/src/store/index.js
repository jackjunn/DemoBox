import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import names from './modules/names'
import ages from './modules/ages'

export default new Vuex.Store({
  //类似于组件中的data
  state: {

    vuexxx: '我是VUEX',
    vuexxxx: '我是vuex二号'
  },
  //类似于组将中的computed
  getters: {
    change (state) {
      return state.vuexxxx.length
    }
  },
  //类似于组件中的methed
  mutations: {
    btn (state, targetVal) {
      alert(state.vuexxx + targetVal)
    }
  },
  //和mutations类似，主要用于异步
  actions: {},
  //对vuex中数据进行再细分
  modules: {
    names,
    ages
  }
})