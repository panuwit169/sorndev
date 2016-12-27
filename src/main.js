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
    {name: '/', path: '/', component: Main},
    {name: 'Course', path: '/Course', component: Course},
    {name: 'Playlist', path: '/Playlist', component: Playlist},
    {path: '*', redirect: '/' }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth){
//     const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//     if (authUser && authUser.access_token){
//       next()
//     }else{
//       next({name: 'Main'})
//     }
//   }
//   next()
// })
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
