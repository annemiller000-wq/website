/*
 * 入口文件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-04 23:38:41
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Cookies from "js-cookie";
import "@/utils/rem.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import VueI18n from "vue-i18n";
// import loadLanguage from "./i18n";
Vue.use(ElementUI);

// const languages = loadLanguage();
// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale: Cookies.get("language") || "en_GB", // 设置默认语言
//   messages: languages, // 设置语言包
// });
// Vue.use(ElementUI, {
//   i18n: (key, value) => i18n.t(key, value),
// });

// // 全局函数及变量
// import Global from "./Global";
// Vue.use(Global);

// import Axios from "axios";
// Vue.prototype.$axios = Axios;
// 全局请求拦截器

// 全局拦截器,在进入需要用户权限的页面前校验是否已经登录
router.beforeResolve((to, from, next) => {
  // 判断路由是否设置相应校验用户权限
  if (to.meta.requireAuth) {
      // 没有登录，显示登录组件
      store.dispatch("setShowLogin", true);
      if (from.name == null) {
        //此时，是在页面没有加载，直接在地址栏输入链接，进入需要登录验证的页面
        next("/");
        return;
      }
      // 终止导航
      next(false);
      return;
  }
  next();
});

// 相对时间过滤器,把时间戳转换成时间
// 格式: 2020-02-25 21:43:23
Vue.filter("dateFormat", (dataStr) => {
  var time = new Date(dataStr);
  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    timeAdd0(m) +
    "-" +
    timeAdd0(d) +
    " " +
    timeAdd0(h) +
    ":" +
    timeAdd0(mm) +
    ":" +
    timeAdd0(s)
  );
});

//全局组件
import TopNav from "./components/TopNav";
Vue.component(TopNav.name, TopNav);
import BotFooter from "./components/BotFooter";
Vue.component(BotFooter.name, BotFooter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
