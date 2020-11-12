<template>
  <div class="bor">
    <h2>===father</h2>
    <Son str="str" :num="5" :obj='{a:1,b:2}' :arr="arr" :foo="hello" />
  </div>
</template>

<script>
import Son from "./son1";
export default {
  components: {
    Son
  },
  data() {
    return {
      arr: [1, 2, 3]
    };
  },
  methods: {
    hello() {
      return "log hello";
    }
  }
};
</script>
