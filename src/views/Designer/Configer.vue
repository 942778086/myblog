<template>
  <div class="config-room">
    <div v-if="comp">
      <div class="config-title">{{ comp.label }}</div>
      <div class="config-set-arg">
        <button class="config-button" @click="showSetArgDraw = true">设置参数</button>
      </div>
      <div class="config-set-value">
        <button class="config-button" @click="showSetValueDraw = true">设置值</button>
      </div>
      <div class="config-"></div>
    </div>
    <div class="drawer" ref="draw" v-show="showSetArgDraw">
      <div class="close" @click="showSetArgDraw = false"></div>
    </div>
    <div class="drawer" v-show="showSetValueDraw">
    </div>
  </div>
</template>

<script>
import JsonEditor from 'jsoneditor'

export default {
  data() {
    return {
      showSetArgDraw: false,
      showSetValueDraw: false,
      argJson: {},
      valueJson: {},
      jsonEditor: null
    }
  },
  props: {
    comp: {
      type: Object
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      this.jsonEditor = new JsonEditor(this.$refs.draw, {})
    },
    onJsonChange() {}
  }
}
</script>

<style scoped>
.config-room {
  width: 1.5rem;
  height: 4rem;
  background-color: #e2e2e2;
  border-radius: 10px;
}
.config-title {
  margin: 0.15rem;
}
.config-button {
  width: 0.6rem;
  height: 0.2rem;
  background-color: #4fc08d;
  border-radius: 0.1rem;
  color: white;
  border: 1px solid #2c3e50;
  margin: 0.2rem;
  cursor: pointer;
}
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}
.config-button:focus {
  outline: none;
}
.close {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  width: 0.2rem;
  height: 0.2rem;
  background-image: url("../../assets/imgs/close.png");
  background-size: 100% 100%;
}
</style>
