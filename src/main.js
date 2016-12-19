// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Main from './components/Main'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'main', path: '/main', component: Main}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
