<template>
  <div>
    <el-page-header content="" @back="goBack" style="margin-left: 10px;margin-top: 20px"></el-page-header>
    <el-main style="text-align: left">
      <h1>{{ article.title }}</h1>
      <p class="info-text"><i class="el-icon-time"></i>创建于{{ article.createdTime }}，最后更新于{{ article.lastModifiedTime }}
      </p>
      <hr>
      <div class="markdown-body">
        <div v-html="article.textHtml"></div>
      </div>
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
</style>
