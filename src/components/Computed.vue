<template>
  <div>
    <h2>computed</h2>
    <h2>暂存</h2>
    <el-button type="primary" @click="setlocalStorage">设置localStorage</el-button>
    <el-button type="primary" @click="setsessionStorage">设置sessionStorage</el-button>
    <el-button type="danger" @click="clear">清除all</el-button>
    <p>{{sessionName}}</p>
    <p>{{localName}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // sessionName: 'sessionName',
      // localName: 'localName'
    };
  },
  computed: {
    sessionName() {
      return localStorage.getItem('localName');
    },
    localName() {
      return sessionStorage.getItem('sessionName');
    }
  },
  methods: {
    setlocalStorage() {
      localStorage.setItem('localName', 'this.localName');
    },
    setsessionStorage() {
      sessionStorage.setItem('sessionName', 'this.sessionName');
    },
    clear() {
      localStorage.clear();
      sessionStorage.clear();
    }
  }
};
</script>

<style>
</style>
