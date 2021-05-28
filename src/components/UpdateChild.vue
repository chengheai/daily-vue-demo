
<template>
  <div @click="changeTitle">
    子title：{{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'defalut'
    }
  },
  methods: {
    changeTitle() {
      this.$emit('update:title', `${Math.random()}-hahaha`)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
