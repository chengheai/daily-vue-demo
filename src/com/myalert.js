/* eslint-disable */
import Vue from 'vue';
import Alert from './myalert1.vue'; //引入刚才写的弹框组件 
let AlertConstructor = Vue.extend(Alert); // 返回一个“扩展实例构造器” 

let AlertModal = (o) => {
  let alertDom = new AlertConstructor({
    el: document.createElement('div') //将Alert组件挂载到新创建的div上 
  })
  document.body.appendChild(alertDom.$el); //把Alert组件的dom添加到body里 

  // 标题
  alertDom.title = o.title || '信息';
  // 单条内容
  alertDom.content = o.content;
  // 关闭按钮
  alertDom.cancelBtn = o.cancelBtn;

  // 弹框三个事件 右上角关闭 确定 取消
  alertDom.a_close = o.close || null;
  alertDom.a_confirm = o.confirm || null;
  alertDom.a_cancel = o.cancel || null;

}
export default AlertModal;
