import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router/index";
// import env from "./env";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

// 使用mockjs
const mock = true;
if (mock) {
  require("./mock/api");
}

// 根据前端跨域方式修改
// 方式1:通过jsonp或cors跨域
// 不修改baseURL,将其封装成模块统一处理
// axios.defaults.baseURL = env.baseURL;

// 方式2:通过代理服务器请求,需要配置vue-config.js文件
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

// 全局拦截器
// axios.interceptors.request.use(function(response) {
//   // 获取返回值
//   let res = response.data;
//   if (res.status == 0) {
//     return res.data;
//     // 规范状态码
//   } else if (res.status == 100) {
//     window.location.href = "/#/login";
//   } else {
//     alert(res.msg);
//   }
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
