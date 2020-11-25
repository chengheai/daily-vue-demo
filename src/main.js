/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import animated from 'animate.css';
import axios from 'axios';
import store from './store';
import bus from './util/bus.js';
import _ from 'lodash';
import fullCalendar from 'vue-fullcalendar';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import VueQuillEditor from 'vue-quill-editor';

import 'nprogress/nprogress.css';
// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import VCharts from 'v-charts'

Vue.use(VCharts)
import Moast from './../src/com/dialog';
Vue.use(Moast);
import myalert from './../src/com/myalert' //这里引入的是js文件
Vue.prototype.$myalert = myalert;

Vue.use(VueQuillEditor /* { default global options } */);

Vue.prototype._ = _;
Vue.prototype.Bus = bus;
// Object.defineProperty(Vue.prototype._, '_', { value: lodash });
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(animated);
Vue.prototype.validForbid = function (value, number = 255) {
  value = value
    .replace(
      /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
      '',
    )
    .replace(/\s/g, '');
  if (value.length >= number) {
    this.$message({
      type: 'warning',
      message: `输入内容不能超过${number}个字符`,
    });
  }
  return value;
};
Vue.prototype.validSe = function (value, number = 255) {
  value = value
    .replace(
      /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
      '',
    )
    .replace(/\s/g, '');
  if (value.length >= number) {
    this.$message({
      type: 'warning',
      message: `输入内容不能超过${number}个字符`,
    });
  }
  return value;
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
});
