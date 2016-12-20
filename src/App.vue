<template>
  <div id="app">
    <router-view :listplay="listplay"></router-view>
  </div>
</template>

<script>
// import Mains from './components/Mains'
// import Showplay from './components/Showplay'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Footers from './components/Footers'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDzZeuk5iAFxBciQ1mDErvqe1UZF15Rf5c",
    authDomain: "sorndev.firebaseapp.com",
    databaseURL: "https://sorndev.firebaseio.com",
    storageBucket: "sorndev.appspot.com",
    messagingSenderId: "857410261779"
  }

firebase.initializeApp(config)
var Listplay = firebase.database().ref('listplay')

export default {
  data () {
    return {
      listplay: []
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
  /*font-family: 'Roboto', sans-serif;*/
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
