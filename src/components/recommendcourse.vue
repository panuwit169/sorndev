<template>
  <div class="course">
    <div class="container">
      <div class="list">
        <div class="logo">
          <img src="../assets/logo.png" width="100">
          <h3>Vue.JS Lessons</h3>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/logo.png" width="70">
              <p>ตอนที่ 1 - V-Install</p>
            </a>
          </div>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/logo.png" width="70">
              <p>ตอนที่ 2 - V-Model</p>
            </a>
          </div>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/logo.png" width="70">
              <p>ตอนที่ 3 - V-On</p>
            </a>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="logo">
          <img src="../assets/angular.png" width="100">
          <h3>AngularJS Lessons</h3>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/angular.png" width="70">
              <p>ตอนที่ 1 - ติดตั้งและใช้งาน</p>
            </a>
          </div>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/angular.png" width="70">
              <p>ตอนที่ 2 - Directive และ Expression</p>
            </a>
          </div>
        </div>
        <div class="col-xs-6 col-md-4">
          <div class="item">
            <a href="#!" class="thumbnail">
              <p class="by">สอนโดย CodeAddictTH</p>
              <img class="menu" src="../assets/angular.png" width="70">
              <p>ตอนที่ 3 - NgModel directive</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
