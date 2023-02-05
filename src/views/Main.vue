<template>
  <div class="main">
    <full-page ref="fullpage" :options="fullPageOptions">
      <div class="section">
        <Intro />
      </div>
      <div class="section">
        <Skill />
      </div>
      <div class="section">
        <Photo />
      </div>
    </full-page>
  </div>
</template>

<script>
import Intro from './Intro'
import Photo from './Photo'
import Skill from './Skill'
import 'fullpage.js/vendors/easings'

export default {
  name: 'Main',
  components: { Skill, Photo, Intro },
  data () {
    return {
      isPhone: false,
      isIos: false,
      fullPageOptions: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: false,
        scrollBar: true,
        menu: '#menu',
        easing: 'easeInOutQuint',
        scrollingSpeed: 800
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || (document.body.clientWidth < 900);
      this.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (this.isPhone) {
        if (this.isIos) {
          document.querySelector('html').setAttribute('style', 'font-size: 80px');
        } else {
          document.querySelector('html').setAttribute('style', 'font-size: 80px');
        }
      }
    })
  }
}
</script>

<style scoped>
.main{
    background-color: #35495e;
}
</style>
