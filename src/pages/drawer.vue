<template>
  <div class="drawer">
    <div :class="maskClass" @click="closeByMask"></div>
    <div :class="mainClass" :style="mainStyle" class="main">
      <div class="drawer-head">
        <span>{{ title }}</span>
        <span
          v-show="closable"
          class="close-btn"
          @click="closeByButton"
        >x</span>
      </div>
      <div class="drawer-body" :style="bodyStyle">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 是否打开
    display: {
      type: Boolean
    },
    // 标题
    title: {
      type: String,
      default: "标题"
    },
    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true
    },
    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 宽度
    width: {
      type: String,
      default: "400px"
    },
    // 高度
    height: {
      type: String,
      default: "75%"
    },
    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maskClass: function() {
      return {
        "mask-show": this.mask && this.display,
        "mask-hide": !(this.mask && this.display),
        inner: this.inner
      };
    },
    mainClass: function() {
      return {
        "main-show": this.display,
        "main-hide": !this.display,
        inner: this.inner
      };
    },
    mainStyle: function() {
      return {
        width: this.width,
        height: this.height,
        bottom: this.display ? "0" : `-${this.height}`,
        borderTop: this.mask ? "none" : "1px solid #eee"
      };
    },
    bodyStyle: function() {
      return {
        height: this.height
      };
    }
  },
  mounted() {
    if (this.inner) {
      let box = this.$el.parentNode;
      box.style.position = "relative";
    }
  },
  methods: {
    closeByMask() {
      this.maskClosable && this.$emit("update:display", false);
    },
    closeByButton() {
      this.$emit("update:display", false);
    }
  }
};
</script>
<style lang="less" scoped>
.drawer {
  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.5s;
  }
  .mask-hide {
    opacity: 0;
    transition: opacity 0.5s;
  }
  /* 滑块 */
  .main {
    position: fixed;
    z-index: 10;
    bottom: 0;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #f7f7f7;
    transition: all 0.5s;
  }
  .main-show {
    opacity: 1;
  }
  .main-hide {
    opacity: 0;
  }
  /* 某个元素内部显示 */
  .inner {
    position: absolute;
  }
  /* 其他样式 */
  .drawer-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #eee;
    .close-btn {
      font-size: 24px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      cursor: pointer;
    }
  }
  .drawer-body {
    // padding: 20px;
    font-size: 14px;
    overflow: auto;
  }
}
</style>
