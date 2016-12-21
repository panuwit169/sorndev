<template>
  <div class="app">
    <Navbar></Navbar>
    <Allcourse :listplay="listplay"></Allcourse>
    <Recommendcourse :listplay="listplay"></Recommendcourse>
    <Footers></Footers>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Allcourse from './Allcourse'
import Recommendcourse from './Recommendcourse'
import Footers from './Footers'

export default {
  props: ['listplay'],
  components: {
    Navbar,
    Allcourse,
    Recommendcourse,
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
