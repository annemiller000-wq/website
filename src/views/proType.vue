// 产品分类
<template>
  <div class="main">
    <div class="type-top">
      <div class="top-title">{{ parentDetails.name }}</div>
    </div>
    <div class="type-mian">
      <div class="type-left">
        <div
          class="type-item"
          v-for="(item, index) in typeList"
          :key="index"
          :class="[item.categoryId == categoryId && 'type-item-active']"
          @click="changeType(item.categoryId)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="type-right">
        <div class="type-right-num">{{ proList.length }} Item(s) Found</div>
        <div class="type-pro-list" v-if="proList.length > 0">
          <div
            class="type-pro-item"
            v-for="(item, index) in proList"
            :key="index"
            @click="toProDetail(item.productId)"
          >
            <img
              :src="require(`@/assets/images/product/${item.cover}`)"
              class="type-pro-item-cover"
            />
            <div class="type-pro-item-name">{{ item.productName }}</div>
            <div class="type-pro-item-btn">View More</div>
          </div>
        </div>
        <div v-else class="no-data">
          <img
            :src="require(`@/assets/images/error/prod_icon_default@2x.png`)"
            class="no-data-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/proType.css";
export default {
  name: "proType",
  data() {
    return {
      pid: "",
      categoryId: "",
      typeList: [
        {
          categoryId: "",
          name: "All",
        },
      ],
      proList: [],
      parentDetails: {},
      ipAddress: "",
    };
  },
  beforeRouteUpdate(to, from, next) {

    this.pid = to.query.pid;
    this.categoryId = "";
    this.getTypeList(this.pid);
    this.getProList(this.pid, this.categoryId);
    next();
  },
  activated() {
    this.pid = this.$route.query.pid;
    this.categoryId = "";
    this.getIpInfo();
    this.getTypeList(this.pid);
    this.getProList(this.pid, this.categoryId);
  },
  methods: {
    getIpInfo() {

    },

    changeType(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.categoryId = id;
      this.getProList(this.pid, this.categoryId);
    },
    toProDetail(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
      });
      this.$router.push({
        name: "ProDetails",
        query: {
          productId: id,
        },
      });
    },
    getTypeList(id) {
      var res= require('../api/product/type'+id+'.json');

      this.parentDetails = res.data.parentDetails;
      this.typeList = [
        {
          categoryId: "",
          name: "All",
        },
        ...res.data.dataList,
      ];

    },
    getProList(id1) {
      var res= require('../api/product/product'+id1+'.json');
      this.proList = res.data.dataList;


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
  padding: 30px 0;
  box-sizing: border-box;
}
</style>
