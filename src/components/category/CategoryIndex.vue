<!--博文页面-->
<template>
  <el-container style="height: 100%">
    <el-aside style="top: 60px">
      <CategorySideMenu ref="sideMenu" @handleCategorySelect="handleArticleListDisplay"></CategorySideMenu>
    </el-aside>
    <el-main style="padding: 0 0 0 20px;">
      <Articles
        v-show="currentDisplay === 'ARTICLES'"
        ref="articleList"
        style="overflow: auto;height: 100%"
        @handlePaginationChange="handleArticleListDisplay"
        @showArticle="showArticle"
      >
      </Articles>
      <ArticleDisplay
        v-show="currentDisplay === 'ARTICLE_DISPLAY'"
        ref="articleDisplay"
        :article="currentArticle"
        style="overflow: auto;height: 100%"
        @goBack="switchToList"
      >
      </ArticleDisplay>
    </el-main>
  </el-container>
</template>

<script>
import CategorySideMenu from './CategorySideMenu'
import Articles from './Articles'
import ArticleDisplay from './ArticleDisplay'

export default {
  name: 'CategoryIndex',
  components: {ArticleDisplay, Articles, CategorySideMenu},
  data () {
    return {
      currentDisplay: 'ARTICLES', // 控制当前显示文章卡片列表或者文章显示页面
      currentArticle: 0
    }
  },
  methods: {
    // 在页面初始化、改变文章类别或翻页时，获取和渲染文章卡片列表。如果当前在ArticleDisplay，则回到Articles。
    handleArticleListDisplay (index) {
      console.log('changing to category ' + index)
      let _this = this
      this.$axios
        .get('/total-of-articles/' + index)
        .then(response => {
          _this.$refs.articleList.totalOfArticles = response.data
        })

      let currentPage = _this.$refs.articleList.currentPage
      let pageSize = _this.$refs.articleList.pageSize
      let offset = (currentPage - 1) * pageSize
      this.$axios
        .post('/article-list/' + index, {offset: offset, rows: pageSize})
        .then(response => {
          _this.$refs.articleList.articles = response.data
        })
      this.currentDisplay = 'ARTICLES'
    },
    // 文章展示页面中，点击页头后返回到文章卡片列表
    switchToList () {
      this.currentDisplay = 'ARTICLES'
    },
    // 点击文章卡片的标题、封面或“显示全文”按钮后，载入文章并切换到文章展示页面
    showArticle (article) {
      this.currentArticle = article
      this.currentDisplay = 'ARTICLE_DISPLAY'
    }
  },
  mounted () {
    let _this = this
    this.$axios
      .get('/get-category-list')
      .then(responce => {
        _this.$refs.sideMenu.categoryList = responce.data.data
      })
  }
}
</script>

<style scoped>

</style>
