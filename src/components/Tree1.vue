<template>
   <div class="tree-w">
     <x-tree :data-source="myData"></x-tree>
   </div>
</template>
<script>
import xTree from './Tree.vue'
export default {
  name: 'trees',
  components: {
    xTree
  },
  data() {
    return {
      myData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
    }
  }
}
</script>
<style>
.tree-w{
  padding: 50px;
  padding-left: 200px;
}
</style>
