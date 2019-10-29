<template>
  <div>
    <h1>宽度{{w}}px--高度{{h}}px</h1>
    <iframe
      src="https://www.baidu.com/"
      :style="{width: w + 'px', height: h+ 'px'}"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      w: '',
      h: '',
    };
  },
  methods: {
    getW() {
      let W = document.body.clientWidth;
      this.w = W;
      this.h = W / (16 / 9);
    },
  },
  mounted() {
    this.getW();
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: #c00;
}
iframe {
  border: 1px solid red;
}
</style>
