<template>
  <div>
    <el-button @click="handleMoast">$moast</el-button>
    <el-button @click="handleAlert">$myalert</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleMoast() {
      this.$moast("124");
    },
    handleAlert() {
      this.$myalert({
        title: "信息",
        content: "登入成功！",
        close() {
          // 这里执行点击右上角需要做的事，默认执行关闭弹框
        },
        confirm() {
          // 这里执行点击确定按钮需要做的事，默认执行关闭弹框
        },
        cancel() {
          // 这里执行点击取消按钮需要做的事，默认执行关闭弹框
        }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped></style>
