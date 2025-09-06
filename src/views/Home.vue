<template>
  <div class="home_main">
    <!-- swiper -->
    <div class="swiper">
      <el-carousel class="home_carousel">
        <el-carousel-item
          v-for="(item, index) in carouselItems"
          :key="index"
          class="swiper-item"
        >
          <img
              :src="require(`@/assets/images/carousels/${item.imageUrl}`)"
               class="swiper-pic" />
          require(`@/assets/images/icon/${v.iconImage}`)
          <div class="swiper-btn white-hover" @click="toContactUs()">
            CONTACT FORM
            <span class="swiper-text">></span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="part">
      <div class="part-title">
        <div class="part-name">About us</div>
      </div>
      <div class="part-text">
        Esing Printing is specialized in manufacturing Printing notebooks and Packing Products.   Our main products as below:1. Office & School paper stationery products: PU leather or paper notebook, diary, sketch book, sticker, envelop, folder (paper file), calendar, textbooks...2. Packaging & Printing products: Packaging boxes ( paper box, gift box, watch box, flower box, wallet box ...) packaging bags ( paper bags), packaging label tag, catalog, magazine, brochure, flyer, lottery ticket, coupon...   We have more than 23 years experiences of manufacture and wholesale printing notebooks and packing products in our domestic market.   Besides,we also export to EU,USA,Middle East and Asia ect.    We are concentration on technical innovation and products quality control to ensure leave a good impression to our customers and build a long and lasting business relationship.   We not only offer 24 hours consult service of products details,shipping time & shipping cost, sample customization but also offer after sale service to support customer's business for getting mutual benefit.
      </div>
      <div class="part-btn black-hover" @click="toOurStory()">
        OUR STORY<span class="swiper-text">></span>
      </div>
    </div>
    <div class="home-content">
      <div class="home-content-top">
        <div class="home-content-title">Our Products</div>
      </div>
      <div class="home-content-text">
        Main Products:Wire Notebook/Sprial Planner/Leather Notebook/Hardcover Notebook
        Linen Fabric Notebook/Book Printing/Notebook/Planner/Journal/card/Brochure
        Magazine Printing/Gift Box/Corrugated Box printing/Card/Envelop Printing etc.
      </div>
      <div class="home-img-list">
        <div class="home-img-list1">
          <div class="home-item" v-for="(v, i) in typeList1" :key="i">
            <img
              :src="require(`@/assets/images/home/product/${v.cover}`)"
              class="home-img"
              @click="toTypeDetails(v.categoryId)"
            />
            <div class="home-img-text" :class="getContentColor1(i)">
              {{ v.name }}
            </div>
            <div
              v-if="v.pdfFileUrl"
              class="home-img-btn black-hover-border"
              @click="toDownload(v.categoryId)"
            >
              Download Producet PDF <span class="swiper-text">></span>
            </div>
          </div>
        </div>
        <div class="home-img-list2">
          <div class="home-item" v-for="(v, i) in typeList2" :key="i">
            <img
              :src="require(`@/assets/images/home/product/${v.cover}`)"
              class="home-img"
              @click="toTypeDetails(v.categoryId)"
            />
            <div class="home-img-text" :class="getContentColor2(i)">
              {{ v.name }}
            </div>
            <div
              v-if="v.pdfFileUrl"
              class="home-img-btn black-hover-border"
              @click="toDownload(v.categoryId)"
            >
              Download Producet PDF <span class="swiper-text">></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="Fill in email address"
      :visible.sync="emailVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <div class="email-tips">
        Please provide your real email address so that we can send you the
        product image
      </div>

      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="email">
          <el-input
            v-model="form.email"
            placeholder="Please enter your email address"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import "@/assets/css/home.css";

export default {
  name: "Home",
  data() {
    return {
      emailVisible: false,
      categoryId: "",
      form: {
        email: "",
      },
      ipAddress: "",
      rules: {
        email: [
          {
            required: true,
            message: "Please enter your email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please enter the correct email format",
            trigger: "blur",
          },
        ],
      },
      carouselItems: [
        {
          imageUrl:"home_bg1.jpg",
        },
        {
          imageUrl:"home_bg2.jpg",
        },
        {
          imageUrl:"home_bg3.jpg",
        },
        // {
        //   imageUrl:"home_bg4.jpg",
        // },
      ],
      typeList: [],
      typeList1: [],
      typeList2: [],
    };
  },
  computed: {
    getContentColor1() {
      return (index) => (index % 2 == 0 ? "home-color1" : "home-color2");
    },
    getContentColor2() {
      return (index) => (index % 2 != 0 ? "home-color1" : "home-color2");
    },
  },
  activated() {

    this.getData();
  },
  methods: {
    getData() {
      var res= require('../api/product/homeProduct.json');

      let list = res.data.dataList;
      this.typeList = [...list];
      this.typeList1 = [];
      this.typeList2 = [];
      list.forEach((v, i) => {
        if (i % 2 == 0) {
          this.typeList1.push(v);
        } else {
          this.typeList2.push(v);
        }

      });
    },

    toDownload(id) {
      this.categoryId = id;
      this.form = {
        email: "",
      };
      this.emailVisible = true;
    },
    submitForm() {

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
    toOurStory() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "OurStory",
      });
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
    },
  },
};
</script>
<style scoped>
.swiper >>> .el-carousel__indicators--horizontal {
  position: absolute;
  bottom: 5px;
  left: 880px;
  height: 26px;
  max-width: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  z-index: 15 !important;
}
.swiper
  >>> .el-carousel__indicators--horizontal
  .el-carousel__indicator--horizontal {
  display: flex;
  align-items: center;
}
.swiper >>> .el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.swiper >>> .el-carousel__arrow {
  width: 60px;
  height: 60px;
  bottom: 10px;
}
.swiper >>> .el-carousel__arrow i {
  font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.home_carousel {
  width: 1920px !important;
  height: 578px !important;
  z-index: 5 !important;
  overflow-y: hidden;
}
.home_carousel >>> .el-carousel__container {
  width: 1920px !important;
  height: 576px !important;
  z-index: 9 !important;
}
</style>
