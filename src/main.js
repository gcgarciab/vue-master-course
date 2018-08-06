// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
import firebase from 'firebase'

Vue.component('AppDate', AppDate)
Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAZ5WDdWHTAcCYzNioW95Kb6p1fg3eT7ww',
  authDomain: 'vue-school-forum-8dbd4.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-8dbd4.firebaseio.com',
  projectId: 'vue-school-forum-8dbd4',
  storageBucket: 'vue-school-forum-8dbd4.appspot.com',
  messagingSenderId: '199481282060'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
