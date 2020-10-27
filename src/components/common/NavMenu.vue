<!--顶部导航栏-->
<template>
  <el-menu
    :default-active="$route.path"
    class="nav-menu unable-select"
    mode="horizontal"
    router
  >
    <el-menu-item class="nav-title" index="/">
      Kisin's Blog
    </el-menu-item>
    <el-menu-item
      v-for="(item,i) in navList"
      :key="i"
      :index="item.name"
    >
      <i :class="item.icon"></i>
      <template slot="title">{{ item.navItem }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import '../../assets/css/general.css'

export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '主页', icon: 'el-icon-s-home'},
        {name: '/categories', navItem: '博文', icon: 'el-icon-folder-opened'},
        {name: '/seniors-and-friends', navItem: '聚聚，和朋友们', icon: 'el-icon-guide'},
        {name: '/about', navItem: '关于', icon: 'el-icon-coffee-cup'}
      ]
    }
  }
}
</script>

<style scoped>
span {
  pointer-events: none;
}

.nav-title {
  font-size: 30px;
  font-family: "Bell MT";
  color: #303133
}

.nav-user {
  float: right;
}
</style>
