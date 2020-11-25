<template>
  <div>
    <el-button @click="handleEmit">emit</el-button>
    <el-divider content-position="left"></el-divider>
    <ChildBus></ChildBus>
    <!-- 不生效 -->
    <ChildBus1></ChildBus1>
  </div>
</template>

<script>
import ChildBus from "./ChildBus";
import ChildBus1 from "./ChildBus1";
export default {
  components: {
    ChildBus,
    ChildBus1
  },
  data() {
    return {
      form: {
        a: 1,
        b: 2
      }
    };
  },
  methods: {
    handleEmit() {
      this.Bus.$emit("test", this.form);
    }
  }
};
</script>

<style lang="less" scoped></style>
