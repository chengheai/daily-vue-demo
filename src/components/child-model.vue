<template>
  <div>
    <input
      type="text"
      :value='value'
      @change="handleChange"
      @input="handleChange"
    >
  </div>
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
  data() {
    return {
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value)
    }
  }

}
</script>

<style lang="less" scoped>

</style>
