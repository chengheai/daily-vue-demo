<template>
  <div id="tip_alertModal">
    <div class="t-alert-mask"></div>
    <div class="t-alert-container">
      <div class="t-alert-title">
        <span>
          {{ title }}
        </span>
        <span @click="close">X</span>
      </div>
      <div class="t-alert-content">
        <span class="content-text">
          {{ content }}
        </span>
      </div>
      <div class="t-alert-confirm">
        <button @click="confirm">确定</button>
        <!-- 默认是没有取消按钮的，data定义默认true false -->
        <button class="cancel-btn" v-show="cancelBtn" @click="cancel">
          取消
        </button>
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
    close() {
      // 右上角关闭
      this.a_close && this.a_close();
      this.show = false;
      // 删除判断增加的window属性
      delete window.alertIsShow;
    },
    confirm() {
      // 确定
      this.a_confirm && this.a_confirm();
      this.show = false;
      // 删除判断增加的window属性
      delete window.alertIsShow;
    },
    cancel() {
      // 取消
      this.a_cancel && this.a_cancel();
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
        let tip_alert = document.getElementById("tip_alertModal");
        tip_alert.parentNode.removeChild(tip_alert);
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
    background-color: rgba(0, 0, 0, 0.3);
  }

  .t-alert-container {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 240px;
    max-width: 400px;
    height: auto;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 4px;

    .t-alert-title {
      position: relative;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: rgba(115, 134, 255, 1);
      border-radius: 4px 4px 0px 0px;

      span {
        position: absolute;
        top: 50%;
        left: 10px;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        transform: translate(0, -50%);
      }

      img {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        cursor: pointer;
      }
    }

    .t-alert-content {
      text-align: center;
      span {
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }

      span.content-text {
        display: inline-block;
        width: 100%;
        height: auto;
        font-weight: 400;
        font-size: 14px;
        color: #333;
        padding: 20px 18px;
      }
      .t-content-list {
        min-width: 320px;
        height: auto;
        text-align: left;
        .list-title {
          position: relative;
          padding: 10px 0 10px 10px;
          img {
            display: inline-block;
            position: absolute;
            width: 20px;
            margin-right: 10px;
          }
          span {
            display: inline-block;
            vertical-align: middle;
            padding-left: 31px;
          }
        }
        .list-content {
          width: 100%;
          height: auto;
          ul {
            padding-bottom: 10px;
            li {
              width: 100%;
              height: auto;
              padding-bottom: 10px;
              span {
                vertical-align: top;
              }
              span.title {
                display: inline-block;
                padding-left: 41px;
                padding-right: 3px;
                text-align: left;
              }
            }
          }
        }
      }
    }

    .t-alert-confirm {
      width: 100%;
      padding-bottom: 17px;
      text-align: center;

      button {
        display: inline-block;
        width: 80px;
        height: 36px;
        border: none;
        background: rgba(115, 134, 255, 1);
        font-weight: 400;
        font-size: 16px;
        color: #fff;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
      }
      .cancel-btn {
        margin-left: 20px;
        background: rgba(151, 193, 234, 1);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
