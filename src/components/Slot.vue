
<template>

<TemplateSlot>
   <template #header>
     我是头部
   </template>
   <div>
     哈哈哈哈哈哈
   </div>
   <div slot='footer'>
     我是底部
   </div>
</TemplateSlot>

</template>

<script>
import TemplateSlot from './TemplateSlot.vue'
export default {
  components: {
    TemplateSlot
  }
}
</script>

<style lang="less" scoped>

</style>
