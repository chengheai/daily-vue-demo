<template>
  <div>
    <div class="p1">
    123
  </div>
  <img class="img1" src="https://mdn.mozillademos.org/files/15087/rect.png" alt="">
  <ul >
    <li v-for="(value,key,index) in obj" :key="index">{{key}}:{{value}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      rect: {}
    }
  },
  mounted() {
    this.$nextTick(() => this.getBound())
  },
  methods: {
    getBound() {
      const p1 = document.querySelector('.p1')
      const obj = {}
      obj['offsetTop'] = p1.offsetTop
      obj['tagName'] = p1.tagName
      obj['width'] = p1.getBoundingClientRect().width
      obj['top'] = p1.getBoundingClientRect().top
      obj['bottom'] = p1.getBoundingClientRect().bottom
      obj['right'] = p1.getBoundingClientRect().right
      console.log('this.rect: ', this.rect);
      this.obj = {...obj}
      this.obj = Object.assign(this.obj, obj)
      console.log('p1: ', p1);
    }
  }
}
</script>

<style lang="less" scoped>
.img1{
  width: 400px;
}
.p1{
  width: 200px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid rebeccapurple;
}
</style>
