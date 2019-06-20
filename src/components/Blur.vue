<template>
  <div>
    <div class="demo1">
      <h3>Test Text</h3>
    </div>
    <el-alert v-if="show" title="用户正在输入..." type="warning"></el-alert>
    <el-input v-model="typing" @keyup.native="upHandle($event)"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      typing: ''
    };
  },
  watch: {},
  mounted() {
    this.timer = setInterval(this.upHandle, 1000);
  },
  methods: {
    upHandle(ev) {
      if (ev) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang ='less' scoped>
.demo1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  h3 {
    font-size: 40px;
    color: rgb(204, 54, 8);
    font-weight: 600;
  }
}
/* .demo1:after{
  background: url(https://avatars1.githubusercontent.com/u/26807610?s=460&v=4) no-repeat;
  background-size: cover;
  width: 500px;
  height: 300px;
  content: "";
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -1;/*-1 可以当背景*/
/* } */
.demo1:before {
  background: url(https://avatars1.githubusercontent.com/u/26807610?s=460&v=4)
    no-repeat;
  background-size: cover;
  width: 500px;
  height: 300px;
  content: "";
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -1; /*-1 可以当背景*/
  -webkit-filter: blur(3px);
  filter: blur(3px);
}
</style>
