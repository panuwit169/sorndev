<template>
  <div class="course">
    <div class="container">
      <div class="list" v-for = "(list, index) in listplay">
        <div class="logo">
          <img :src="list.img" width="100">
          <h3>{{list.name}} Lessons</h3>
        </div>
        <!-- <div class="col-xs-6 col-md-4">
          <div v-for ="(list, index) in play.list" @click = "setlink(list.link)">
            <div class="item">
              <a href="#!" class="thumbnail">
                <p class="by">สอนโดย CodeAddictTH</p>
                <img class="menu" src="../assets/logo.png" width="70">
                <p>ตอนที่ {{index+1}} - {{list.ep}}</p>
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['listplay'],
  computed: {
    play () {
      let vm = this
      return vm.listplay.find(item => item.name === vm.$route.params.play)
    }
  },
  data () {
    return {
      link: ''
    }
  },
  mounted () {
    // var vm = this
    this.link = this.play.list[0].link
    let vm = this
    return vm.listplay.find(item => item.name === vm.$route.params.play)
  },
  methods: {
    setlink (link) {
      this.link = link
    }
  }
}
</script>


<style scoped>
.course{
  padding: 50px 0;
  background-color: #f5f5f5;
}

.list{
  padding: 30px 0px 250px 0px;
}

.logo{
  padding: 20px 0 30px 0;
}

.by{
    color: #bac6c9;
    font-size: 14px;
}

a{
  color: #555;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
}

a:hover{
  color: #222;
  text-decoration: none;
}

p{
  font-size: 18px;
}

</style>
