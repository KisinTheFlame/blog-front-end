<template>
  <div class="container">
    <BackendMenu></BackendMenu>
    <router-view/>
  </div>
</template>

<script>
import BackendMenu from './BackendMenu'
export default {
  name: 'BackendHome',
  components: {BackendMenu}
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: stretch;
}
</style>
