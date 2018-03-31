// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import materialize from 'materialize-css'

//Remember To import socket.io

import 'materialize-css/dist/css/materialize.css'
import 'material-icons/material.css'

Vue.use(Vuex)

export const bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
