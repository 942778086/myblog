// 此文件用于存放一些基本配置内的东西，目的是分离实际业务与配置

/**
 * 基础模块构建函数
 * @type {{div: basicBuilder.div, text: basicBuilder.text}}
 */
export const basicBuilder = {
  div: () => {},
  text: () => {}
}

let scrollData = []
for (let i = 0; i < 1000; i++) {
  scrollData.push({
    label: `this is [${i}]`
  })
}
export const componentList = [{
  icon: require('../../assets/compIcon/box.png'),
  label: 'div',
  component: 'div',
  arg: {
    width: '150px',
    height: '150px'
  }
}, {
  icon: require('../../assets/compIcon/text.png'),
  label: 'text',
  component: 'text',
  arg: {
    label: 'input someThing'
  }
}, {
  icon: require('../../assets/compIcon/scroll.png'),
  label: '无限滚动',
  component: 'Scroller',
  arg: {
    data: scrollData,
    height: 500
  }
}, {
  icon: require('../../assets/compIcon/switch.png'),
  label: '开关',
  component: 'Switch',
  arg: {}
}, {
  icon: require('../../assets/compIcon/表单.png'),
  label: '表单',
  component: 'Form',
  arg: {}
}, {
  icon: require('../../assets/compIcon/流程图.png'),
  label: '流程图',
  component: 'Step',
  arg: {}
}, {
  icon: require('../../assets/compIcon/tree.png'),
  label: 'Tree',
  component: 'Tree',
  arg: {}
}, {
  icon: require('../../assets/compIcon/饼图.png'),
  label: '饼图',
  component: 'PieChart',
  arg: {}
}, {
  icon: require('../../assets/compIcon/折线图.png'),
  label: '折线图',
  component: 'LineChart',
  arg: {}
}, {
  icon: require('../../assets/compIcon/条形图.png'),
  label: '条形图',
  component: 'BarChart',
  arg: {}
}]
