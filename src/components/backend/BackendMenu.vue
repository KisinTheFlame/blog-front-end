<template>
  <el-menu router>
    <el-menu-item
      v-for="(item, i) in menuList"
      :key="i"
      :index="item.name"
    >
      {{ item.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BackendMenu',
  data () {
    return {
      menuList: [
        {
          name: '/article-list',
          title: '文章列表'
        },
        {
          name: '/resource-list',
          title: '资源列表'
        },
        {
          name: '/user-management',
          title: '用户管理'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
