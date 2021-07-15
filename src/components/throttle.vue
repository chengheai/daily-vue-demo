<template>
  <div class="flex">
    <div class="left">
      <el-divider content-position="left" v-for="(item,index) in list" :key="index">{{item}}</el-divider>
    </div>
    <div class="container" ref="myContainer">
    <div class="container-content"></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    let myRef = this.$refs.myContainer
    myRef.addEventListener('scroll', this.throttle(this.handleScroll, 2000))
  },
  methods: {
    throttle(fn, delay) {
      let canRun = true
      return function () {
        let self = this
        if (!canRun) return
        canRun = false
        setTimeout(() => {
          fn.apply(self, arguments)
          canRun = true
        }, delay)
      }
    },
    handleScroll() {
      this.list.push('滑动期间我二秒执行一次')
    }
  }
};
</script>

<style lang="less" scoped>
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.left{
  width: 40%;
  margin-right: 20px;
}
.container{
  width: 50%;
  height: 300px;
  overflow: auto;
  border: 1px solid #000;
  overflow-y: scroll;
  &-content{
    background: linear-gradient(to bottom, #ff5454, #ccff65, #4dffaf, #507aff, #ef4bff);
    width: 100%;
    height: 5000px;
  }
}
</style>
