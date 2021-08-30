<template>
  <div>
    <p>{{ title }}</p>
    <ProvideChild></ProvideChild>
  </div>
</template>
<script>
import ProvideChild from "./ProvideChild"
export default {
  name: 'Father',
  components: { ProvideChild },
  // provide选项提供变量
  provide: {
    message: 'provided by father'
  },
  data () {
    return {
      title: '父组件'
    }
  },
}
</script>
