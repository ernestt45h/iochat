import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Room from '@/components/Room'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Room',
      component: Room
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})
