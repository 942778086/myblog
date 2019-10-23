<template>
  <div class="intro">
    <div class="card">
      <div class="avaRoom">
        <img class="ava" src="../assets/ava.jpg">
      </div>
      <div class="infoRoom">
        吴建星
      </div>
      <div class="infoRoom">
        湖北     武汉
      </div>
      <div class="infoRoom">
        湖北大学
      </div>
      <div class="infoRoom lastInfo">
        1999-05-07
      </div>
      <div class="signRoom">
        we live alone, we die alone, everything else is just an illusion
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped>
.intro{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #35495e;
}
  .card{
    display: inline-block;
    width: 300px;
    height: 600px;
    border: 2px solid #41b883;
  }
.ava{
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 1px solid white;
  animation: ease-in 1s avaShow;
}
  .avaRoom{
    margin-top: 50px;
    border-bottom: 1px solid white;
  }
  .infoRoom{
    width: 50%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid white;
    color: white;
    margin: 15px auto 0 auto;
    padding-bottom: 15px;
  }
  .lastInfo{
    width: 100%;
  }
  .signRoom{
    width: 100%;
    height: 186px;
    display: table-cell;
    vertical-align: middle;
    font-size: 16px;
    color: white;
    font-style: oblique;
  }
</style>
