<template>
  <div>
    <p>message：{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "GrandSon",
  inject: [ "message" ],
  data () {
    return {
      title: '孙组件'
    }
  },
};
</script>
