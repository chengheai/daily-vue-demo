<template>
  <div id="app">
    <el-header><h2>DEMO 测试</h2></el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
