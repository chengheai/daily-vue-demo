<template>
  <div>
    $attrs 组件上所有的属性，$listeners 组件上所有的事件
    <br />
    v-show 控制样式 （是display：none）为什么不是visibility：hidden，opacity：0
    v-if 控制渲染

    <my type="password" value="124" @cb="handle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {
    handle() {}
  },
  components: {
    my: {
      inheritAttrs: false, //
      template: `<div> <myInput v-bind='$attrs' /> </div>`,
      mounted() {
        console.log(this.$listeners);
      },
      components: {
        myInput: {
          template: `<input />`
        }
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
