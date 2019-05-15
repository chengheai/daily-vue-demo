<template>
  <div>
    <!-- <el-button type="primary" @click="change">改变颜色</el-button> -->
    <!-- <div class="test" ref='test'>
      <h2>1</h2>
      <h2>2</h2>
      <h2>3</h2>
      <h2>4</h2>
      <h2>5</h2>
      <h2>6</h2>
    </div> -->
    <pre ref="cont">
      import axios from "axios";
      import { Loading, Message } from "element-ui";
      import qs from "qs";
      import store from "../store/index";
      import router from "../router/index";

      // axios 配置
      axios.defaults.timeout = 5000;
      axios.defaults.baseURL = "api/";
      //用来处理刷新token后重新请求的自定义变量
      axios.defaults.isRetryRequest = false;

      //刷新token的请求方法
      function getRefreshToken() {
        //refresh_token使用vuex存在本地的localstorage，之后会详细说
        let params = {
          grant_type: "refresh_token",
          refresh_token: store.state.currentUser.UserRefreshToken
        };
        //qs的使用主要是因为该接口需要表单提交的方式传数据，具体使用方法自行百度
        return axios.post("oauth/token", qs.stringify(params));
      }

      // http request 拦截器
      var loadinginstace;
      axios.interceptors.request.use(
        config => {
          //获取储存在本地的token值
          let authToken = store.state.currentUser.UserToken;
          //这边可根据自己的需求设置headers，我司采用basic基本认证
          if (authToken === null) {
            authToken = window.btoa("nucleus" + ":" + "nucleus-secret");
            config.headers.Authorization = `Basic ` + authToken;
            config.headers["Content-Type"] = "application/x-www-form-urlencoded";
          } else {
            config.headers.Authorization = `Bearer ` + authToken;
          }

          //这是element-ui的效果，全页面遮罩，中间带有加载圈
          loadinginstace = Loading.service({ fullscreen: true });
          return config;
        },
        err => {
          //这边是参考上面的链接的，具体有什么用我目前还没测到，反正加载超时不是在这边显示
          loadinginstace.close();
          Message.error({
            message: "加载超时"
          });
          return Promise.reject(err);
        }
      );

      // http response 拦截器
      axios.interceptors.response.use(
        response => {
          //关闭遮罩层，非常重要，不然页面都不能操作了！
          loadinginstace.close();
          return response;
        },
        err => {
          if (err.response) {
            switch (err.response.status) {
              case 401:
                let config = err.config;
                /*用vuex删除token
                *因为刷新token的接口和登录接口一样
                *用basic认证和表单提交的方式
                *需要区别于普通接口调用*/
                store.dispatch("DelToken");
                //判断是否已经刷新过token
                if (!config.isRetryRequest) {
                  return getRefreshToken()
                    .then(function(res) {
                      let data = res.data;
                      //用vuex重新设置基本信息
                      store.dispatch("UserLogin", {
                        username: store.state.currentUser.UserName,
                        token: data.access_token,
                        refresh_token: data.refresh_token
                      });
                      //修改flag
                      config.isRetryRequest = true;
                      //修改原请求的token
                      let authToken = store.state.currentUser.UserToken;
                      config.headers.Authorization = `Bearer ` + authToken;
                      /*这边不需要baseURL是因为会重新请求url
                      *url中已经包含baseURL的部分了
                      *如果不修改成空字符串，会变成'api/api/xxxx'的情况*/
                      config.baseURL = "";
                      //重新请求
                      return axios(config);
                    })
                    .catch(function() {
                      //刷新token失败只能跳转到登录页重新登录
                      store.dispatch("UserLogout");
                      router.replace({
                        path: "login",
                        query: { redirect: router.currentRoute.fullPath }
                      });
                      throw err;
                    });
                }
                break;
            }
          } else {
            Message.error({
              message: "加载超时"
            });
          }
          loadinginstace.close();
          return Promise.reject(err);
        }
      );

      export default axios;
    </pre>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'axios',
  data(){
    return {
      rgb: '',
      timer: ''
    }
  },
  mounted(){
    this.timer = setInterval(this.change, 1000);
  },
  methods: {
    change() {
      console.log(this.$refs.cont);
      this.bg3()
      this.$refs.cont.style.color = this.rgb;
    },
    bg3(){
      var r=Math.floor(Math.random()*256);
      var g=Math.floor(Math.random()*256);
      var b=Math.floor(Math.random()*256);
      this.rgb = "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
pre{
  background: #000;
  color: rgb(28, 143, 5);
  font-size: 2em;
}
.test{
  height: 100vh;
  width: 100vw;
  font-size: 2em;
}
</style>

