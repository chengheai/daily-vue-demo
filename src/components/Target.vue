<template>
  <div class="wp">
    <el-row type="flex">

 <el-col >
    <el-button type="primary" size="mini" @click="goAnchor('#anchor1')">国内</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor2')">国际</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor3')">军事</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor4')">财经</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor5')">娱乐</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor6')">体育</el-button>
  <el-button type="primary" size="mini" @click="goAnchor('#anchor7')">互联网</el-button>
 </el-col>
    </el-row>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor1" :style="{'background':getColor()}">国内</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor2" :style="{'background':getColor()}">国际</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor3" :style="{'background':getColor()}">军事</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor4" :style="{'background':getColor()}">财经</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor5" :style="{'background':getColor()}">娱乐</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor6" :style="{'background':getColor()}">体育</div>
  <div style="height:200px" :style="{'background':getColor()}"></div>
  <div style="height:100px" id="anchor7" :style="{'background':getColor()}">互联网</div>
  </div>
</template>

<script>
export default {
  methods: {
    goAnchor(selector) { // 参数selector是id选择器（#anchor14）
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      });
    },
    getColor() {
      this.r = Math.floor(Math.random() * 255);
      this.g = Math.floor(Math.random() * 255);
      this.b = Math.floor(Math.random() * 255);
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)'
    }
  }
}
</script>

<style lang="less" scoped>
.wp{
  height: 3000px;
  position: relative;
  .el-row{
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  div{

  }
}
</style>
