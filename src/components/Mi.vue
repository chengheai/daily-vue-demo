<template>
  <div class="p1">
    <div>我是父级</div>
    <MiCo></MiCo>
  </div>
</template>

<script>
import MiCo from './MiCo.vue'
export default {
  components: {
    MiCo
  }
}
</script>

<style lang="less" scoped>
// .p1 >>> .custom{
//   color: red;
// }
</style>
