<template>
  <my-form v-model="form" @change='handleChange'>
  </my-form>
</template>
<script>
import myForm from './my-form.vue'
export default {
  components: {
    myForm
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    handleChange(val) {
      console.log('val:', val)
    }
  }
}
</script>
<style>
</style>
