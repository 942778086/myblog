<template>
  <div class="phone-homepage">
      <div class="phone-home-intro">"hello, this is wujianx."</div>
      <div class="phone-home-circle"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.phone-homepage {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://i.loli.net/2020/07/20/th5qlCvnkO2HspE.jpg");
  background-size: 100% 100%;
  font-size: 0.5rem;
}
.phone-home-intro {
  position: absolute;
  bottom: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  color: white;
  padding: 10px;
  font-weight: bold;
  border: 2px solid white;
}
.phone-home-circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  animation: scaleAnimate 3s infinite reverse cubic-bezier(0, 1, 1, 0);
}
@keyframes scaleAnimate {
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
