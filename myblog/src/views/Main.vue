<template>
  <div class="main">
    <full-page ref="fullpage" :options="fullPageOptions">
      <div class="section">
        <Intro />
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

export default {
  name: 'Main',
  components: { Skill, Intro },
  data () {
    return {
      fullPageOptions: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
      }
    }
  }
}
</script>

<style scoped>
.main{}
</style>
