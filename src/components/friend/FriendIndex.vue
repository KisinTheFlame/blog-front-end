<template>
  <div class="container">
    <header class="front-container"></header>
    <div class="card-container">
      <el-card v-for="(friend, i) in friends" :key="i" shadow="hover" style="flex-basis: 300px;margin: 10px">
        <p style="font-size: 20px">{{ friend.name }}</p>
        <p class="info-text">{{ friend.description }}</p>
        <p>
          <el-link :href="friend.link" icon="el-icon-link" type="primary" target="_blank">链接</el-link>
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import '../../assets/css/general.css'

export default {
  name: 'FriendIndex',
  data () {
    return {
      friends: []
    }
  },
  mounted () {
    let _this = this
    this.$axios
      .get('/friend-list/')
      .then(response => {
        if (response.data.code === 200) {
          _this.friends = response.data.data
        }
      })
  }
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
  display: block;
  position: relative;
  height: calc(100vh - 61px);
  width: 100%;
  background: url("../../assets/image/friend-front-page-background.jpg") no-repeat;
  background-size: 100vw auto;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 900px;
  margin: 25px;
}
</style>
