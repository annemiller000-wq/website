// 菜单6服务
<template>
  <div class="main">
    <div class="top">
    </div>
    <div class="content" v-if="serviceList.length > 0">
      <el-collapse v-model="activeName" accordion @change="collapseChange()">
        <el-collapse-item
          :name="index"
          :disabled="!item.usServiceFileList.length > 0"
          v-for="(item, index) in serviceList"
          :key="index"
        >
          <template slot="title">
            <div class="ser-title">
<!--              <img :src="require(`@/assets/images/icon/${item.icon}`)" class="title-icon" />-->
              {{ item.name }}
            </div>
          </template>
          <div
            v-for="(v, i) in item.usServiceFileList"
            :key="i"
            class="ser-video-item"
          >
            <img
              :src="require(`@/assets/images/space006/${v.fileCover}`)"
              class="ser-details-img"
              v-if="v.type == 0"
            />
            <div class="ser-img-div" v-if="v.type == 1">
              <img
                :src="require(`@/assets/images/space006/${v.fileCover}`)"
                class="ser-details-img"
              />
              <img
                :src="require(`@/assets/images/icon/web_icon_play@2x.png`)"
                class="ser-video-play"
                @click="playVideo( require(`@/assets/images/space006/${v.fileUrl}`))"
              />
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <VideoModal ref="videoModal" :src="videoSrc" />
  </div>
</template>
<script>

import VideoModal from "@/components/VideoModal.vue";
export default {
  name: "Service",
  components: { VideoModal },
  data() {
    return {
      videoSrc: "",
      activeName: "",
      serviceList: [],
    };
  },
  activated() {
    this.getServiceList();
  },
  methods: {
    collapseChange() {
      let wt = window.pageYOffset;
      if (wt > 100 && this.activeName != "") {
        let top = 300 + Number(this.activeName) * 48;
        window.scrollTo({
          top,
          behavior: "smooth", // 可选,设置为 'smooth' 可以使滚动动画平滑
        });
      }
    },
    getServiceList() {
      var res= require('../api/service.json');
      console.log(res.data.dataList)
      this.serviceList =res.data.dataList;
    },

    playVideo(videoSrc) {
      this.videoSrc = videoSrc;
      this.$refs.videoModal.openModal();
    },

  },
};
</script>
<style scoped>
.main {
  width: 100%;
  box-sizing: border-box;
}
.top {
  width: 1920px;
  height: 260px;
  margin: 0 0 58px;
  background-image: url("../assets/images/space006/os_iocn_ser@2x.png");
  background-size: cover;
  position: relative;
}
.top-title {
  font-weight: bold;
  font-size: 34px;
  color: #fff;
  position: absolute;
  top: 74px;
  left: 405px;
}
.top-text {
  width: 1100px;
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 122px;
  left: 405px;
}
.content {
  width: 1110px;
  margin: 0 auto 21px;
  font-size: 16px;
  color: #262626;
}
.el-collapse {
  border: 0;
}
.el-collapse-item {
  margin-bottom: 30px;
  border: 0;
}
.content >>> .el-collapse-item__header {
  border: 0;
}
.content >>> .el-collapse-item__wrap {
  border: 0;
}
.ser-title {
  display: flex;
  align-items: center;
  color: #262626;
  font-weight: bold;
  font-size: 30px;
}
.title-icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
.ser-video-item {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.ser-img-div {
  width: 740px;
  /* height: 416px; */
  position: relative;
}
.ser-details-img {
  width: 740px;
  position: relative;
}
.ser-video-play {
  width: 81px;
  height: 81px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
