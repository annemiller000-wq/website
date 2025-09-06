<template>
  <div class="header-main">
    <div :class="'header-top' ">
      <div class="header-top-tips">13651132076 | MON - FRI 9AM - 5PM</div>
    </div>
    <div class="nav-content">
      <nav ref="nav">
        <img :src="require(`@/assets/images/logo/logo@2x.png`)"
          :class="'nav-logo3'"
          @click="toHome()"
        />
        <ul class="nav-ul">
          <li class="nav-li1" @click="toHome()">PRODUCTS</li>
          <li class="nav-li5" @click="toService()">SERVICE</li>
          <li class="nav-li6" @click="toOurStory()">OUR STORY</li>
          <li class="nav-li6" @click="toContactUs()">CONTACT US</li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import "@/assets/css/nav.css";
export default {
  name: "TopNav",
  data() {
    return {
      currentScroll: 0,
      scrollFlag: false,
      scrollTimer: null,
      typeList: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
      // 获取目标元素
      const myElements = document.getElementsByClassName("nav-li1");
      const dropdown = document.getElementsByClassName("nav-li-pro")[0];

      // 添加事件监听器
      for (let i = 0; i < myElements.length; i++) {
        myElements[i].addEventListener("mouseenter", () => {
          dropdown.classList.add("show");
        });
        myElements[i].addEventListener("mouseleave", () => {
          dropdown.classList.remove("show");
        });
      }
    });
    this.getData();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
      }
      this.scrollTimer = setTimeout(() => {
        this.currentScroll = window.pageYOffset;
        let navTop = this.$refs.nav.offsetTop;
        // console.log(this.currentScroll - navTop);
        if (this.currentScroll > 0 && this.currentScroll - navTop > 23) {
          this.scrollFlag = true;
        } else {
          this.scrollFlag = false;
        }
      }, 50);
    },
    toTypeDetails(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "proType",
        query: {
          pid: id,
        },
      });
      // 获取目标元素
      const myElements = document.getElementsByClassName("nav-li1");
      const dropdown = document.getElementsByClassName("nav-li-pro")[0];
      // 添加事件监听器
      for (let i = 0; i < myElements.length; i++) {
        dropdown.classList.remove("show");
      }
    },
    toCase() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Brands",
      });
    },
    toTrade() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Trade",
      });
    },
    toCommercial() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Commercial",
      });
    },
    toGellery() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Gellery",
      });
    },
    toService() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Service",
      });
    },
    toDocument() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Document",
      });
    },
    toEnvironment() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Environment",
      });
    },
    // toCase() {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
    //   });
    //   this.$router.push({
    //     name: "Case",
    //   });
    // },
    toOurStory() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "OurStory",
      });
    },
    toContactUs() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "ContactUs",
      });
    },
    toHome() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "Home",
      });
    },
    getData() {
      var res=require('../api/topNav/topNav.json');
      this.typeList = res.data.dataList;
    },
  },
};
</script>
<style scoped></style>
