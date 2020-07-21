<template>
  <div class="videoRoom">
    <video autoplay="autoplay" muted loop :width="width" :height="height">
      <source src="../assets/video/1.mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'videoPart',
  data () {
    return {
      width: 0,
      height: 1080
    }
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }
}
</script>

<style scoped>
.videoRoom{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
