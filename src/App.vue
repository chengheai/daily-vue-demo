<template>
  <div id="app">
    <my-header />
    <span class="sedtitle">{{ msg }}</span>
    <router-view />
  </div>
</template>

<script>
import myHeader from './com/header';
export default {
  name: 'App',
  data() {
    return {
      // 计时器
      timer: null,
      msg: '页面加载于 ' + new Date().toLocaleString(),
    };
  },
  components: {
    myHeader,
  },
  methods: {
    autoLogout() {
      // 监听在页面中的点击事件并更新，用户15分钟内没有点击操作，则前往登录页
      let currentTime = 0;
      let lastTime = 0;
      lastTime = new Date().getTime();
      window.document.addEventListener("click", function() {
        console.log('clicked')
        lastTime = new Date().getTime();
      });
      clearInterval(this.timer);

      this.timer = setInterval(() => {
        currentTime = new Date().getTime(); // 更新当前时间
        console.log('left: 6s==>', currentTime - lastTime);
        if (
          currentTime - lastTime > 6 * 1000 && true
          // localStorage.getItem("myToken") &&
          // this.$route.name !== "Login"
        ) {
          // this.$notify({
          //   title: '提示',
          //   message: '到时间了啊',
          //   duration: 0
          // });
          console.log('跳转login了')
          clearInterval(this.timer);
          // 排除项
          // let noCheckout = [
          //   "6E85B71D-BEAA-473B-9252-2C76D99E1EFB",
          //   "6E85B71D-DFDA-473B-9252-2C76D99E1EFB"
          // ];
          // if (!noCheckout.includes(JSON.parse(info).Staff.Id)) {
          //   this.$router.push({ name: "Login" });
          //   this.api.logout(userData).then(res => {
          //     if (res.status === 200) {
          //       clearInterval(this.timer);
          //       localStorage.removeItem("myToken");
          //       localStorage.removeItem("user");
          //       localStorage.removeItem("roleAction");
          //     }
          //   });
          // }
        }
      }, 1000);
    }
  },
  mounted() {
    // this.$EventBus.$on("logout", $event => {
    //   this.autoLogout();
    // });
    this.autoLogout();
  }
};
</script>

<style>
@import './comm/main.css';
* {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 10px;
  height: 6px;
  background: #4491de;
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 16px #c00;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ff9503;
}
.sedtitle {
  color: #ff4200;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nprogress .bar {
  background: rgb(214, 35, 175) !important;
}
</style>
