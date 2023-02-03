<template>
  <div class="frontPage" @click="toMainPage">
    <video-part />
    <div class="back"></div>
    <div class="left"></div>
    <div class="nameSpace">
      <div class="avaRoom">
        <img class="main-ava" src="../assets/ava.jpg" alt="me wjx">
      </div>
      <p class="label">
        欢迎<br>
        现在，我向你介绍自己<br>
        我，吴建星
      </p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { deviceMixin } from '@/mixins/checkDevice.js'
export default {
  name: 'FrontPage',
  mixins: [deviceMixin],
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
  display: table;
  cursor: default;
  z-index: -50;
}

.nameSpace{
    width: 3.5rem;
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
.main-ava{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 3px solid white;
  transform: translateY(-0.1rem);
}

.avaRoom{
  border-bottom: 1px solid white;
}
</style>

<style>
.mobile .main-ava{
  width: 1.3rem;
  height: 1.3rem;
  margin-bottom: 20px;
}
.mobile .label {
  margin-top: 20px;
}
</style>
