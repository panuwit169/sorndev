<template>
  <div class="course">
    <div class="container">
      <div class="title">
        <h1><strong>คู่มือเทคโนโลยีล่าสุด<br>Front-End และ Frameworks</strong></h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="col-xs-6 col-md-2" v-for = "(list, index) in listplay" v-show="index<6">
            <router-link :to="{ name: 'Playlist', params: { play:list.name }}">
              <a href="#" class="thumbnail" style="vertical-align: middle">
                <img class="menu" :src="list.img" width="120">
              <h4>
                {{list.name}}
              </h4>
              </a>
            </router-link>
          </div>
        </div>
        <router-link to = "/course">
          <a href="#!" class="title">เลือก Course อื่น ๆ</a>
        </router-link>
    </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    props: ['listplay'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .title{
    margin-bottom: 50px;
  }

  a.title{
    color : #47b8f0;
    font-size: 20px;
    font-weight: bold;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    text-decoration: none;
  }

  a.title:hover{
    color :#0993d8;
    text-decoration: none;
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

  .course{
    margin-top: 100px;
  }
</style>
