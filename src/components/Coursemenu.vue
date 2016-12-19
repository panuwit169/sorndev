<template>
  <div class="course">
    <div class="container">
      <div class="title">
        <h1><strong>The insider’s guide to cutting-edge<br>front-end tools and frameworks</strong></h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="col-xs-6 col-md-2">
            <a href="#" class="thumbnail" style="vertical-align: middle">
              <img class="menu" src="../assets/logo.png" width="120">
            <h4>
              Vue.JS
            </h4>
          </a>
          </div>
          <div class="col-xs-6 col-md-2">
            <a href="#" class="thumbnail" style="vertical-align: middle">
              <img class="menu" src="../assets/angular.png" width="120">
            <h4>
              AngularJS
            </h4>
          </a>
          </div>
        </div>
        <router-link to = "/menu">
          <a href="#!" class="title">EXPLORE THE LIBRARY OF LESSONS</a>
        </router-link>
    </div>
    </div>
    <hr>
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
    margin-top: 100px;
  }
</style>
