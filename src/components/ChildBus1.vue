<template>
  <div>
    <h5>{{ params }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {},
      time: new Date().getTime()
    };
  },
  watch: {
    time: {
      handler(newVal, oldVal) {
        this.handleLog();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleLog() {
      this.Bus.$off('test').$on("test", params => {
        this.params = params
        this.handle();
      });
    },
    handle() {
      // 执行其他操作
      console.log(this.params);
    }
  }
};
</script>

<style lang="less" scoped></style>
