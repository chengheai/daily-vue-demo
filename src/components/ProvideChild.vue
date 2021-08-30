<template>
  <div>
    <p>{{ title }}</p>
    <ProvideChildGrand></ProvideChildGrand>
  </div>
</template>
<script>
import ProvideChildGrand from "./ProvideChildGrand"
export default {
  name: "Son",
  components: { ProvideChildGrand },
  data () {
    return {
      title: '子组件'
    }
  },
};
</script>
