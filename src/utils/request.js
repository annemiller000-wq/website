import axios from "axios";
import Cookies from "js-cookie";
import store from "@/store";
import { Message } from "element-ui";
let dev = "https://www.lianlaoban.cn/wmTest/";
// let dev = "https://www.lianlaoban.cn/wm/";
// let dev = "http://192.168.10.254:19246/";
// let dev = "http://192.168.10.178:19246/";

let baseURL = `${dev}`;

const serves = axios.create({
  baseURL,
  timeout: 10000,
});

serves.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    // 如果存在 token,在请求头中携带
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    // 跳转error页面
    // router.push({ path: "/error" });
    return Promise.reject(error);
  }
);
// 全局响应拦截器
serves.interceptors.response.use(
  (res) => {
    if (res.data.code === "401") {
      // 401表示没有登录
      // 提示没有登录
      // Vue.prototype.notifyError(res.data.msg);
      Message.error(res.data.msg);
      // 修改vuex的showLogin状态,显示登录组件
      store.dispatch("setShowLogin", true);
    }
    if (res.data.code === "500") {
      // 500表示服务器异常
      // 跳转error页面
      // router.push({ path: "/error" });
      Message.error(res.data.msg);
    }
    return res.data;
  },
  (error) => {
    // 跳转error页面
    // router.push({ path: "/error" });
    // Message.error(res.data.msg);
    return Promise.reject(error);
  }
);
// 将serves抛出去
export default serves;
