<template>
  <div class="s-w bor">
    <h5>===son</h5>
    <p>props 值：</p>
    <ul>
      <li>str => {{ str }}</li>
      <li>obj => {{ obj }}</li>
      <li>num => {{ num }}</li>
      <li>arr => {{ arr }}</li>
      <li>foo => {{ foo }}</li>
      <li>foo run => {{ foo() }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "son1",
  props: {
    str: {
      type: String,
      default: "123"
    },
    obj: {
      type: Object
    },
    num: {
      type: Number,
      default: 0
    },
    arr: {
      type: Array
    },
    foo: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.s-w {
  font-size: 20px;
  font-weight: 800;
}
</style>
