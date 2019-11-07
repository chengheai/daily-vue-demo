<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是竖屏状态',
    };
  },
  methods: {
    handleW() {
      const u = navigator.userAgent;
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
      // const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      let W;
      if (isAndroid) {
        W = window.screen.width;
      } else {
        W = document.body.clientWidth;
      }
      // if (isIOS) {
      // }
      let H = W / (16 / 9);
      console.log(`宽度是${W},高度是${H}`);
    },
  },
  mounted() {
    let that = this;
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function() {
        if (window.orientation === 180 || window.orientation === 0) {
          that.msg = '我是竖屏状态';
        }
        if (window.orientation === 90 || window.orientation === -90) {
          that.msg = '我是横屏状态';
        }
        that.$nextTick(() => {
          that.handleW();
        });
      },
      false,
    );
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: calc(100vh - 83px);
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
}
</style>
