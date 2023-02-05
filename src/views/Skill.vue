<template>
    <div class="my-skill">
        <div class="title">或许你想知道，我做什么</div>
        <div class="devide-line">
            <div class="line-part"></div>
            <div class="skill-label">SKILL</div>
            <div class="line-part"></div>
        </div>
        <div class="skill-sub-title">我是一名工程师，然后是一名端工程师，然后是一名前端工程师</div>
        <div class="skill-room">
            <div class="in-school-skill skill-icon-room">
                <div class="display-room">
                    <img src="../assets/skill/H5.png" />
                    <img src="../assets/skill/css3-original.png" />
                    <img src="../assets/skill/javascript-original.png" />
                    <img src="../assets/skill/typescript-original.png" />
                    <img src="../assets/skill/java.png" />
                    <img src="../assets/skill/Nodejs.png" />
                </div>
                <div class="display-room">
                    <img src="../assets/skill/小程序.png" />
                    <img src="../assets/skill/fe-electron.png" />
                </div>
                <div class="display-room">
                    <img src="../assets/skill/高德地图.png" />
                    <img src="../assets/skill/Gitlab.png" />
                    <img src="../assets/skill/nginx.jpg" />
                    <img src="../assets/skill/spring.png" />
                </div>
                <div class="display-room">
                    <img src="../assets/skill/vue.png"/>
                    <img src="../assets/skill/react.png"/>
                    <img src="../assets/skill/qiankun.png"/>
                    <img src="../assets/skill/single-spa.svg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill'
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 0.3rem;
    margin-top: 1.1rem;
}
.my-skill{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #4fc08d;
    overflow-x: auto;
}
.skill-label {
    color: white;
}
.devide-line {
    display: flex;
    justify-content: center;
    margin-bottom: 0.05rem;
}
.line-part {
    width: 1.9rem;
    height: 1px;
    background-color: white;
    transform: translateY(0.06rem);
    margin: 0 0.05rem;
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
    width: 1.9rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    border: 1px solid white;
    padding: 0.15rem;
    margin-top: .1rem;
    min-width: 210px;
}
.display-room {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
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
.skill-sub-title {
    color: white;
    font-size: 0.13rem;
}
</style>

<style>
.mobile .skill-icon-room {
    width: 3.2rem;
}
.mobile .skill-icon-room img {
    width: .4rem;
    height: .4rem;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 1px;
    background-color: white;
}
.mobile .skill-sub-title {
    margin-bottom: 0.4rem;
}
</style>
