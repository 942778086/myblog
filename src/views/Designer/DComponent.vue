<template>
  <div class="component-room">
    <div class="component-item" :draggable="true" @dragstart="startDrag" @dragend="buildComponent(item, $event)" v-for="(item, index) in componentsList">
      <div class="component-wrapper">
        <img class="component-icon" :draggable="false" :src="item.icon">
        <div>{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import { componentList } from '@/views/Designer/designer';

export default {
  data() {
    return {
      componentsList: componentList
    }
  },
  methods: {
    startDrag(e) {
      e.currentTarget.classList.add('move')
    },
    buildComponent(comp, e) {
      e.currentTarget.classList.remove('move')
      this.$emit(['div', 'text'].includes(comp.component) ? 'buildBasic' : 'buildComp', comp)
    }
  }
}
</script>

<style scoped>
.component-room {
  width: 1.4rem;
  height: 4rem;
  padding: 0.2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 10px;
  overflow: hidden;
}
.component-item {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #e2e2e2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.component-icon {
  height: 0.25rem;
}
.move {
  cursor: move;
}
</style>
