<template>
  <div class="bor">
    son emit {{ nMsg }}
    <el-button type="primary" @click="handleE">emit</el-button>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // msg: "son msg"
    };
  },
  computed: {
    nMsg() {
      return this.news;
    }
  },
  methods: {
    handleE() {
      this.$emit("foo", String(Math.random() * 10));
    }
  },
  mounted() {
    this.handleE();
  }
};
</script>
