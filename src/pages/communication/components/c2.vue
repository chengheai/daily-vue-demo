<template>
  <div class="bor">
    <h3>Father</h3>
    <el-button type="danger" @click="handleC">change</el-button>
    params: {{ ms }}
    <h4>Child</h4>
    <son2 :news="ms" @foo="handleL"></son2>
  </div>
</template>

<script>
import son2 from "./son2";
export default {
  components: {
    son2
  },
  data() {
    return {
      ms: ""
    };
  },
  methods: {
    handleC() {
      this.ms = String(Math.random() * 10);
    },
    handleL(val) {
      this.ms = val;
      console.log(val);
    }
  }
};
</script>
