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
        <Designer />
      </div>
    </full-page>
  </div>
</template>

<script>
import Intro from './Intro'
import Designer from './Designer/Index'
import SchoolLife from './SchoolLife'
import 'fullpage.js/vendors/easings'

export default {
  name: 'Main',
  components: { SchoolLife, Designer, Intro },
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
