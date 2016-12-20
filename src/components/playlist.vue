<template>
  <div class="app">
    <Navbar></Navbar>
    <Video></Video>
    <div class="play">
      <div class="container">
          <div class="col-md-12" style="height:478px;overflow: hidden;">
            <div class="col-xs-8 col-md-9" style="padding:0px">
              <div class="embed-responsive embed-responsive-16by9" style="border:5px solid #555">
                <iframe class="embed-responsive-item" :src="'http://www.youtube.com/embed/-bzWSJG93P8?autoplay=1'"  frameborder="0" allowfullscreen ></iframe>
              </div>
            </div>
            <div class="col-xs-4 col-md-3 scrollbar" id="style-1">
              <!-- <div v-for ="(list, index) in play.list" @click = "setlink(list.link)"> -->
              <a class="list">
                <div class="img">
                  <strong>1&nbsp;</strong>
                  <img class="pull-left" src="../assets/angular.png" width="50px">
                  <strong style="text-align:left">&nbsp;1</strong>
                </div>
              </a>
              <a class="list">
                <div class="img">
                  <strong>2&nbsp;</strong>
                  <img class="pull-left" src="../assets/angular.png" width="50px">
                  <strong style="text-align:left">&nbsp;2</strong>
                </div>
              </a>
            <!-- </div> -->
            </div>
          </div>
      </div>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Video from './Video'
import Footers from './Footers'

export default {
  components: {
    Navbar,
    Video,
    Footers
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h4{
  color: #555;
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
  color: #fff;
}

.play{
  padding-top: 0px;
  padding-bottom: 50px;
  background-color: #1b1920;
}

.playlist{
  border: 2px solid #555;
  height: 420px;
}

.list{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 10px;
  border-bottom: 5px solid #222;
  margin-right: 1px;
  display: block;
}
.img{
  padding: 0;
  display: flex;
  align-items: center;
}
.list:hover{
  background-color: #777;
  text-decoration: none;
}

.list:active,
.list:focus{
  text-decoration:none;
  border:1px solid #FFFF00;
  background-color: #323232;
}

.course{
  margin-top: 20px;
}

.scrollbar
{
	overflow-y: scroll;
	margin-bottom: 25px;
  background-color:#252525;
  padding:0px;
  border-top:5px solid #555;
  border-bottom:5px solid #555;
  border-right:5px solid #555;
  height:478px;
}

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #252525;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #9a9a9a;
}


</style>
