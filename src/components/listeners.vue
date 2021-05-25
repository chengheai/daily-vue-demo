<template>
  <el-input :value='value' @change="handleChange" @input="handleChange" v-bind='$attrs' v-on="$listeners"></el-input>
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
