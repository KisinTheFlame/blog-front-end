<template>
  <el-card class="login-container">
    <el-form>
      <h3 class="login-title">登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"
                  @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"
                  @keyup.enter.native="login" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button id="login-button" class="login-button" type="primary" @click="login" round>登录
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: [],
      loginButtonAvailable: false
    }
  },
  methods: {
    login () {
      let _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            _this.$store.commit('login', _this.loginForm)
            let path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          } else {
            this.$message({
              message: successResponse.data.message,
              type: 'error',
              center: true
            })
          }
        })
        .catch(failResponse => {
        })
    }
  }
}

</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
}

.login-title {
  text-align: center;
}

.login-button {
  width: 100px;
  border: none;
}
</style>
