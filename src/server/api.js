/* eslint-disable */
import axios from 'axios'

// 用户登录
export function postLogin(params) {
  return axios.post('/auth/login', params);
}
// 基础table请求数据
export function get_table(params) {
  return axios.get( '/table', {params});
}
