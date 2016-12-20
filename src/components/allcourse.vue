<template>
  <div class="course">
    <div class="container">
      <div class="title">
        <h1><strong>Course เรียนทั้งหมด<br>ทั้ง Front-End และ Frameworks ต่าง ๆ</strong></h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="col-xs-6 col-md-4">
            <router-link to="/playlist">
              <a href="#" class="thumbnail" style="vertical-align: middle">
                <img class="menu" src="../assets/logo.png" width="120">
              <h4>
                Vue.JS
              </h4>
          </router-link>
          </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <router-link to="/playlist">
              <a href="#" class="thumbnail" style="vertical-align: middle">
                <img class="menu" src="../assets/angular.png" width="120">
              <h4>
                AngularJS
              </h4>
            </router-link>
          </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <router-link to="/playlist">
              <a href="#" class="thumbnail" style="vertical-align: middle">
                <img class="menu" src="../assets/JavaScript.png" width="120">
              <h4>
                JavaScript
              </h4>
            </router-link>
          </a>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

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
    padding: 100px 0 50px 0;
    border-bottom: 1px solid #eee;

  }
</style>
