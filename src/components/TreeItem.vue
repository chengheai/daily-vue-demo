
<template>
  <div class="tree-item">
    <div @click="handleToggle" class="tree-title">
      <i v-if="hasChild" :class="open?'el-icon-remove-outline':'el-icon-circle-plus-outline'"></i>
      <h4>{{ list.label }}</h4>
    </div>
    <div v-show='open'  class="child-content">
      <tree-item
        v-for="(item, index) in list.children"
        :list="item"
        :key="index"
      ></tree-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    list: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    hasChild() {
      return this.list.children && this.list.children.length;
    }
  },
  methods: {
    handleToggle() {
      if (this.hasChild) {
        this.open = !this.open;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.tree-item{
  font-size: 20px;
  cursor: pointer;
  .tree-title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.child-content{
  margin-left: 50px;
}
</style>
