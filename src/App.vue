<template>
  <div id="app">
    <my-header />
    <span class="sedtitle">{{ msg }}</span>
    <router-view />
  </div>
</template>

<script>
import myHeader from './com/header';
export default {
  name: 'App',
  data() {
    return {
      msg: '页面加载于 ' + new Date().toLocaleString(),
    };
  },
  components: {
    myHeader,
  },
};
</script>

<style>
@import './comm/main.css';
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 10px;
  height: 6px;
  background: #4491de;
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 16px #c00;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ff9503;
}
.sedtitle {
  color: #ff4200;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nprogress .bar {
  background: rgb(214, 35, 175) !important;
}
</style>
