<template>
  <div>
    <el-row>
      <el-input
        v-model="article.title"
        placeholder="请输入标题"
        style="margin: 10px 0;font-size: 18px;"></el-input>
    </el-row>
    <el-row style="height: calc(100vh - 140px);">
      <mavon-editor
        ref=md
        fontSize="16px"
        style="height: 100%;"
        @save="saveArticles">
        <button
          slot="left-toolbar-after"
          :title="'摘要/封面'"
          class="op-icon el-icon-document"
          type="button"
          @click="dialogVisible = true"
        >
        </button>
      </mavon-editor>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
      >
        <!--todo 添加一个category选项-->
        <el-divider content-position="left">分类</el-divider>
        <p class="info-text">注意：若希望文章属于多个类别，只要输入栏内包含这些类别的name即可。但是，要谨防出现某一类别的name是另一类别的name的子串的情况。</p>
        <el-input
          v-model="article.category"
          rows="1"
        ></el-input>
        <el-divider content-position="left">摘要</el-divider>
        <el-input
          v-model="article.abs"
          maxlength="127"
          rows="6"
          show-word-limit
          type="textarea"></el-input>
        <el-divider content-position="left">封面</el-divider>
        <div style="margin-top: 20px">
          <el-input v-model="article.cover" autocomplete="off" placeholder="图片 URL"></el-input>
          <CoverUpload ref="imageUpload" style="margin-top: 5px;" @onLoad="uploadImage"></CoverUpload>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import CoverUpload from './CoverUpload'
import {getCurrentTime} from '../../../assets/js/utils.js'

export default {
  name: 'ArticleEditor',
  components: {CoverUpload},
  data () {
    return {
      article: {
        title: '',
        abs: '',
        cover: '',
        category: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    saveArticles (value, render) {
      // value 是 md，render 是 html
      this
        .$confirm('是否保存并发布文章?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          this.$axios
            .post('/admin/upload-article', {
              title: this.article.title,
              cover: this.article.cover,
              createdTime: getCurrentTime(),
              lastModifiedTime: getCurrentTime(),
              abs: this.article.abs,
              category: this.article.category,
              text: value,
              textHtml: render
            })
            .then(resp => {
              this.$message({
                type: 'success',
                message: '已保存成功'
              })
            })
            .catch(() => {
              this.$message({
                type: 'error',
                message: '很抱歉，在上传中发生了错误'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消发布'
          })
        })
      /*
      this.$axios
        .post('/admin/upload-article', {
          title: this.article.title,
          cover: this.article.cover,
          createdTime: getCurrentTime(),
          lastModifiedTime: getCurrentTime(),
          abs: this.article.abs,
          category: this.article.category,
          text: value,
          textHtml: render
        })
        .then(resp => {
          this.$message({
            type: 'info',
            message: '已保存成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '发生了错误'
          })
        })

       */
    },
    uploadImage () {
      this.article.cover = this.$refs.imageUpload.url
    }
  },
  mounted () {
    if (this.$route.params.article) {
      this.article = this.$route.params.article
    }
  }
}
</script>
