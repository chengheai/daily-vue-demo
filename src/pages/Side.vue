<template>
  <div class="sidebar">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-d-arrow-left" v-show="!collapse" title="收起">
        &nbsp;&nbsp;
        <small>收缩侧边栏</small>
      </i>
      <i class="el-icon-d-arrow-right" v-show="collapse" title="展开"></i>
    </div>
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      text-color="#8d9199"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">
                  <i :class="subItem.icon"></i>
                  {{ subItem.title }}
                </template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                <i :class="subItem.icon"></i>
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div>
      <i class="el-icon-d-arrow-right" v-show="collapse" title="展开"></i>
    </div>
  </div>
</template>

<script>
import bus from "./bus";
import { menu } from "../../data/menu";

export default {
  data() {
    return {
      collapse: false,
      items: menu,
      screenWidth: 1000
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  },
  mounted() {
    // if (document.body.clientWidth < 1500) {
    //   this.collapseChage();
    // }
    const that = this;
    window.addEventListener("resize", function() {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    });
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth);
          that.auto();
          that.timer = false;
        }, 400);
      }
    }
  },
  methods: {
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    auto() {
      if (this.screenWidth < 1200) {
        console.log("收起来");
        this.collapse = true;
        bus.$emit("collapse", true);
      } else {
        console.log("展开");
        this.collapse = false;
        bus.$emit("collapse", false);
      }
    }
  }
};
</script>

<style scoped>
.sidebar {
  z-index: 1024;
  display: block;
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%; /*写给不支持calc()的浏览器*/
  height: calc(100% - 52px);
  top: 30px;
  background-color: rgb(235, 239, 243);
  border-top: 1px solid #d6d6d6;
}
.sidebar > ul > li,
.sidebar > ul > li div {
  background-color: rgb(235, 239, 243);
}
.sidebar > ul > li > ul {
  background-color: rgb(235, 239, 243);
}
.el-menu {
  background-color: rgb(235, 239, 243);
}
i {
  margin-right: 10px;
}
.collapse-btn {
  height: 30px;
  width: 100%;
  cursor: pointer;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f4f6fa;
  color: #fff;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 5px 10px #ddd;
}
.collapse-btn i {
  color: #8d9199;
  padding: 1px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* .collapse-btn:before{
        content: "";
        display: block;
        height: 0;
        border-top: 1px dotted #909399;
        position: absolute;
        left: 15px;
        right: 15px;
        top: 18px;
    } */
</style>
