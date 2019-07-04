<template>
  <div id="app">
    <el-header><h2>Vue DEMO 测试</h2></el-header>
    <span class="sedtitle">{{msg}}</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '页面加载于 ' + new Date().toLocaleString()
    }
  }
};
</script>

<style>
@import "./comm/main.css";
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::-webkit-scrollbar {width:10px;height:6px;background: #4491DE;}
::-webkit-scrollbar-thumb {-webkit-box-shadow: inset 0 0 16px #c00;}
::-webkit-input-placeholder { /* WebKit browsers */   color:    #FF9503;}
.el-header{
  height: 60px;
  display: flex;
  background-color: #b3c0d1;
  color: #333;
  justify-content: center;
  align-items: center;
}
.sedtitle{
  color: #FF4200;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
