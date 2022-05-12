import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home.vue'
import GameBox from '../view/GameBox.vue'
import MyZone from '../view/MyZone.vue'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/GameBox',
    name: 'GameBox',
    component: GameBox
  },
  {
    path: '/MyZone',
    name: 'MyZone',
    component: MyZone
  }
]

export default new Router({
  routes
})
