<template>
  <div class="container">
    <div></div>
    <el-table
      :data="data"
      stripe
    >
      <el-table-column
        label="创建日期"
        prop="createdTime"
      ></el-table-column>
      <el-table-column
        label="标题"
        prop="title"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      data: []
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>
