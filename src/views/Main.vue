<template>
  <div class="main">
    <full-page ref="fullpage" :options="fullPageOptions">
      <div class="section">
        <Intro />
      </div>
      <div class="section">
        <SchoolLife />
      </div>
      <div class="section">
        <Skill />
      </div>
    </full-page>
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import SchoolLife from '../components/SchoolLife'
import 'fullpage.js/vendors/easings'

export default {
  name: 'Main',
  components: { SchoolLife, Skill, Intro },
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
