<template>
  <div>
    <el-button @click="handleEmit">emit</el-button>
    <el-divider content-position="left"></el-divider>
    <ChildBus></ChildBus>
    <!-- 不生效 -->
    <ChildBus1></ChildBus1>
    <ChildBus2></ChildBus2>
  </div>
</template>

<script>
import ChildBus from "./ChildBus";
import ChildBus1 from "./ChildBus1";
import ChildBus2 from "./ChildBus2";
export default {
  components: {
    ChildBus,
    ChildBus1,
    ChildBus2
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
