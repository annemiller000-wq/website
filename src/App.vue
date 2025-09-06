<template>
  <div id="app" name="app" ref="app">
    <!-- 顶栏容器 -->
    <div class="header">
      <TopNav></TopNav>
    </div>
    <!-- 顶栏容器END -->
    <div class="main-div">
      <!-- 主要区域容器 -->
      <div class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <!-- 主要区域容器END -->
      <!-- 底栏容器 -->
      <div class="footer" id="footer">
        <BotFooter></BotFooter>
      </div>
    </div>

    <div
        class="whatsapp-fab-container"
        :class="{ 'show-fab': showFab }"
        @click="openWhatsApp"
    >
      <div class="whatsapp-fab">
        <div class="whatsapp-icon">
          <svg width="32px" height="32px" viewBox="0 0 1219.547 1225.016">
            <path style="fill: #E0E0E0;" fill="#E0E0E0"
                  d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"></path>
            <linearGradient id="htwaicona-chat-s4" gradientUnits="userSpaceOnUse" x1="609.77" y1="1190.114" x2="609.77"
                            y2="21.084">
              <stop offset="0" stop-color="#20b038"></stop>
              <stop offset="1" stop-color="#60d66a"></stop>
            </linearGradient>
            <path style="fill: url(#htwaicona-chat-s4);" fill="url(#htwaicona-chat-s4)"
                  d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" style="fill: #FFFFFF;" fill="#FFF"
                  d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"></path>
          </svg>
        </div>
        <span class="whatsapp-text">Fale conosco agora</span>
      </div>
    </div>

  </div>
</template>
<script>


export default {
  data() {
    return {
      currentScroll: 0,
      dialogVisible: true,
      showFab: true
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // 初始化检查

  },
  beforeUnmount() {
    // 移除事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动超过100px显示按钮
      this.showFab = scrollTop > 100;
    },
    openWhatsApp() {
      // 这里替换为您的WhatsApp电话号码和消息
      const phone = '8618510481423'; // 替换为您的号码
      // const message = encodeURIComponent('Olá, gostaria de mais informações!');
      const url = `https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`;

      // https://api.whatsapp.com/send/?phone=557592937334&text&type=phone_number&app_absent=0

      window.open(url, '_blank', 'noopener,noreferrer');
    }
  },
};
</script>

<style>
/* 全局CSS */
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
}

/* 隐藏默认滚动条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

page,
html,
body {
  width: 1920px;
}

@font-face {
  font-family: "MyCustomFont";
  src: url("../src/assets/HanchanSerif-Regular.otf") format("truetype");
}

body {
  font-family: "MyCustomFont", sans-serif;
}

.header {
  width: 1920px;
  padding: 0;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 99;
}

.main-div {
  width: 100%;
  padding: 0;
  position: relative;
  left: 0;
  top: 0;
}

.main {
  width: 100%;
  padding: 0;
}

.footer {
  width: 100%;
  padding: 0;
}

a,
a:hover {
  text-decoration: none;
}

ul > li {
  display: flex;
  align-items: center;
}

.online-part {
  width: 388px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #ffffff;
  padding: 0 16px 0 13px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #74c9c6;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
}

.all-page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 88;
}

.iframe-visible {
  /* width: 368px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  background-color: transparent;
  z-index: 99;
}

.iframe-icon {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
}

.back-up {
  color: #caa68a;
}

/* 新增WhatsApp悬浮按钮样式 */
.whatsapp-fab-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.whatsapp-fab-container.show-fab {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.whatsapp-fab {
  display: flex;
  align-items: center;
  background-color: #e4e4e4;
  color: #7f7d7d;
  padding: 0 12px 0 0;
  border-radius: 25px;
  font-size: 13px;
  line-height: 32px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.whatsapp-fab:hover {
  background-color: #25D366;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.whatsapp-icon {
  margin: 0 8px 0 -12px;
  order: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp-text {
  font-weight: 500;
  white-space: nowrap;
}

/* 全局CSS END */
</style>
