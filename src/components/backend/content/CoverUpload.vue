<template>
    <el-upload
      :before-remove="beforeRemove"
      :file-list="fileList"
      :limit="1"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      action="http://www.kisin.tech:8848/api/admin/cover-upload/"
      class="image-upload"
      multiple
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
</template>

<script>
export default {
  name: 'ImageUpload',
  data () {
    return {
      fileList: [],
      url: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {
    },
    handlePreview (file) {
    },
    handleExceed (files, fileList) {
      this.$message.info('本次选择了' + files.length + '个文件，共选择了' + fileList.length + '个文件。')
    },
    beforeRemove (file, fileList) {
      return this.$confirm('确定移除' + file.name + '？')
    },
    handleSuccess (response) {
      this.url = response.data
      this.$emit('onLoad')
      this.$message.warning('上传成功')
    },
    clear () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style scoped>

</style>
