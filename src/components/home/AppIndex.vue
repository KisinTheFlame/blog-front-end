<template>
  <div class="container">
    <!--封面-->
    <header class="front-container">
      <div class="info-container">
        <img alt="avatar" class="avatar" src="../../assets/image/avatar.png">
        <h1 class="motto">翻开日记，整理破碎的心情</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppIndex'
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
  background: url("../../assets/image/index-front-page-background.jpg") no-repeat;
  background-position-y: +30%;
  background-size: 100vw auto;
}

.info-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 248px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  transition-duration: .6s;
  transition-timing-function: ease-in-out;
}

.avatar:hover {
  transform: rotate(1080deg);
}

.motto {
  position: relative;
  height: 48px;
  width: 400px;
  padding: 5px 10px;
  margin: 22px 0 0 0;
  line-height: 48px;
  color: rgba(255, 255, 255, .6);
  font-size: 25px;
  font-family: Microsoft YaHei UI Light, Microsoft YaHei UI, serif;
  background-color: rgba(126, 67, 180, .9);
  border-radius: 24px;
}
</style>
