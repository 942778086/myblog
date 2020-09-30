<template>
    <div class="schoolLift">
        <div class="title"></div>
        <div class="timeline">
            <div class="left-point point"></div>
            <div class="right-point point"></div>
        </div>
        <div class="place-room">
            <div class="in-school place-item">
                <div class="logo-room">
                    <div class="hubu-icon logo"></div>
                </div>
                <div class="intro-title school-intro">湖北大学</div>
            </div>
            <div class="in-school place-item">
                <div class="logo-room">
                    <div class="succez-icon logo">
                        <img class="succez-icon-iframe" src="../assets/logo-succez.svg" />
                    </div>
                </div>
                <div class="intro-title school-intro">武汉东方赛思</div>
            </div>
            <div class="in-school place-item">
                <div class="logo-room">
                    <div class="gyjx-icon logo"></div>
                </div>
                <div class="intro-title school-intro">北京高阳捷讯</div>
            </div>
        </div>
        <div class="time-room">
            <div class="in-school time-label">
                <div>2016.09-2020.06<br>湖北大学<br>教育技术学</div>
            </div>
            <div class="in-succez time-label">
                <div>2019.11-2020.06<br>产品研发部<br>研发工程师</div>
            </div>
            <div class="in-gy time-label">
                <div>2020.07-至今<br>前端开发部<br>前端工程师</div>
            </div>
        </div>
        <div class="skill-room">
            <div class="in-school-skill skill-icon-room">
                <img src="../assets/skill/H5.png" @click="setTopic('Html')" />
                <img src="../assets/skill/css3-original.png" @click="setTopic('CSS')" />
                <img src="../assets/skill/vue.png" @click="setTopic('Vue')" />
                <img src="../assets/skill/小程序.png" @click="setTopic('小程序')" />
                <img src="../assets/skill/fe-electron.png" @click="setTopic('electron')" />
                <img src="../assets/skill/java.png" @click="setTopic('Java')" />
                <img src="../assets/skill/mysql.png" @click="setTopic('Mysql')" />
                <img src="../assets/skill/spring.png" @click="setTopic('Spring')" />
                <img src="../assets/skill/Nodejs.png" @click="setTopic('Nodejs')" />
            </div>
            <div class="in-succez-skill skill-icon-room">
                <img src="../assets/skill/javascript-original.png" @click="setTopic('JavaScript')" />
                <img src="../assets/skill/typescript-original.png" @click="setTopic('TypeScript')" />
                <img src="../assets/skill/高德地图.png" @click="setTopic('AMap')" />
                <img src="../assets/skill/Gitlab.png" @click="setTopic('Git')" />
                <img src="../assets/skill/java.png" @click="setTopic('Java')" />
                <img src="../assets/skill/spring.png" @click="setTopic('Spring')" />
            </div>
            <div class="in-gy-skill skill-icon-room">
                <img src="../assets/skill/vue.png" @click="setTopic('Vue')"/>
                <img src="../assets/skill/小程序.png" @click="setTopic('小程序')"/>
                <img src="../assets/skill/Gitlab.png" @click="setTopic('Git')"/>
            </div>
        </div>
        <div class="article-room">
            <div class="article-title">{{ title }}</div>
            <div class="devide-line"></div>
            <div class="article-list-room"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SchoolLife',
    data() {
        return {
            title: 'vue'
        }
    },
    methods: {
        setTopic(topic) {
            this.title = topic
        }
    }
}
</script>

<style scoped>
.schoolLift{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #4fc08d;
    overflow-x: auto;
}
.place-room {
    text-align: left;
    padding-top: 0.35rem;
    transform: translateY(-0.4rem);
}
.time-room {
    text-align: left;
    margin-top: 0.2rem;
    font-size: 0.12rem;
}
.timeline{
    position: relative;
    width: 4.2rem;
    margin: 0 1.5rem 0 1.5rem;
    height: 0.1rem;
    background-color: antiquewhite;
    transform: translateY(1.55rem);
    border-radius: 0.05rem;
}
.left-point {
    float: left;
    transform: translateY(-0.03rem)
}
.right-point {
    float: right;
    transform: translateY(-0.03rem)
}
.hubu-icon {
    width: 0.8rem;
    height: 0.8rem;
    background-image: url("../assets/hubu.jpg");
}
.succez-icon {
    width: 0.8rem;
    height: 0.8rem;
}
.succez-icon-iframe {
    width: 0.8rem;
    height: 0.8rem;
    border: none;
    background-color: #4fc08d;
}
.gyjx-icon {
    width: 0.8rem;
    height: 0.3rem;
    background-image: url("../assets/logo-gyjx.png");
    background-color: #4fc08d !important;
}
.in-school {
    text-align: left;
    margin-left: 1.06rem;
}
.in-succez {
    margin-left: 1.1rem;
}
.in-gy {
    margin-left: 1.1rem;
}
.skill-room {
    text-align: left;
    display: flex;
}
.in-school-skill {
    width: 1.5rem;
}
.in-succez-skill {
    width: 1.5rem;
    margin-left: 0.4rem;
}
.in-gy-skill {
    margin: 0.4rem;
}
.article-room {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    background-color: #ff9269;
    border-left: 3px solid white;
}
.article-title {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-weight: bold;
    font-size: 0.3rem;
}
.article-list-room {
    width: 2.5rem;
    height: 3rem;
    padding: 0.1rem;
    margin: 0.1rem auto 0 auto;
    border-radius: 0.1rem;
    background-color: wheat;
    overflow-x: hidden;
    overflow-y: auto;
}
/*-------------------------common--------------------- */
.point {
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    background-color: #35495e;
}
.place-item {
    display: inline-block;
    height: 1rem;
    text-align: center;
}
.time-label {
    display: inline-block;
    transform: translateX(0.1rem);
}
.skill-icon-room {
    transform: translateX(0.55rem);
    border-radius: 0.1rem;
    border: 1px solid white;
    padding: 0.15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: .1rem;
}
.skill-icon-room img {
    width: .2rem;
    height: .2rem;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 1px;
    background-color: white;
}
.logo {
    background-size: 100% 100%;
    border-radius: 0.1rem;
    margin: 0.08rem;
    background-color: white;
    overflow: hidden;
}
.intro-title {
    display: inline-block;
    background-color: #35495e;
    color: white;
    border-radius: 0.1rem;
    text-align: center;
    font-size: 0.12rem;
    font-weight: bold;
    margin: 0.08rem;
    padding: 0 0.05rem 0 0.05rem;
}
.logo-room {
    height: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.devide-line {
    width: 80%;
    margin: 0 auto;
    border: 0.5px solid black;
}
</style>
