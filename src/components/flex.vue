<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4]
    };
  }
};
</script>

<style lang="less" scoped></style>
