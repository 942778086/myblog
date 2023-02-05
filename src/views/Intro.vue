<template>
  <div class="intro">
    <div class="card">
      <div class="intro-ava-room">
        <img class="ava" src="../assets/ava.jpg" />
      </div>
      <div class="info-room">吴建星</div>
      <div class="info-room">湖北 武汉</div>
      <div class="info-room">湖北大学</div>
      <div class="info-room last-info">1999-05-07</div>
      <div class="sign-room">
        we live alone, we die alone, everything else is just an illusion
      </div>
    </div>
    <div class="intro-setting" @click="showSetting = !showSetting">
      <svg
        t="1675607515548"
        class="sys-icon icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2721"
        width="32"
        height="32"
      >
        <path
          d="M939.880137 299.43679 83.552951 299.43679c-16.57449 0-30.011524-13.101389-30.011524-29.67588s13.437034-29.67588 30.011524-29.67588L939.880137 240.08503c16.57449 0 30.011524 13.101389 30.011524 29.67588S956.454628 299.43679 939.880137 299.43679z"
          fill="white"
          p-id="2722"
        ></path>
        <path
          d="M785.821389 546.053584 83.552951 546.053584c-16.57449 0-30.011524-13.613042-30.011524-30.187533s13.437034-30.187533 30.011524-30.187533L785.821389 485.678518c16.57449 0 30.011524 13.613042 30.011524 30.187533S802.39588 546.053584 785.821389 546.053584z"
          fill="white"
          p-id="2723"
        ></path>
        <path
          d="M939.880137 791.647071 83.552951 791.647071c-16.57449 0-30.011524-13.101389-30.011524-29.67588s13.437034-29.67588 30.011524-29.67588L939.880137 732.295312c16.57449 0 30.011524 13.101389 30.011524 29.67588S956.454628 791.647071 939.880137 791.647071z"
          fill="white"
          p-id="2724"
        ></path>
      </svg>
    </div>
    <div class="setting-list" v-show="showSetting">
      <div class="setting-item" @click="clickImg">来点儿图片</div>
      <!-- <div class="setting-item" @click="clickMedia">来点儿音乐</div> -->
    </div>
    <div ref="backgroundroom" class="backgroundroom"></div>
    <transition name="fade">
      <div class="right-top-bg customscroll" v-show="showImg">
        <div v-for="(item, index) in favImages" class="star" :key="index">
          <div @click="setBackground(item.img)">
            <div>
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="right-top-bg customscroll" v-show="showMedia">
        <div v-for="(item, index) in favMedia" :key="index">
          <div class="star">
            <div @click="setBackgroundMusic(item.img)">
              <div>
                <img :src="item.img" />
              </div>
            </div>
          </div>
          <div class="media-title">{{ item.title }}</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="intro-label">
        {{ words[0] }}
        <br />
        <span class="intro-nexttext" @click="nextLabel">NEXT</span>
      </div>
    </transition>
    <arrow />
  </div>
</template>

<script>
import arrow from "../components/arrow.vue";

export default {
  components: { arrow },
  name: "Intro",
  data() {
    return {
      showSetting: false,
      nodes: null,
      showImg: false,
      showMedia: false,
      backgroundMap: new Map(),
      favImages: [
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/1.jpg",
        },
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/2.jpg",
        },
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/3.jpg",
        },
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/4.jpg",
        },
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/5.jpg",
        },
        {
          img: "https://wjxcloud-1258315462.cos.ap-guangzhou.myqcloud.com/6.jpg",
        },
      ],
      favMedia: [
        {
          type: "music",
          img: "https://i.loli.net/2020/07/21/Kt2hGvJaFBypOsq.jpg",
          title: "Young and Beautiful-Lana Del Rey",
          resource: "",
        },
        {
          type: "music",
          img: "https://i.loli.net/2020/07/21/1XGr3JIB7HjPNKW.jpg",
          title: "you-愈月",
          resource: "",
        },
        {
          type: "music",
          img: "https://i.loli.net/2020/07/21/cnQVv8TY1oKfUWM.jpg",
          title: "Skinny Love-birdy",
          resource: "",
        },
      ],
      words: [
        "我还有火车和夜路要赶。",
        "只有你是青天一样可爱",
        "无数渺小的思考，填满了人的一生",
        "盈盈一水间，脉脉不得语。——《迢迢牵牛星》",
        "人世皆攘攘，相对唯顷刻 ——土方岁三",
        "“就是现在”——符华",
        "神仙保佑",
        "没有一个冬天不可逾越，没有一个春天不会来临。——南方周末",
        "只有看尽人世繁华，并且有能力随意享受繁华的人，才有资格说淡泊名利之类的话",
        "理性做事，感性做人。",
        "踏实做事，忌眼高手低。",
        "万水千山，陪我去看。",
      ],
    };
  },
  mounted() {
    this.setBackground(this.favImages[3].img);
  },
  methods: {
    clickImg() {
      this.showMedia = false;
      this.showImg = !this.showImg;
    },
    clickMedia() {
      this.showImg = false;
      this.showMedia = !this.showMedia;
    },
    setBackground(img) {
      let map = this.backgroundMap;
      let imgDom = map.get(img);
      let backgroundDom = this.$refs.backgroundroom;
      if (!map.get(img)) {
        let bgImg = new Image();
        bgImg.src = img;
        bgImg.className = "backgroundimg";
        bgImg.style.height = "100%";
        bgImg.onload = () => {
          map.set(img, bgImg);
          backgroundDom.innerHTML = "";
          backgroundDom.appendChild(bgImg);
        };
      } else {
        backgroundDom.innerHTML = "";
        backgroundDom.appendChild(imgDom);
      }
    },
    setBackgroundMusic(resource) {},
    nextLabel() {
      let words = this.words;
      words.push(words[0]);
      words.splice(0, 1);
    },
  },
};
</script>

<style scoped>
.intro {
  position: relative;
  width: 100%;
  height: 100%;
}

.intro-setting {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}

.setting-list {
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
  color: white;
  text-align: left;
  padding: 0.1rem;
  background-color: #89aeff38;
  border-radius: 0.1rem;
}

.setting-item {
  margin: 0.1rem 0 0.1rem 0;
  cursor: pointer;
  font-size: 0.12rem;
}

.card {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 4rem;
  border: 2px solid #41b883;
  transition: all 1s;
  z-index: 999;
}

.backgroundroom {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 2rem;
  height: 4rem;
  overflow: hidden;
}
.ava {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  transform: translateY(-0.25rem);
  border: 1px solid white;
}

.intro-ava-room {
  margin-top: 0.5rem;
  border-bottom: 1px solid white;
}
.info-room {
  width: 50%;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid white;
  color: white;
  font-size: 0.12rem;
  margin: 0.15rem auto 0 auto;
  padding-bottom: 0.15rem;
}
.last-info {
  width: 100%;
  font-size: 0.12rem;
}
.sign-room {
  width: 100%;
  height: 0.7rem;
  display: table-cell;
  vertical-align: middle;
  font-size: 0.12rem;
  color: white;
  font-style: oblique;
}

.left-top-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  overflow-x: auto;
  overflow-y: hidden;
}

.right-top-bg {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  overflow-x: auto;
  overflow-y: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.commontitle {
  color: white;
  font-size: 0.2rem;
  text-align: center;
  padding: 5%;
  border: 1px solid white;
  background-color: #35495e;
}

.star {
  width: 0.85rem;
  height: 1rem;
  margin: 0.22rem;
  -webkit-transform: rotate(60deg);
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}

.star div,
.star img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.star > div {
  -webkit-transform: rotate(-120deg);
}

.star > div > div {
  -webkit-transform: rotate(60deg);
}

.media-title {
  color: white;
}

.intro-label {
  position: absolute;
  bottom: 0.3rem;
  font-size: 0.12rem;
  width: 100%;
  color: white;
  text-align: center;
  cursor: default;
}
.intro-nexttext {
  color: white;
  font-size: 0.12rem;
  text-decoration: underline white;
  cursor: pointer;
}
.sys-icon {
  width: 0.15rem;
  height: 0.15rem;
}
</style>

<style>
.mobile .right-top-bg {
  right: -5%;
}
</style>
