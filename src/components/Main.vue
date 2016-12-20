<template>
  <div class="app">
    <Navbar></Navbar>
    <Mainbanner></Mainbanner>
    <Coursemenu></Coursemenu>
    <Mainbanner2></Mainbanner2>
    <Popular></Popular>
    <Join></Join>
    <Footers></Footers>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Mainbanner from './Main-banner'
import Coursemenu from './Coursemenu'
import Mainbanner2 from './Mainbanner2'
import Popular from './Popular'
import Join from './Join'
import Footers from './Footers'

export default {
  props: ['listplay'],
  components: {
    Navbar,
    Mainbanner,
    Coursemenu,
    Mainbanner2,
    Popular,
    Join,
    Footers
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
