<template>
  <div id="tip_alertModal">
    <div class="t-alert-mask"></div>
    <div class="t-alert-container">
      <div class="t-alert-content">
        {{ content }}
      </div>
      <div class="t-alert-confirm">
        <div class="confirm" @click="confirm">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true, // 通过这个属性，控制是否移除dom元素
      title: "", // 顶部标题
      content: "", // 内容
      cancelBtn: false // 取消按钮
    };
  },
  methods: {
    confirm() {
      // 确定
      this.a_confirm && this.a_confirm();
      this.show = false;
      // 删除判断增加的window属性
      delete window.alertIsShow;
    }
  },
  watch: {
    show(cur, old) {
      // 通过监控data里的show属性  弹框有三个事件（右上角取消  确定按钮  取消按钮）
      // 每个事件写了 this.show = false
      // 当弹框出现的时候 点击任何一个事件  都会触发这里的监控事件  将页面上的弹框Dom移除
      if (cur === false) {
        let tipAlert = document.getElementById("tip_alertModal");
        tipAlert.parentNode.removeChild(tipAlert);
      }
    }
  }
};
</script>
<style lang="less" scoped>
#tip_alertModal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;

  .t-alert-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .t-alert-container {
    position: fixed;
    display: table;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #fff;
    text-align: center;
    border-radius: 3px;

    .t-alert-content {
      padding: 1em 0.8em;
      min-height: 40px;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
      word-break: break-all;
      color: #999;
    }

    .t-alert-confirm {
      position: relative;
      line-height: 48px;
      font-size: 18px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      .confirm {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        color: #3cc51f;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;
      }
    }
    .t-alert-confirm:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #d5d5d6;
      color: #d5d5d6;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}
</style>
