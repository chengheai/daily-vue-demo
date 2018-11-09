<template>
  <div id="app">
    <el-header><h2>DEMO 测试</h2></el-header>
    <span class="sedtitle">{{msg}}</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg: '页面加载于 ' + new Date().toLocaleString(),
    }
  }
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
.sedtitle{
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
