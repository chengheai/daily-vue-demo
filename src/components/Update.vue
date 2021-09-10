<template>
  <div>
    <UpdateChild :title.sync="p_title2"></UpdateChild>
    <UpdateChild :title="p_title" @update:title="val => p_title = val"></UpdateChild>
  </div>
</template>

<script>
import UpdateChild from './UpdateChild'
export default {
  components: {
    UpdateChild
  },
  data() {
    return {
      p_title: '点击我1',
      p_title2: '点击我2'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
