<template>
  <div class="bor">
    son
    <el-button type="primary" @click="$emit('foo', mg)">send1</el-button>
    <el-button type="primary" @click="handleS">send2</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mg: "121212"
    };
  },
  methods: {
    handleS() {
      this.$emit("foo", String(Math.random() * 10));
    }
  }
};
</script>

<style lang="less" scoped></style>
