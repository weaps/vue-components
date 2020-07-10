import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: false,
    num: 0
  },
  mutations: {
    setState(state, data) {
      state.testState = data
    },
    setNum(state, data) {
      state.num = data
    }
  },
  actions: {
    setNum () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(120)
        }, 1000)
      })
    }
  },
  getters: {}
})