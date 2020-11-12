<template>
  <div class="bor">
    ref
    <p>{{ mm }}</p>
    <son3 ref="son"></son3>
  </div>
</template>

<script>
import son3 from "./son3";
export default {
  components: {
    son3
  },
  data() {
    return {
      mm: ""
    };
  },
  mounted() {
    this.$refs["son"].$on("foo", msg => {
      this.mm = msg;
    });
  }
};
</script>
