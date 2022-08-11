<template>
  <div>
    <my>
      <div class="slot-scope" slot-scope="{ msg }">{{ msg }}</div>
      <template v-slot:header>
        <div class="head">
          {{ mag }}
        </div>
      </template>
      <div class="111a">{{ msg || "没值？" }}</div>
      <div class="a" slot="a">{{ msg }}</div>
    </my>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "outer"
    };
  },
  components: {
    my: {
      data() {
        return {
          msg: "inner"
        };
      },
      template: `<div class='my'><slot :msg='msg'></slot><slot v-slot:header></slot><slot name='a'></slot></div>`
    }
  }
};
</script>

<style lang="less" scoped></style>
