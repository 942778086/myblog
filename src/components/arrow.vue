<template>
    <div class="arrow-wrapper" @click="goDown">
        <div class="arrowSS">
            <a class="arrowSS_style"></a>
        </div>
        <div class="arrow-label">下划</div>
    </div>

</template>

<script>
export default {
    methods: {
        goDown() {
            document.querySelector('.main').__vue__.$refs.fullpage.api.moveSectionDown()
        }
    }
};
</script>

<style>
.arrow-wrapper {
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
    display: flex;
    cursor: pointer;
}
.arrowSS {
    animation: bounce-inSS 2s infinite;
}
.arrow-label {
    color: white;
    margin-left: 0.2rem;
}
.arrowSS_style {
  display: block;
  margin: 0 auto;
  width: 0.15rem;
  height: 0.15rem;
  border-right: 0.03rem solid white;
  border-top: 0.03rem solid white;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  cursor: pointer;
}
@keyframes bounce-inSS {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>