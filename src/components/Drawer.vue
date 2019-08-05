<template>
  <div>
    <el-button type="primary" @click="close">{{
      open ? "open" : "close"
    }}</el-button>
    <div :class="open ? 'mask' : 'nomask'">
      <div class="drawer">
        <div :class="open ? 'open' : 'close'">
          <div class="header">
            <p class="fl">
              标题<el-button type="text" style="float: right" @click="close"
                >X</el-button
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    close() {
      this.open = !this.open;
    }
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.nomask {
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: z-index linear 0.225s;
  background: rgba(0, 0, 0, 0.1);
}
.drawer {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  .close {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: -500px;
    transform: translate(-50%, 0);
    width: 90%;
    height: 500px;
    background: #fff;
    transition: bottom linear 0.225s;
    .header {
      margin: 0 20px;
      height: 56px;
      border-bottom: 1px solid #dddddd;
      p {
        margin-top: 18px;
      }
    }
  }
  .open {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    width: 90%;
    height: 500px;
    background: #fff;
    transition: bottom linear 0.225s;
    .header {
      margin: 0 20px;
      height: 56px;
      border-bottom: 1px solid #dddddd;
      p {
        margin-top: 18px;
      }
    }
  }
}
</style>
