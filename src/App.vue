<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    let isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    isPhone && this.$router.push({
        path: '/phoneMain'
      })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-size: 0.1rem;
}
*::-webkit-scrollbar {
    width: 12px;
    background-color: #eee;
}

*::-webkit-scrollbar-track {
    background-color: #eee;
}

*::-webkit-scrollbar-thumb {
    background: #3DB6A4;
}

*::-webkit-scrollbar-button:start {
    background-size: 12px 12px;
}

*::-webkit-scrollbar-button:end {
    background-size: 12px 12px;
}
</style>
