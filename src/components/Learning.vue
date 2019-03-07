<template>
  <h3></h3>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this);
    this.fun();
  },
  methods: {
    fun() {
      console.log(1);
      for (var i = 0; i < 4; i++) {
        console.log(i);
      }
    }
  }
};
</script>

<style>
</style>
