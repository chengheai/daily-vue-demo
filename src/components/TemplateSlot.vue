<template>
  <div class="container">
    <h1 v-if="$slots.header">
      <slot name="header"></slot>
    </h1>
    <div class="container__content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="container__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
@color: #ebebeb;
.bordered {
  border-color: @color;
}
.container {
  width: 600px;
  height: 500px;
  border: 1px solid;
  .bordered();
  position: relative;
  margin: 0 auto;
  text-align: center;
  &__content {
    height: 300px;
    border-top: 1px solid;
    .bordered();
    padding: 10px;
    box-sizing: border-box;
  }
  &__footer {
    height: 80px;
    border-top: 1px solid;
    .bordered();
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: inherit;
  }
}
</style>
