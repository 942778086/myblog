<template>
    <div class="intro">
        <div class="card">
            <div class="avaRoom">
                <img class="ava" src="../assets/ava.jpg">
            </div>
            <div class="infoRoom">吴建星</div>
            <div class="infoRoom">湖北     武汉</div>
            <div class="infoRoom">湖北大学</div>
            <div class="infoRoom lastInfo">1999-05-07</div>
            <div class="signRoom">
                we live alone, we die alone, everything else is just an illusion
            </div>
        </div>
        <div class="intro-setting" @click="showSetting = !showSetting">
            <svg t="1595317534600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2962" width="16" height="16"><path d="M929.353143 512c0-43.739429 26.550857-82.212571 67.657143-98.011429l20.992-8.045714-5.558857-21.796571a513.462857 513.462857 0 0 0-56.100572-135.533715l-11.483428-19.382857-20.553143 9.142857a105.545143 105.545143 0 0 1-43.154286 9.142858c-27.794286 0.073143-54.418286-10.971429-73.947429-30.72a104.301714 104.301714 0 0 1-21.430857-117.028572l9.142857-20.626286-19.382857-11.556571A516.315429 516.315429 0 0 0 639.926857 11.556571L618.057143 5.997714 610.011429 26.989714A104.594286 104.594286 0 0 1 512 94.646857 104.374857 104.374857 0 0 1 413.988571 27.062857L405.942857 5.997714l-21.796571 5.558857a513.243429 513.243429 0 0 0-135.533715 56.100572l-19.382857 11.483428 9.142857 20.553143c17.92 40.228571 9.508571 86.235429-21.430857 117.101715a105.472 105.472 0 0 1-117.101714 21.504l-20.553143-9.069715-11.483428 19.309715a510.537143 510.537143 0 0 0-56.32 135.606857l-5.485715 21.796571 20.992 8.045714c41.106286 15.872 67.657143 54.345143 67.657143 98.011429 0 43.739429-26.550857 82.212571-67.657143 98.011429l-20.992 8.045714 5.558857 21.869714c12.068571 47.542857 31.012571 93.257143 56.100572 135.533714l11.483428 19.309715 20.553143-9.142857c13.604571-6.070857 28.306286-9.142857 43.154286-9.142858 27.940571 0 54.198857 10.898286 73.947429 30.72 30.939429 30.939429 39.350857 76.8 21.430857 117.028572l-9.142857 20.626286 19.382857 11.556571c42.349714 25.014857 87.990857 43.885714 135.606857 56.027429l21.796571 5.558857 8.118857-20.992A104.594286 104.594286 0 0 1 512 929.353143c43.739429 0 82.212571 26.550857 98.011429 67.657143l8.045714 20.992 21.869714-5.558857a513.901714 513.901714 0 0 0 135.533714-56.100572l19.382858-11.483428-9.216-20.553143a104.374857 104.374857 0 0 1 21.430857-117.101715 105.618286 105.618286 0 0 1 117.101714-21.504l20.553143 9.069715 11.556571-19.309715a510.683429 510.683429 0 0 0 56.173715-135.606857l5.558857-21.796571-20.992-8.045714A104.374857 104.374857 0 0 1 929.353143 512z m-6.436572 219.428571a156.233143 156.233143 0 0 0-151.698285 39.936A154.404571 154.404571 0 0 0 731.428571 922.989714a464.237714 464.237714 0 0 1-84.041142 34.816A154.404571 154.404571 0 0 0 512 878.665143c-56.978286 0-107.958857 30.427429-135.314286 79.140571a464.822857 464.822857 0 0 1-84.260571-34.889143c14.628571-53.394286-0.073143-111.908571-39.716572-151.552A155.867429 155.867429 0 0 0 100.937143 731.428571a463.140571 463.140571 0 0 1-34.742857-84.114285A154.404571 154.404571 0 0 0 145.334857 512c0-56.978286-30.354286-107.958857-79.067428-135.314286 8.777143-29.184 20.48-57.344 34.816-84.114285a156.233143 156.233143 0 0 0 151.698285-39.936c40.301714-40.301714 54.857143-97.865143 39.789715-151.625143A462.994286 462.994286 0 0 1 376.612571 66.267429a154.404571 154.404571 0 0 0 135.314286 79.067428c57.051429 0 108.032-30.354286 135.460572-79.067428 29.110857 8.777143 57.344 20.48 84.187428 34.816-14.628571 53.394286 0.073143 111.908571 39.716572 151.552A155.940571 155.940571 0 0 0 923.062857 292.571429c14.336 26.843429 25.965714 55.003429 34.742857 84.114285A154.331429 154.331429 0 0 0 878.665143 512c0 57.051429 30.354286 108.032 79.067428 135.387429-8.777143 29.110857-20.48 57.270857-34.816 84.114285z" fill="#ffffff" p-id="2963"></path><path d="M512 355.986286A156.16 156.16 0 0 0 355.986286 512c0 86.016 69.997714 156.013714 156.013714 156.013714A156.16 156.16 0 0 0 668.013714 512 156.16 156.16 0 0 0 512 355.986286zM512 617.325714c-58.075429 0-105.325714-47.250286-105.325714-105.325714 0-58.075429 47.250286-105.325714 105.325714-105.325714 58.075429 0 105.325714 47.250286 105.325714 105.325714 0 58.075429-47.250286 105.325714-105.325714 105.325714z" fill="#ffffff" p-id="2964"></path></svg>
        </div>
        <div class="setting-list" v-show="showSetting">
            <div class="setting-item" @click="clickImg">Look the images author like</div>
            <div class="setting-item" @click="clickMedia">Play the songs author like</div>
        </div>
        <div ref="backgroundroom" class="backgroundroom"></div>
        <transition name="fade">
            <div class="right-top-bg customscroll" v-show="showImg">
                <div v-for="(item, index) in favImages" class="star" :key="index">
                    <div @click="setBackground(item.img)">
                        <div>
                            <img :src="item.img"  alt=""/>
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
    </div>
</template>

<script>

export default {
	name: 'Intro',
    data() {
		return {
			showSetting: false,
			nodes: null,
      showImg: false,
      showMedia: false,
      backgroundMap: new Map(),
			favImages: [{
				img: "https://i.loli.net/2020/07/20/th5qlCvnkO2HspE.jpg"
			}, {
				img: "https://i.loli.net/2020/07/20/aelPDmTtB9CUNni.jpg"
			}, {
				img: "https://i.loli.net/2020/07/20/R9nxpmKjqkyfbDt.jpg"
			}, {
				img: "https://i.loli.net/2020/07/20/f965pW2GEolgwVi.jpg"
			}, {
				img: "https://i.loli.net/2020/07/20/6JZ1kwrGpgdqMm5.jpg"
			}, {
				img: "https://i.loli.net/2020/07/20/iw5JSucaA1OtUrs.jpg"
			}],
			favMedia: [{
				type: "music",
                img: "https://i.loli.net/2020/07/21/Kt2hGvJaFBypOsq.jpg",
                title: "Young and Beautiful-Lana Del Rey",
                resource: ""
            }, {
				type: "music",
                img: "https://i.loli.net/2020/07/21/1XGr3JIB7HjPNKW.jpg",
                title: "you-愈月",
				resource: ""
            }, {
				type: "music",
                img: "https://i.loli.net/2020/07/21/cnQVv8TY1oKfUWM.jpg",
                title: "Skinny Love-birdy",
				resource: ""
            }],
            words: [
                "只有你是青天一样可爱",
                "无数渺小的思考，填满了人的一生",
                "盈盈一水间，脉脉不得语。——《迢迢牵牛星》",
            	"人世皆攘攘，相对唯顷刻 ——土方岁三",
                "“就是现在”——符华",
                "神仙保佑",
                "没有一个冬天不可逾越，没有一个春天不会来临。——南方周末",
                "只有看尽人世繁华，并且有能力随意享受繁华的人，才有资格说淡泊名利之类的话"
            ]
        }
    },
    mounted() {
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
			    }
            } else {
			    backgroundDom.innerHTML = "";
			    backgroundDom.appendChild(imgDom)
            }
        },
	    setBackgroundMusic(resource) {},
	    nextLabel() {
	    	let words = this.words;
	    	words.push(words[0]);
	    	words.splice(0, 1);
        },
    }
}
</script>

<style scoped>
.intro{
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
    left: 0.1rem;
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

.card{
    display: inline-block;
    width: 2rem;
    height: 4rem;
    border: 2px solid #41b883;
    transition: all 1s;
}

.backgroundroom {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;right: 0;
    width: 2rem;
    height: 4rem;
    overflow: hidden;
    z-index: -1;
}
.ava{
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 50%;
    border: 1px solid white;
}

.avaRoom{
    margin-top: 0.5rem;
    border-bottom: 1px solid white;
}
.infoRoom{
    width: 50%;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid white;
    color: white;
    font-size: 0.12rem;
    margin: 0.15rem auto 0 auto;
    padding-bottom: 0.15rem;
  }
.lastInfo{
    width: 100%;
    font-size: 0.12rem;
}
.signRoom{
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

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}

.fade-enter, .fade-leave-active {
    opacity: 0
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

.star> div {
    -webkit-transform: rotate(-120deg);
}

.star> div> div {
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
</style>
