<template>
  <div class="lesson">
  <div class="col-xs-6 col-md-4">
    <div v-for ="(list, index) in play.list" @click = "setlink(list.link)">
      <div class="item">
        <a href="#!" class="thumbnail">
          <p class="by">สอนโดย CodeAddictTH</p>
          <img class="menu" src="../assets/logo.png" width="70">
          <p>ตอนที่ {{index+1}} - {{list.ep}}</p>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['play'],
  data () {
    return {
    }
  }
}
</script>

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
