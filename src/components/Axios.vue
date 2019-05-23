<template>
  <div>
    <h2 style="background: #ccc; text-align:center;" ref="h2">{{status? '双击屏幕选颜色值': '双击屏幕取消颜色值'}}</h2>
    <pre ref="cont" @dblclick="stop">
      import axios from 'axios';
      import Cookies from 'js-cookie';
      import { Message } from 'element-ui';
      import router from './../router/index';
      axios.defaults.timeout = 10000;

      var init = {                                              ❤️ 没画好？重画 [更多...]
        // 记录时间戳
        timer: null,
        // 是否调过refresh_token函数
        isRefresh: false,
        // 公用提示                                                  🥕🥕🥕         🥕🥕🥕🥕
        openMessage: function(msg) {                             🥕🥕🥕🥕       🥕🥕🥕🥕🥕
          Message({                                            🥕🥕🥕🥕🥕     🥕🥕🥕🥕🥕
            message: msg,                                      🥕🥕🥕🥕🥕  🥕🥕🥕🥕🥕🥕
            type: 'error',                                      🥕 🥕🥕🥕🥕🥕🥕🥕🥕🥕
            showClose: true,                                     🥕 🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕
          });                                                      🥕🥕🥕🥕🥕🥕🥕🥕🥕
        },                                                           🥕🥕🥕🥕🥕🥕🥕
        getRefreshToken: function() {                                  🥕🥕🥕🥕🥕🥕
          let params = {                                                 🥕🥕🥕🥕🥕、
            refresh_token: Cookies.get('refresh_token'),                   🥕🥕🥕🥕
          };                                                                 🥕🥕🥕
          let that = this;                                                     🥕🥕
          axios({
            method: 'post',
            url: `api/v1/refresh_token${params}`,
          })
            .then(function(res) {
              if (res.data.access_token) {
                // 防止重复调refresh_token接口
                that.isRefresh = false;
                let result = res.data;
                let millisecond = new Date().getTime();
                let expiresTime = result.expires_in * 1000;
                let utilTime = millisecond + expiresTime;
                Cookies.set('access_token', result.access_token, { expires: expiresTime });
                Cookies.set('utilTime', utilTime);
                Cookies.set('refresh_token', result.refresh_token);
                Cookies.set('expires_in', result.expires_in);
              } else {
                //刷新token失败只能跳转到登录页重新登录
                localStorage.clear();
                Cookies.remove('access_token');
                Cookies.remove('utilTime');
                Cookies.remove('expires_in');
                Cookies.remove('refresh_token');
                router.replace({
                  path: '/login',
                  query: { redirect: router.currentRoute.fullPath },
                });
              }
            })
            .catch(function(err) {
              //刷新token失败只能跳转到登录页重新登录
              get_sys_logout();
              localStorage.clear();
              Cookies.remove('access_token');
              Cookies.remove('utilTime');
              Cookies.remove('expires_in');
              Cookies.remove('refresh_token');
              console.log(err);
              that.openMessage('登录失效');
              router.replace({
                path: '/login',
                query: { redirect: router.currentRoute.fullPath },
              });
            });
        },
      };

      //http request 拦截器
      axios.interceptors.request.use(
        config => {
          config.data = JSON.stringify(config.data);
          init.timer = new Date().getTime();
          if (Cookies.get('access_token')) {
            <!-- if ((parseInt(Cookies.get('utilTime')) - init.timer) / (1000 * 60 * 60) < 0) { -->
              Cookies.remove('access_token');
              Cookies.remove('utilTime');
              Cookies.remove('expires_in');
              Cookies.remove('refresh_token');
              get_sys_logout();
              localStorage.clear();
              router.replace({
                path: '/login',
                query: { redirect: router.currentRoute.fullPath },
              });
            }
            config.headers = {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${Cookies.get('access_token')}`,
            };
          } else {
            config.headers = {
              'Content-Type': 'application/json',
            };
          }
          return config;
        },
        error => {
          Message.error({
            message: '加载超时',
          });
          return Promise.reject(error);
        }
      );

      //响应拦截器即异常处理
      axios.interceptors.response.use(
        response => {
          if (Cookies.get('utilTime')) {
            if (!init.isRefresh) {
              // 是否是到期前30分钟
              <!-- if ((parseInt(Cookies.get('utilTime')) - init.timer) / (1000 * 60 * 60) < 0.5) { -->
                init.isRefresh = true;
                init.getRefreshToken();
              }
            }
          }
          return response;
        },
        err => {
          // debugger
          if (err && err.response) {
            switch (err.response.status) {
              case 400:
                console.log('错误请求');
                break;
              case 401:
                //刷新token失败只能跳转到登录页重新登录
                get_sys_logout();
                localStorage.clear();
                Cookies.remove('access_token');
                Cookies.remove('expires_in');
                Cookies.remove('utilTime');
                Cookies.remove('refresh_token');
                init.openMessage('登录失效');
                router.replace({
                  path: '/login',
                  query: { redirect: router.currentRoute.fullPath },
                });
                break;
              case 403:
                init.openMessage('拒绝访问');
                break;
              case 404:
                init.openMessage('请求错误,未找到该资源');
                break;
              case 405:
                init.openMessage('请求方法未允许');
                break;
              case 408:
                init.openMessage('请求超时');
                break;
              case 500:
                init.openMessage('服务器端出错');
                break;
              case 501:
                init.openMessage('网络未实现');
                break;
              case 502:
                init.openMessage('网络错误');
                break;
              case 503:
                init.openMessage('服务不可用');
                break;
              case 504:
                init.openMessage('网络超时');
                break;
              case 505:
                init.openMessage('http版本不支持该请求');
                break;
              default:
                init.openMessage(`连接错误${err.response.status}`);
            }
          } else {
            init.openMessage('连接服务器失败');
          }
          return Promise.resolve(err.response);
        }
      );
      export default axios;

    </pre>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "axios",
  data() {
    return {
      rgb: "",
      status: true,
      timer: ""
    };
  },
  mounted() {
    this.timer = setInterval(this.change, 1000);
  },
  methods: {
    change() {
      console.log(this.$refs.cont);
      this.bg3();
      this.$refs.cont.style.color = this.rgb;
      this.$refs.h2.style.color = this.rgb;
    },
    stop() {
      if (this.status) {
        clearInterval(this.timer);
        this.status = false;
      } else {
        this.status = true;
        this.timer = setInterval(this.change, 1000);
      }
    },
    bg3() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      this.rgb = "rgb(" + r + "," + g + "," + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
pre {
  background: #000;
  color: rgb(28, 143, 5);
  font-size: 2em;
  cursor: pointer;
}
.test {
  height: 100vh;
  width: 100vw;
  font-size: 2em;
}
</style>

