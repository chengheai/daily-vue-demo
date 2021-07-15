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
    myRef.addEventListener('scroll', this.debounce(this.handleScroll, 1000))
  },
  methods: {
    debounce(method, delay) {
      let timer = null
      return function () {
        let self = this
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(function () {
          method.apply(self, arguments)
        }, delay)
      }
    },
    handleScroll() {
      this.list.push('滑动后一秒内不再滑动我就执行一次')
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
