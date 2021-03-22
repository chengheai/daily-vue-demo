
<template>
  <form>
    <input v-model="model.val1" />
    <textarea v-model="model.val2"></textarea>
  </form>
</template>
<script>
export default {
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    model: Object
  },
  watch: {
    model(val) {
      this.$emit('change', val)
    }
  }
}
</script>
<style></style>
