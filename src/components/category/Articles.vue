<!--文章列表-->
<template>
  <div>
    <!--文章卡片-->
    <el-row>
      <el-card
        v-for="article in articles"
        :key="article.id"
        class="article-card unable-select"
        shadow="hover"
      >
        <el-container class="article-container">
          <!--封面图片-->
          <el-aside class="article-cover-area">
            <el-image :src="article.cover" fit="cover" @click="showArticle(article)"></el-image>
          </el-aside>
          <el-container>
            <!--标题-->
            <el-header style="height: auto">
              <div class="article-title" @click="showArticle(article)">{{ article.title }}</div>
            </el-header>
            <!--摘要-->
            <el-main class="info-text article-abstract">
              <p>{{ article.abs }}</p>
            </el-main>
            <!--时间等信息与显式的入口按钮-->
            <el-footer class="info-text time-and-button">
              <i class="el-icon-date"></i>
              {{ article.createdTime }} / {{ article.lastModifiedTime }}
              <el-button
                icon="el-icon-s-promotion"
                round
                style="float: right;"
                type="primary"
                @click="showArticle(article)"
              >
                显示全文
              </el-button>
            </el-footer>
          </el-container>
        </el-container>
      </el-card>
    </el-row>
    <el-row>
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total="totalOfArticles"
        @current-change="handlePaginationChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import '../../assets/css/general.css'

export default {
  name: 'Articles',
  data () {
    return {
      currentPage: 1,
      pageSize: 10, // 可以调节……
      totalOfArticles: 0, // 默认值
      articles: []
    }
  },
  methods: {
    handlePaginationChange () {
      this.$emit('handlePaginationChange')
    },
    showArticle (article) {
      this.$emit('showArticle', article)
    }
  }
}
</script>

<style scoped>
.article-card {
  margin: 20px 100px;
}

.article-container {
  height: auto;
  padding: 0;
  opacity: .7;
}

.article-cover-area {
  padding: 0;
  margin: 0;
}

.article-title {
  font-size: 30px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
  padding-bottom: 5px;
  transition-duration: 0.4s;
}

.article-title:hover {
  color: #42b983;
}

.article-title:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: #42b983;
  height: 2px;
  transition-property: left, right;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
}

.article-title:hover:before,
.article-title:focus:before,
.article-title:active:before {
  left: 0;
  right: 0;
}

.article-abstract {
  word-break: break-all;
  text-align: left
}

.time-and-button {
  text-align: left;
  height: auto;
}
</style>
