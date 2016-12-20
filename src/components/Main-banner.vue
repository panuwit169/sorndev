<template>
  <div id="app">
    <div class="banner" id="radial-center">
      <div class="container">
          <h1 class="banner_h1">วิดีโอการสอน Web Development สำหรับ Developer</h1>
          <p class="banner_p">เรียนรู้ Frameworks ล่าสุดจากผู้เชี่ยวชาญเฉพาะทาง</p>
          <router-link to = "/course">
          <a href="#"><button class="btn btn-danger" style="padding:15px"><strong>PICK A COURSE TO WATCH</strong></button></a>
          </router-link>
      </div>
    </div>
    <div class="army-chevron"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#radial-center {
  background: -webkit-radial-gradient(#23222b, #1b1920, #1b1920); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#23222b, #1b1920, #1b1920); /* For Opera 11.6 to 12.0 */
    background: -moz-radial-gradient(#23222b, #1b1920, #1b1920); /* For Fx 3.6 to 15 */
    background: radial-gradient(#23222b, #1b1920, #1b1920); /* Standard syntax (must be last) */
}

.banner{
  margin-top:50px;
  padding-top: 100px;
  padding-bottom: 100px;
}

h1.banner_h1{
  color:#fff;
  font-weight: 700;
  font-size: 70px;
  padding-bottom: 50px;
}

p.banner_p{
  color:#fff;
  font-weight: 100;
  font-size: 30px;
  padding-bottom: 30px;
}

.army-chevron {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 100%;
  height: 150px;
  position: relative;
  margin-top:-100px;
  padding-top: 5px;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
}

.army-chevron::before {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 50%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  -o-text-overflow: clip;
  text-overflow: clip;
  background: #1b1920;
  text-shadow: none;
  -webkit-transform:    skewY(6deg);
  transform:    skewY(6deg);
}

.army-chevron::after {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 50%;
  height: 100%;
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  border: none;
  font: normal 100%/normal Arial, Helvetica, sans-serif;
  color: #1b1920;
  -o-text-overflow: clip;
  text-overflow: clip;
  background: #1b1920;
  text-shadow: none;
  -webkit-transform:    skewY(-6deg);
  transform:    skewY(-6deg);
}



</style>
