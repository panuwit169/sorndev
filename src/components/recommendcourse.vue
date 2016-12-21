<template>
  <div class="course">
    <div class="container">
      <h2>Lessons และ Courses ต่าง ๆ</h2>
      <div class="list" v-for = "(list, index) in listplay">
        <div class="row" style="padding:30px 0">
          <div class="logo">
            <img :src="list.img" width="100">
            <h3>{{list.name}} Lessons</h3>
            <p class="by">โดย {{list.teacher}}</p>
          </div>
          <div class="row">
            <div class="col-xs-6 col-md-4" style="height:160px" v-for ="(listplay, index) in list.list">
              <router-link :to="{ name: 'Playlist', params: { play:list.name }}">
                <a href="#!" class="thumbnail">
                  <img class="menu" :src="list.img" width="70">
                  <p>ตอนที่ {{index+1}} - {{listplay.ep}}</p>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['listplay'],
  // computed: {
  //   play () {
  //     let vm = this
  //     return vm.listplay.find(item => item.name === vm.$route.params.play)
  //   }
  // },
  // data () {
  //   return {
  //     link: ''
  //   }
  // },
  // mounted () {
  //   // var vm = this
  //   this.link = this.play.list[0].link
  //   let vm = this
  //   return vm.listplay.find(item => item.name === vm.$route.params.play)
  // },
  // methods: {
  //   setlink (link) {
  //     this.link = link
  //   }
  // }
}
</script>


<style scoped>
.course{
  padding: 50px 0;
  background-color: #f5f5f5;
}

.row{
    margin: 0px;
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
