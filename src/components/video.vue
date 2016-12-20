<template>
  <div class="video">
    <div class="container">
      <div class="header col-md-12">
        <div class="title pull-left">
          <li>
            <img src="../assets/angular.png" width="100">
          </li>
          <li>
            <h1><strong>AngularJS</strong></h1>
          </li>
        </div>
      </div>
      <div class="col-md-12">
        <div class="description">
          <p>Angular 2 is basically a collection of Components brought together within modules. The many tools, such as the Angular CLI, allow you to easily create Components. The key to understanding Angular 2 is understanding how Components interact with each other through Services, Inputs, and Outputs. It's also essential to understand the basics of styling components and how CSS is shared so you can make your application look the way you want.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title{
    margin-bottom: 20px;
    text-align: left;
    display: inline-block;
  }

  li{
    display: inline-block;
  }

  .description{
    padding: 30px 0;
    text-align: left;
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

  .video{
    padding: 50px 0 50px 0;
    background-color: #1b1920;
    color: #666;
  }

  .header{
    border-bottom :1px solid #666;
  }
</style>
