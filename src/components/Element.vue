<template>
<div>
  <el-button type='success' @click="goback">返回上一页</el-button>
  <el-button @click="startHacking">Start</el-button>
  <h4 class="bb">{{show? 'hh': 'gg'}}</h4>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" color="rgba(142, 113, 199, 0.7)"></el-progress>
  <el-progress type="circle" :percentage="percentage"></el-progress>
  <el-progress type="circle" :percentage="percentage" color="#8e71c7"></el-progress>
  <transition name="bounce">
    <h1 v-if="show">{{msg}}</h1>
  </transition>
  <div>
    <div v-for="item in showdetailList" :key='item.message'>
      <h3>{{item.message}}</h3>
    </div>
  </div>
  <el-button type="success" v-if="items.length > 2" v-on:click="changeFoldState">
    <span>{{brandFold?'展开':'收起'}}</span>
  </el-button>
  <div v-for='(obj,index) in objs' :key='obj.msg'>
    <h3 class='h01' @click="aaa(index)">{{obj.msg}}</h3>
    <div v-show="showState == index">
      回复：<input type="text">
      </div>
      <div v-for='(o,inde) in obj.arr' :key='o.msg1'>
        <span v-show="false">{{inde}}</span>
        <h3 class='h02' @click="aaa(index)">{{o.msg1}}</h3>
      </div>
    </div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu> -->

  </div>
  <!-- <el-radio-group v-model="radio2" @change="change1">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group> -->
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }]
      },
      value1: '',
      isCollapse: true,
      radio2: 3,
      percentage: 0,
      msg: '',
      show: false,
      brandFold: true,
      activeIndex: 1,
      items: [{
        message: 'Foo'
      }, {
        message: 'Bar'
      }, {
        message: 'alex'
      }],
      showState: -1,
      objs: [
        {
          msg: '第一组',
          arr: [{
            msg1: '1'
          }, {
            msg1: '2'
          }, {
            msg1: '3'
          }]
        },
        {
          msg: '第二组',
          arr: [{
            msg1: '1'
          }, {
            msg1: '2'
          }, {
            msg1: '3'
          }]
        },
        {
          msg: '第三组',
          arr: [{
            msg1: '1'
          }, {
            msg1: '2'
          }, {
            msg1: '3'
          }]
        }
      ]
    }
  },
  computed: {
    showdetailList: {
      get: function () {
        if (this.brandFold) {
          if (this.items.length < 3) {
            return this.items
          }
          let newArr = []
          for (var i = 0; i < 2; i++) {
            let item = this.items[i]
            newArr.push(item)
          }
          return newArr
        }
        return this.items
      },
      set: function (val) {
        this.showdetailList = val
      }
    }
  },
  methods: {
    aaa(index) {
      this.showState = index
    },
    goback() {
      this.$router.go(-1)
    },
    startHacking() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      })
    },
    changeFoldState() {
      this.brandFold = !this.brandFold
    },
    test() {
      this.percentage = this.percentage + 0.1;
      this.percentage = Math.floor(this.percentage * 100) / 100;
      if (this.percentage > 100) {
        this.show = true;
        this.percentage = 100;
        this.msg = 'hello 老玻璃！';
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change1(value) {
      console.log(value);
    }
  },
  mounted() {
    setInterval(this.test, 10);
  }
};
</script>

<style lang='css' scoped>
.bb{
  color:blue;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
.h01{
  background: salmon;
}
.h02{
  background: yellow;
}
</style>
