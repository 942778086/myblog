<template>
  <div>
    <div class="phone-homepage" ref="body" @click.capture="hideEle">
      <div class="phone-home-intro">"hello, this is wujianx."</div>
      <div class="phone-home-circle" @click="showEle"></div>
    </div>
    <div class="like" v-if="eleVisible">
      <span class="label">世界上美好的东西不太多,立秋傍晚从河对岸吹来的风</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eleVisible: false
    }
  },
  methods: {
    showEle() {
      this.eleVisible = true;
      this.$refs.body.style.filter = 'blur(5px)'
    },
    hideEle() {
      this.eleVisible = false;
      this.$refs.body.style.filter = ''
    }
  }
}
</script>

<style scoped>
.phone-homepage {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/img/1f12f34430nrtnH.jpg");
  background-size: 100% 100%;
  font-size: 0.5rem;
  transition: 1s filter;
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
  animation: ease-in 3s show;
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
.like {
  position: absolute;
  width: 80%;
  height: 100px;
  line-height: 100px;
  top: 200px;
  bottom: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid white;
  color: white;
  font-weight: bold;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
  transition: all 1s;
	animation: gradient 15s ease infinite;
}

.label {
  display: inline-block;
  vertical-align: middle;
  line-height: 22px;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
@keyframes scaleAnimate {
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
