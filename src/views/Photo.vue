<template>
  <div id="photo-story" ref="photoStory">
    <div class="photo-header">
      <div class="title">关于这些照片，我有故事要讲</div>
      <div class="devide-line">
        <div class="line-part"></div>
        <div class="dec-label">photo</div>
        <div class="line-part"></div>
      </div>
    </div>

    <div class="gallary-room" v-if="!currentGallary">
      <div class="my-photo gallary" @click="check('me')">
        <div class="cover">
          <img class="cover-img" src="@/assets/me/8.jpg" />
        </div>
        <div class="desc">我的照骗</div>
      </div>
      <div class="my-story gallary" @click="check('story')">
        <div class="cover">
          <img class="cover-img" src="@/assets/story/3.jpg" />
        </div>
        <div class="desc">我的故事</div>
      </div>
    </div>

    <div class="photo-room" v-if="currentGallary">
      <div class="img-room">
        <img class="display-img" :src="currentImg">
      </div>
      <div class="desc-room">
        <div class="btn-room">
          <div class="photo-btn" v-if="this[(currentGallary === 'me' ? 'Img' : 'SImg') + (currentIndex + 2)]" @click="changePic(true)">下一个</div>
          <div class="photo-btn" v-if="currentIndex > 0" @click="changePic(false)">上一个</div>
          <div class="photo-back" @click="back">返回</div>
        </div>
        <div class="desc-label" v-html="currentLabel.replace('\n', '<br/>')"></div>
        <div class="photo-time">{{ currentTime }}</div>
        <div class="photo-location">{{ currentLocation }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Img1 from '@/assets/me/1.jpg'
import Img2 from '@/assets/me/2.jpg'
import Img3 from '@/assets/me/3.jpg'
import Img4 from '@/assets/me/4.jpg'
import Img5 from '@/assets/me/5.jpg'
import Img6 from '@/assets/me/6.jpg'
import Img7 from '@/assets/me/7.jpg'
import Img8 from '@/assets/me/8.jpg'
import Img9 from '@/assets/me/9.jpg'
import SImg1 from '@/assets/story/1.jpg'
import SImg2 from '@/assets/story/2.jpg'
import SImg3 from '@/assets/story/3.jpg'
import SImg4 from '@/assets/story/4.jpg'
import SImg5 from '@/assets/story/5.jpg'
import SImg6 from '@/assets/story/6.jpg'
import SImg7 from '@/assets/story/7.jpg'
import SImg8 from '@/assets/story/8.jpg'
import SImg9 from '@/assets/story/9.jpg'
import SImg10 from '@/assets/story/10.jpg'
import SImg11 from '@/assets/story/11.jpg'
import SImg12 from '@/assets/story/12.jpg'
import SImg13 from '@/assets/story/13.jpg'
import SImg14 from '@/assets/story/14.jpg'
import SImg15 from '@/assets/story/15.jpg'
import SImg16 from '@/assets/story/16.jpg'

export default {
  name: 'Designer',
  computed: {
    currentImg() {
      let key = this.currentGallary === 'me' ? 'Img' : 'SImg';
      return this[key + (this.currentIndex + 1)]
    },
    currentLabel() {
      const imgKey = this.getImgKey();
      return this.imgInfo[imgKey].desc || '没有描述'
    },
    currentLocation() {
      const imgKey = this.getImgKey();
      return this.imgInfo[imgKey].location || ''
    },
    currentTime() {
      const imgKey = this.getImgKey();
      return this.imgInfo[imgKey].time || ''
    }
  },
  data() {
    return {
      currentGallary: '',
      currentIndex: 0,
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      SImg1,
      SImg2,
      SImg3,
      SImg4,
      SImg5,
      SImg6,
      SImg7,
      SImg8,
      SImg9,
      SImg10,
      SImg11,
      SImg12,
      SImg13,
      SImg14,
      SImg15,
      SImg16,
      imgInfo: {
        Img1: {
          color: '#827f7a'
        },
        Img2: {
          color: 'rgb(130 72 45)'
        },
        Img3: {
          color: 'rgb(60 72 86)'
        },
        Img4: {
          color: 'rgb(236 211 192 / 72%)'
        },
        Img5: {
          color: 'rgb(201 202 198)'
        },
        Img6: {
          color: 'rgb(59 83 71)'
        },
        Img7: {
          color: 'rgb(252 233 177 / 48%)'
        },
        Img8: {
          color: 'rgb(176 154 157)'
        },
        Img9: {
          desc: "再见。",
          color: 'rgb(112 112 112)'
        },
        SImg1: {
          desc: '初学计算机时，会在老师工作室呆到写字楼关门，很傻的在笔记本上抄代码。\n很感谢这段艰难的时间没有半途而废，也没有被放弃，使得我有机会去到远方。',
          location: '武汉',
          time: '2018.10.11 22:08',
          color: '#abada0bf'
        },
        SImg2: {
          desc: '设计编写了前端聊天渲染逻辑，和websocket服务搭建，实现了聊天功能',
          location: '武汉',
          time: '2019.04.28 22:13',
          color: '#e4e6ff85'
        },
        SImg3: {
          desc: '武汉疫情爆发，封城前几天回到云南的家乡，途经一束烟火。',
          location: '云南昭通',
          time: '2020.01.24 20:02',
          color: '#956a68'
        },
        SImg4: {
          desc: '在高阳捷讯当工程师的日子',
          color: '#858585'
        },
        SImg5: {
          desc: '这是我的父亲和我的弟弟，是我想象中的父爱场景。',
          location: '云南昭通',
          time: '2021.02.13 20:25',
          color: '#564a33'
        },
        SImg6: {
          desc: '北京出差的时候，遇到的一只落难公主',
          location: '北京通州',
          time: '2021.03.11 22:17',
          color: '#95856a'
        },
        SImg7: {
          desc: '所参与的为北京市委组织部开发的干部公务员管理系统，逐渐铺开使用。这是当前职业生涯中最有成就感的事情。',
          location: '北京通州',
          time: '2021.10.29 22:47',
          color: '#818181'
        },
        SImg8: {
          desc: '它是比亚迪的秦PLUS，小名叫小迪。后来它陪我走了很多路，去了很多地方。',
          location: '武汉',
          time: '2022.01.03 16:07',
          color: '#5a5762'
        },
        SImg9: {
          desc: '搬了一次家，房间难得的整齐干净，\n最近我爱就用“房间乱的人幸福指数会比较高”安慰自己',
          location: '武汉',
          time: '2022.07.03 00:17',
          color: '#8c7b5ddb'
        },
        SImg10: {
          desc: '它仙气飘飘。',
          location: '神农架林区',
          time: '2023.01.01 10:30',
          color: '#464a4f'
        },
        SImg11: {
          desc: '小时候夜晚，抬头的时候，有星辰在闪烁着前行。\n后来我也坐在了小时候仰望的星辰里，转头就能看到人间的烟火点亮云霄。',
          location: '武汉-深圳',
          time: '2023.01.18 21:05',
          color: '#9a756d'
        },
        SImg12: {
          desc: '邮轮上风好大',
          location: '三亚-西沙',
          time: '2023.01.20',
          color: '#cbcbcdad'
        },
        SImg13: {
          desc: '捡到了一枚活的寄居蟹。',
          location: '西沙',
          time: '2023.01.22 09:07',
          color: '#2411156b'
        },
        SImg14: {
          desc: '它是西沙，这里有国内最美丽的大海。',
          location: '西沙',
          time: '2023.01.21 16:29',
          color: '#417783'
        },
        SImg15: {
          desc: '这是天涯海角的日落，听起来像是世界边缘。',
          location: '三亚',
          time: '2023.01.23 18:17',
          color: '#37271d'
        },
        SImg16: {
          desc: '众所周知，放眼全国重庆的夜景也是非常哇塞的。',
          location: '重庆',
          time: '2023.01.28 20:08',
          color: '#512d31'
        },
      }
    }
  },
  methods: {
    getImgKey() {
      return (this.currentGallary === 'me' ? 'Img' : 'SImg') + (this.currentIndex + 1)
    },
    changePic(tag) {
      tag ? this.currentIndex++ : this.currentIndex--;
      const color = this.imgInfo[this.getImgKey()].color;
      if (color) {
        this.setColor(color);
      }
    },
    setColor(color) {
      this.$refs.photoStory.style.cssText = `background-color: ${color}`;
    },
    check(content) {
      this.currentGallary = content
      const color = content === 'me' ? this.imgInfo['Img1'].color : this.imgInfo['SImg1'].color;
      this.setColor(color);
    },
    back() {
      this.currentGallary = '';
      this.currentIndex = 0;
    }
  }
}
</script>

<style scoped>
#photo-story {
  height: 100%;
  transition: background-color 1s ease-in;
}
.title {
  font-size: 0.3rem;
  margin-top: 0.1rem;
  color: white;
  height: 0.75rem;
  line-height: 0.75rem;
}
.devide-line {
    display: flex;
    justify-content: center;
}
.line-part {
    width: 1.9rem;
    height: 1px;
    background-color: white;
    transform: translateY(0.08rem);
    margin: 0 0.05rem;
}
.dec-label {
  color: white;
}
.gallary-room {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.gallary {
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.desc {
  border-top: 1px solid white;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}
.photo-room {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.my-story .cover-img {
  transform: translateY(0.8rem);
}
.cover-img {
  width: 2rem;
}
.img-room {
  width: 2.5rem;
  height: 3.5rem;
  overflow: auto;
}
.display-img {
  width: 100%;
}
.desc-room {
  position: relative;
  width: 3rem;
  border: 1px solid white;
  margin-left: 0.2rem;
  padding-bottom: 0.3rem;
  min-width: 220px;
}
.btn-room {
  position: relative;
  display: flex;
  padding: 0.1rem;
  flex-direction: row-reverse;
  border-bottom: 1px solid white;
}
.photo-btn {
  border: 1px solid white;
  padding: 0.03rem 0.25rem;
  margin-right: 0.15rem;
  color: white;
  cursor: pointer;
}

.desc-label {
  padding: 15px;
  text-align: left;
  color: white;
}
.photo-back {
  position: absolute;
  left: 15px;
  top: 0.13rem;
  color: white;
  cursor: pointer;
}
.photo-location {
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: white;
}
.photo-time {
  position: absolute;
  left: 15px;
  bottom: 15px;
  color: white;
}
</style>

<style>
.mobile .photo-btn {
  padding: 0.05rem 0.1rem;
}
.mobile .photo-back {
  top: 0.16rem;
}
.mobile .desc-room {
  margin: 0 auto;
  width: 80%;
  min-height: 2rem;
  margin-top: 10px;
}
.mobile .img-room {
  margin: 0 auto;
  width: 3rem;
  height: auto;
  min-height: 3rem;
  max-height: 4rem;
}
.mobile .photo-room {
  flex-direction: column;
}
</style>
