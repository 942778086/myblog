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
  }
}
</script>

<style scoped>
.main{
    background-color: #35495e;
}
</style>
