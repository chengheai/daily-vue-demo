<template>
  <div>
    <el-header>
      <el-button type="text" style="color: red;" @click="handleDash" icon="el-icon-arrow-left">返回</el-button>
      <h2>Vue DEMO 测试</h2>
      <h3>当前位置 [ {{title}} ]</h3>
    </el-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '首页',
    };
  },
  watch: {
    $route: 'getPath',
  },
  methods: {
    getPath() {
      this.title = this.$route.meta.title;
    },
    handleDash() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  height: 60px;
  width: 100%;
  display: flex;
  background-color: #b3c0d1;
  color: #333;
  justify-content: space-between;
  align-items: center;
}
h3 {
  color: rgb(6, 4, 107);
}
</style>
