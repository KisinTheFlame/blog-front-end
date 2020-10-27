<!--分类栏-->
<template>
    <el-menu
      class="category-menu unable-select"
      default-active="all"
      style="height: 200px;background: rgba(0,0,0,0)"
      @select="handleCategorySelect"
    >
      <el-menu-item index="all">
        <i class="el-icon-menu"></i>
        <span slot="title">全部</span>
      </el-menu-item>
      <el-menu-item v-for="(category, i) in categoryList" :key="i" :index="category.name">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ category.title }}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
import '../../assets/css/general.css'

export default {
  name: 'CategorySideMenu',
  data () {
    return {
      currentCategory: 'all',
      categoryList: []
    }
  },
  mounted () {
    this.handleCategorySelect('all')
  },
  methods: {
    handleCategorySelect (index) {
      this.currentCategory = index
      this.$emit('handleCategorySelect', index)
    }
  }
}
</script>

<style scoped>

</style>
