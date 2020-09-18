<template>
  <div class="frontPage" @click="toMainPage">
    <video-part />
    <div class="back"></div>
    <div class="left"></div>
    <div class="nameSpace">
      <div class="avaRoom">
        <img class="ava" src="../assets/ava.jpg" alt="me wjx"></div>
      <p class="label">
        ME<br>
        吴建星
      </p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import VideoPart from '../components/VideoPart'
export default {
  name: 'FrontPage',
  components: { VideoPart },
  methods: {
    toMainPage () {
      this.$router.push({
        path: '/Main'
      })
    }
  }
}
</script>

<style scoped>
.frontPage{
  position: absolute;
  width: 100%;
  height: 100%;
  /*background: linear-gradient(to right, rgba(44, 62, 80, 0.2), rgba(66, 185, 131, 0.23));*/
  background-size: 800% 100%;
  display: table;
  cursor: default;
  overflow: hidden;
}
.back{
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(44, 62, 80), rgb(66, 185, 131));
  background-size: 800% 100%;
  /*animation: ease-in 5s infinite alternate backMove;*/
  display: table;
  cursor: default;
  z-index: -50;
}

.nameSpace{
    width: 2.5rem;
    font-size: 0.2rem;
    font-weight: bold;
    color: white;
    display: table-cell;
    vertical-align: middle;
    text-indent: 5px;
    z-index: 30;
    animation: ease-in 3s show;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.ava{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 2px solid white;
}
.avaRoom{
  border-bottom: 1px solid white;
}
</style>
