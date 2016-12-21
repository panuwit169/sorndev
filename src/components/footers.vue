<template>
  <div class="footer" id="radial-center">
    <div class="container">
      <div class="col-xs-12 col-md-4">
        <div class="link">
          <li><router-link to = "/main"><a href="#">Home</a></router-link></li>
          <li><router-link to = "/course"><a href="#">Course</a></router-link></li>
        </div>
        <div class="link">
          <li><router-link to = "/main"><a href="#!">© SornDev</a></router-link></li>
          <li><a href="https://www.facebook.com/mildpanuwit.ynwa">By Panuwit Sattayawattanagul</a>,<a href="https://www.facebook.com/groups/InformationTechnology/?fref=ts">IT@KMUTNB</a></li>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="linklogo">
          <router-link to = "/main"><a class="logo" href="#"><img src="../assets/learning.png" width="90px">&nbsp;&nbsp;SornDev</a></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: #1b1920;
  color: #666;
  text-align: left;
}

.link{
    padding: 30px 0 10px 0;
}

li{
  display: block;
  padding: 5px 0;
}

a{
  text-decoration: none;
  color: #666;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  font-size: 16px;
}

a:hover{
  color: #999;
}

a.logo{
  text-decoration: none;
  color: #666;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  font-size: 20px;
  font-weight: bold;
}

#radial-center {
  background: -webkit-radial-gradient(#23222b, #1b1920, #1b1920); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#23222b, #1b1920, #1b1920); /* For Opera 11.6 to 12.0 */
    background: -moz-radial-gradient(#23222b, #1b1920, #1b1920); /* For Fx 3.6 to 15 */
    background: radial-gradient(#23222b, #1b1920, #1b1920); /* Standard syntax (must be last) */
}

.linklogo{
  padding: 80px 0;
  text-align: right;
}


</style>
