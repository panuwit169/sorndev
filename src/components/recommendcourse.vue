<template>
  <div class="course">
    <div class="container">
      <h1><strong>รายละเอียด บทเรียนทั้งหมด</strong></h1>
      <div class="list col-xs-6 col-md-4" v-for = "(list, index) in listplay">
        <div class="row" style="padding:30px 0">
          <router-link :to="{ name: 'Playlist', params: { play:list.name }}">
          <a href="#!" class="thumbnail">
          <div class="logo">
            <img :src="list.img" width="100">
            <h3>{{list.name}} Courses</h3>
            <p class="by">โดย {{list.teacher}}</p>
          </div>
          <div class="row">
                <div class="col-xs-12 col-md-12" style="height:400px">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{{list.description}}</p>
                </div>
            </router-link>
          </div>
          <!-- <div class="row">
            <div class="col-xs-6 col-md-4" style="height:160px" v-for ="(listplay, index) in list.list">
              <router-link :to="{ name: 'Playlist', params: { play:list.name }}">
                <a href="#!" class="thumbnail">
                  <img class="menu" :src="list.img" width="70">
                  <p>ตอนที่ {{index+1}} - {{listplay.ep}}</p>
                </a>
              </router-link>
            </div>
          </div> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['listplay']
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
    text-align: center;
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
  font-size: 16px;
  text-align: left;
}

</style>
