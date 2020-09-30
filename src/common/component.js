/**
 * 无限滚动控件
 */
export class Scroller {

  /**
   * 无限滚动DOM
   * @type {HTMLElement}
   */
  domBase

  /**
   * 下次滚动的起始
   * @type {Number}
   */
  startIndex

  /**
   * 需要滚动加载的数据
   * @type {{ label: String }[]}
   */
  data

  /**
   * 滚动size
   * @type {Number}
   */
  size

  height

  /**
   * 滚动到底部触发的回调
   * @type {Function}
   */
  onScrollDown

  /**
   * 构造节点
   * @param {Object} arg
   * @param {Object[]} arg.data
   * @param {Number} arg.size
   * @param {Number} arg.height
   * @param {Function} arg.onScrollDown
   * @param {HTMLElement} [arg.domParent]
   */
  constructor(arg) {
    this.size = arg.size || 20;
    this.data = arg.data;
    this.height = arg.height || 300;
    this.startIndex = 0;
    this.onScrollDown = arg.onScrollDown;
    this.init(arg);
  }

  init(arg) {
    let domContainer = this.domBase = document.createElement('div');
    domContainer.obj = this;
    domContainer.classList.add('scroller-body');
    let data = arg.data;
    let size = this.size;
    data.forEach((item, index) => {
      if (index >= size) {
        return;
      }
      let domNode = document.createElement('div');
      domNode.classList.add('scroller-node');
      item.className && (domNode.classList.add(item.className));
      domNode.textContent = item.label;
      domContainer.appendChild(domNode);
    })
    domContainer.addEventListener('scroll', (e) => {
      e.stopPropagation();
      const scrollTop = domContainer.scrollTop;
      const clientHeight = domContainer.clientHeight;
      const scrollHeight = domContainer.scrollHeight;
      const realHeight = scrollTop + clientHeight;
      if (realHeight >= scrollHeight) {
        this.render();
        this.onScrollDown && this.onScrollDown();
      }
      if (scrollTop === 0) {
        this.render(false);
      }
    })
    arg.domParent && arg.domParent.appendChild(domContainer);
  }

  /**
   * 滚动
   * @param {boolean} down 是否向下滚动
   */
  render(down = true) {
    if (down) {
      let size = this.size / 2;
      let start = this.startIndex + size;
      let data = this.data;
      let nodes = this.domBase.childNodes;
      nodes.forEach((node, index) => {
        node.textContent = data[index + start].label;
      })
      this.startIndex = start;
    }
  }

  /**
   * 设计scroller 大小
   * @param {Number} size
   */
  setSize(size) {}

  /**
   * 设置值
   * @param {Object[]} val
   */
  setValue(val) {}
}

/**
 * 开关控件
 */
export class Switch {

  domBase

  constructor() {
    const domBase = this.domBase = document.createElement('div')
    domBase.innerHTML = `
    <div class="switch">
      <input class="switch-checkbox" id="onoffswitch" type="checkbox">
      <label class="switch-label" for="onoffswitch">
        <span class="switch-inner" data-on="ON" data-off="OFF"></span>
        <span class="switch-switch"></span>
      </label>
    </div>`
  }
}




