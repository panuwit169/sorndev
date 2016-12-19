<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Mains from './components/Mains'
// import Showplay from './components/Showplay'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Footers from './components/Footers'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    var vm = this
    vm.$router.push('./main')
    Listplay.on('child_added', function (data) {
      var item = data.val()
      item.id = data.key
      vm.listplay.push(item)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
