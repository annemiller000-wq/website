// 产品详情
<template>
  <div class="main" v-if="dataLoaded">
    <div class="pro-part1">
      <div class="pro-part1-l">
        <div class="pro-part1-l">
          <img
              :src="require(`@/assets/images/product/cover${dataDetails.categoryId}/details${dataDetails.productId}/${this.imgSrc}`)"
              class="pro-part1-lt-pic"
          />
        </div>
        <div class="pro-part1-pz-list">
          <div
              v-for="(v, i) in dataDetails.usProductImageList"
              :key="i"
              class="pro-part1-pz-item"
              @click="setCurrentImage(v)"
          >
            <img
                :src="require(`@/assets/images/product/cover${dataDetails.categoryId}/details${dataDetails.productId}/${v.url}`)"
                class="pro-part1-pz-icon" />
          </div>
        </div>

      </div>
      <div class="pro-part1-r">
        <div class="pro-part1-rt">
          <div class="pro-part1-title">
            {{ dataDetails.productName }}
          </div>
        </div>
        <div v-if="dataDetails.usProductSettingList[0].usProductSettingChildList.length > 0">
          <div
              class="pro-part1-pz"
              v-for="(item, index) in dataDetails.usProductSettingList"
              :key="index"
          >
            <div class="pro-part1-pz-title">{{ item.setTitle }}</div>
            <div class="pro-part1-pz-list">
              <div
                  v-for="(v, i) in item.usProductSettingChildList"
                  :key="i"
                  class="pro-part1-pz-item"
              >
                <img
                    :src="require(`@/assets/images/product/cover${dataDetails.categoryId}/details${dataDetails.productId}/${v.url}`)"
                    class="pro-part1-pz-icon"
                    @click="setCurrentImage(v)"/>
              </div>
            </div>
          </div>
        </div>
        <div
            class="pro-part1-info"
            v-if="dataDetails.usProductSizeSettingList.length > 0"
        >
          <div
              v-for="(item, index) in dataDetails.usProductSizeSettingList"
              :key="index"
              class="pro-part1-info-item"
          >
            {{ item.title }} : {{ item.synopsis }}
          </div>
        </div>

        <div class="pro-part1-jj">
          <div class="pro-part1-pz-title">{{ dataDetails.usProductSettingSynopsis.title }}</div>
          <div class="pro-part1-info-item">
            {{ dataDetails.usProductSettingSynopsis.synopsis }}
          </div>

        </div>
      </div>
    </div>
    <div class="pro-part2" >
      <img :src="require(`@/assets/images/space007/os_icon_case@2x.png`)"
          class="pro-part1-gd" />
    </div>

    <div class="pro-part4" v-if="dataDetails.usProductPictureList.length > 0">
      <div
          v-for="(item, index) in dataDetails.usProductPictureList"
          :key="index"
      >
        <div class="pro-part4-item" v-if="index % 2 == 0">
          <img
              :src="require(`@/assets/images/product/cover${dataDetails.categoryId}/details${dataDetails.productId}/${item.url}`)"
              class="pro-part4-item-pic" />
          <div class="pro-part4-item-other">
            <div class="pro-part4-title">{{ item.title }}</div>
            <div class="pro-part4-text">
              {{ item.synopsis }}
            </div>
          </div>
        </div>
        <div class="pro-part4-item" v-else>
          <div class="pro-part4-item-other">
            <div class="pro-part4-title">{{ item.title }}</div>
            <div class="pro-part4-text">
              {{ item.synopsis }}
            </div>
          </div>
          <img
              :src="require(`@/assets/images/product/cover${dataDetails.categoryId}/details${dataDetails.productId}/${item.url}`)"
              class="pro-part4-item-pic" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import "@/assets/css/proDetails.css";
export default {
  name: "ProDetails",
  components: {  },
  data() {
    return {
      dataLoaded: false,
      categoryId: "",
      productId: "",
      productName:"",
      dataDetails: {
        usProductImageList: [],
        usProductPictureList: [],
        usProductSettingList: [],
        usProductSizeSettingList: [],
        usProductSettingSynopsis: [],
      },
      imgSrc: "1.jpg",
    };
  },
  computed: {




  },
  beforeRouteUpdate(to, from, next) {
    this.productId = to.query.productId;
    this.categoryId = to.query.categoryId;
    this.getDetails(this.categoryId,this.productId);
    next();
  },
  activated() {
    this.productId = this.$route.query.productId;
    this.categoryId = this.$route.query.categoryId;
    this.getDetails(this.categoryId,this.productId);
  },
  methods: {
    setCurrentImage(i) {
      this.imgSrc = i.url;
    },
    getDetails(pid,id) {
      this.dataDetails= require('../api/product/cover'+pid+'/details'+id+'.json');
      this.imgSrc = this.dataDetails.cover;
      this.dataLoaded= true;
    },
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dialog-left {
  width: 600px;
  height: 600px;
  position: relative;
}

.swiper-item {
  width: 100%;
  height: 600px;
}
.swiper-pic {
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  top: 0;
}
.dialog-left >>> .el-carousel__indicators--horizontal {
  position: absolute;
  bottom: 5px;
  left: 50%;
  height: 26px;
  max-width: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  z-index: 15 !important;
}
.dialog-left
>>> .el-carousel__indicators--horizontal
.el-carousel__indicator--horizontal {
  display: flex;
  align-items: center;
}
.dialog-left >>> .el-carousel__button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dialog_carousel {
  width: 100% !important;
  height: 600px !important;
  z-index: 5 !important;
  overflow-y: hidden;
}
.dialog_carousel >>> .el-carousel__container {
  width: 100% !important;
  height: 600px !important;
  z-index: 9 !important;
}
</style>
