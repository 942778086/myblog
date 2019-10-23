<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three'
// 图片纹理
const css = require('../assets/css3.jpg')
const h5 = require('../assets/h5.png')
const mysql = require('../assets/mysql.png')
const nginx = require('../assets/nginx.jpg')
const nodejs = require('../assets/nodejs.jpg')
const Vue = require('../assets/Vue.jpg')

export default {
  name: 'ThreeTest',
  data () {
    return {
      camera: null, // 摄像
      scene: null, // 场景
      renderer: null, // 渲染
      mesh: null, // 模型
      style: {},
      mats: [] // 纹理
    }
  },
  methods: {
    getSize () {
      this.style.height = window.innerHeight
      this.style.width = window.innerWidth
    },
    init: function () {
      let container = document.getElementById('container')
      console.log(container)

      // RENDERROOM
      // antialias 抗锯齿
      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMap.enabled = true
      container.appendChild(this.renderer.domElement)

      // CAMERA && SCENE
      // PerspectiveCamera 远景相机，参数（视角，相机拍摄面长宽比，能看到的最近距离，能看到的最远距离）
      this.camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
      this.camera.position.z = 1.5
      this.scene = new Three.Scene()

      // LIGHTROOM
      const light = new Three.Light(0xffffff, 1.5)
      light.position.set(1, 0, 0)
      this.scene.add(light)

      // MESHROOM
      // BoxGeometry 盒子模型，包括立方体所有顶点和对象
      const loadImgTexture = () => {
        const geometry = new Three.BoxGeometry(0.5, 0.5, 0.5)
        const loader = new Three.TextureLoader()
        loader.load(css, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        loader.load(h5, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        loader.load(mysql, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        loader.load(nginx, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        loader.load(nodejs, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        loader.load(Vue, (texture) => {
          const material = new Three.MeshBasicMaterial({ color: 0x739783, map: texture })
          this.mats.push(material)
        })
        this.mesh = new Three.Mesh(geometry, this.mats)
        this.scene.add(this.mesh)
      }
      loadImgTexture()
    },
    animate () {
      // requestAnimationFrame 以每秒60帧速率渲染，相当于定时器
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.02
      this.mesh.rotation.y += 0.02
      this.mesh.rotation.z += 0.01
      this.renderer.render(this.scene, this.camera)
    },
    convertTo3DCoordinate (e) {
      console.log(e.clientX, e.clientY)
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.convertTo3DCoordinate, false)
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
  #container {
    height: 600px;
  }
</style>
