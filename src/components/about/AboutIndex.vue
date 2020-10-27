<template>
  <div class="container">
    <!--封面-->
    <header class="front-container">
      <div class="info-container">
        <h1 class="name unable-select">Kisin, The Flame</h1>
        <p class="info-text unable-select" style="color: #020202">只是个弱智，至少现在还只是吧。</p>
        <div class="link-row">
          <a class="link" href="https://github.com/KisinTheFlame" target="_blank"><i
            class="fa fa-github fa-3x"></i></a>
        </div>
      </div>
    </header>
    <!--介绍-->
    <div class="introduction-self">
      <h1>关于本人 About Myself</h1>
      <p>懒狗一条。现在就读于北京航空航天大学。可能是自己见过的最能当混子的人。</p>
      <p>还在读高中时在机房和竞赛生们一起玩了一段时间游戏。没有玩出什么名堂。最后去杭州旅游了两三天，逃课真开心啊。</p>
      <p>对Java和Web前端有兴趣，想做Java后端。不过太菜了的话，大概不行吧。</p>
      <p>还是处男。破处应该没什么希望了吧。</p>
    </div>
    <div class="introduction-site">
      <h1>关于本站 About The Blog</h1>
      <p>自己现学现卖着搭的，做得挺傻逼的，也没学移动端适配。</p>
      <p>回头一看，还是写了堆屎山。</p>
      <p>懂了，现在就买《重构》。哦，我已经有了啊，那没事了。</p>
      <div style="text-align: center">
        <h2>Proudly Powered By</h2>
        <p>Vue.js 2.x</p>
        <p>Element UI</p>
        <p>Spring Boot &reg; 2.3.3.RELEASE</p>
        <p>MySQL&trade; 8.0.21</p>
        <i>and all the others unmentioned, without which the blog cannot exist.</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutIndex'
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

.front-container {
  height: calc(100vh - 61px);
  width: 100%;
  background: url("../../assets/image/about-front-page-background.jpg") no-repeat;
  background-position-y: +30%;
  background-size: 100vw auto;
}

.info-container {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 500px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 5px 1px #909399;
  opacity: 0;
  transition: .6s all;
}

.info-container:hover {
  opacity: 1;
}

.info-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -30px;
  background: url("../../assets/image/about-front-page-background.jpg");
  background-position-x: calc(50% + 8px);
  background-position-y: calc(50% + 91px);
  background-size: 100vw auto;
  filter: blur(30px);
  z-index: -1;
}

.name {
  font-size: 50px;
  margin: 10px;
}

.link-row {
  display: flex;
  flex-direction: row;
}

.link {
  opacity: .6;
  transition: .3s all;
}

.link:hover {
  opacity: 1;
}

[class^="introduction"] {
  width: 700px;
  padding: 30px;
  margin: 25px 0;
  border: solid 1px rgba(128, 128, 128, .2);
  box-shadow: 0 0 1px 0 #909399;
  text-align: left;
}

.introduction-self {
}
</style>
