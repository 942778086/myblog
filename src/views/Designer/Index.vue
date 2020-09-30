<template>
  <div>
    <div id="designer">
      <DComponent ref="component" @buildBasic="buildBasic" @buildComp="buildComp" />
      <Displayer ref="displayer" />
      <Configer :comp="currentComp" ref="configer" />
      <Interactiver :comp="currentComp" ref="interactiver" />
    </div>
  </div>
</template>

<script>
import DComponent from '@/views/Designer/DComponent';
import Displayer from '@/views/Designer/Displayer';
import Configer from '@/views/Designer/Configer';
import Interactiver from '@/views/Designer/Interactive';
import { basicBuilder } from '@/views/Designer/designer';

export default {
  name: 'Designer',
  components: { DComponent, Displayer, Configer, Interactiver },
  data () {
    return {
      domIndex: 0,
      currentComp: null
    }
  },
  methods: {
    // 构造基础控件
    buildBasic(comp) {
      let domBuilder = basicBuilder[comp.component]
      this.$refs.displayer.$el.appendChild(this.buildDomDecoration(domBuilder))
    },
    // 构造复杂控件
    buildComp(comp) {
      import('../../common/component').then(Modules => {
        const Comp = Modules[comp.component]
        console.log(this.$refs.displayer.$el)
        this.$refs.displayer.$el.appendChild(this.buildDomDecoration(new Comp(comp.arg).domBase, comp))
      })
    },
    // 构建dom装饰
    buildDomDecoration(domBase, comp) {
      this.domIndex++
      let domContainer = document.createElement('div')
      domContainer.classList.add('component-container', 'current-component')
      const compId = `component-${this.domIndex}`
      domContainer.id = compId
      domContainer.getComponent = () => {
        return domBase.obj
      }
      this.setCurrentComp(comp)
      this.highLightComp(compId)
      domContainer.onclick = () => {
        this.highLightComp(compId)
        this.setConfigger(comp)
        this.setCurrentComp(comp)
      }
      domContainer.appendChild(domBase)
      return domContainer
    },
    // 高亮展示区组件
    highLightComp(compId) {
      let domArr = document.getElementsByClassName('component-container')
      domArr.forEach(item => {
        if (item.id !== compId) {
          item.classList.remove('current-component')
        } else {
          item.classList.add('current-component')
        }
      })
    },
    setCurrentComp(comp) {
      this.currentComp = comp
    },
    // 设置配置区
    setConfigger(comp) {
      this.currentComp = comp
    }
  }
}
</script>
<style>
  #designer {
    position: relative;
    height: 600px;
    display: flex;
    padding-top: 0.5rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
.current-component {
  transform: scale(0.9);
  border: 2px solid coral;
}
</style>
