// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Main from './components/Main'
import Course from './components/Course'
import Playlist from './components/Playlist'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'Main', path: '/Main', component: Main},
    {name: 'Course', path: '/Course', component: Course},
    {name: 'Playlist', path: '/Playlist', component: Playlist}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
