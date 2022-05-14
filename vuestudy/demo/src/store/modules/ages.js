export default {
  state: {
    ages: '的年龄是：',
    num: localStorage.getItem('num') || 1
  },
  getters: {},
  mutations: {
    add (state) {
      state.num++
      localStorage.setItem('num', state.num)
    }
  },
  actions: {}
}