<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      id: 1
    };
    return {
      arr: Array(500).fill(item)
    }
  }
}
</script>
<style>

</style>
