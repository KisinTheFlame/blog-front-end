<template>
  <div>
    <div style="position: fixed;display: block;left: 0;right: 0;z-index: 2020">
      <NavMenu style="height: 60px;z-index: 5;margin-top: 0"></NavMenu>
    </div>
    <div style="height: calc(100vh - 61px);padding-top: 61px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavMenu from './common/NavMenu'

export default {
  name: 'Home',
  components: {NavMenu}
}
</script>

<style scoped>
.footer {
  height: 20px;
}
</style>
