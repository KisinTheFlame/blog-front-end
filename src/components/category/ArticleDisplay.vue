<template>
  <div>
    <el-page-header content="" @back="goBack"></el-page-header>
    <el-main style="text-align: left">
      <h1>{{ article.title }}</h1>
      <p class="info-text"><i class="el-icon-time"></i>创建于{{ article.createdTime }}，最后更新于{{ article.lastModifiedTime }}</p>
      <hr>
      <div v-html="article.textHtml"></div>
    </el-main>
    <el-footer>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'ArticleDisplay',
  props: ['article'],
  methods: {
    goBack () {
      this.$emit('goBack')
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/general.css";
@import "../../assets/css/markdown.css";
</style>
