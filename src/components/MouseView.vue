<template>
  <div>
    <div id="sky" @mousemove="handleMove($event)">
      <img src="http://www.5imoban.net/view/demoimg/cloud.png" />
      <span>鼠标左右晃动，文字和图片跟着晃动的视差效果</span>
      <p>将鼠标移动到“天空”上，左右上下晃动，可以看到云层、标题和段落文字都向上下左右偏移！</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    handleMove(e) {
      var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight - 0.5;
      var _left = -40 * offsetX;
      var _top = -40 * offsetY;
      // $("#sky img")
      //   .css("left", 60 + _left * 0.3)
      //   .css("top", _top * 0.3);
      // $("#sky span")
      //   .css("left", 60 + _left * 3)
      //   .css("top", 180 + _top * 3);
      // $("#sky p")
      //   .css("left", 50 + _left * 1.5)
      //   .css("top", 230 + _top * 1.5);
    }
  }
};
</script>

<style lang="less" scoped>
	div{background:#2454a6; width:500px; height:350px; position:relative; margin:0 auto;}
	img,span,p{position:absolute; color:#fff; font-family:"微软雅黑"; font-size:14px;}
	img{left:60px; top:0px;}
	span{left:60px; top:180px; font-size:14px; font-weight:bold;}
	p{left:50px; top:230px; width:350px; text-indent:2em}
</style>
