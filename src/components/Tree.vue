
<template>
  <div class="tree-wrap">
    <div v-for="(item, index) in dataSource" :key="index">
      <tree-item :list="item"></tree-item>
    </div>
  </div>
</template>

<script>
import TreeItem from "./TreeItem";
export default {
  name: 'tree',
  props: {
    dataSource: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  }
};
</script>
<style scoped>
.tree-wrap{
  width: 100%;
  /* padding: 0 50px; */
}
</style>
