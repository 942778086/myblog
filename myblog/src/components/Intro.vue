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
      <div class="infoRoom">
        1999-05-07
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
    margin: 20px auto 0 auto;
  }
</style>
