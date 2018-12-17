<template>
  <div>
    <el-button @click="show3 = !show3">Click Me</el-button>
    <el-button type="success" @click="show = !show">Toggle render</el-button>

    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3" style="width: 200px; float: left">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
              <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <div v-if="show" style="width: 200px; float: left">hello</div>
  </transition>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true,
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
