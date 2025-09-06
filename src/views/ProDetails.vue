// 产品详情
<template>
  <div class="main">
    <div class="pro-part1">
      <div class="pro-part1-l" v-if="dataDetails.usProductImageList.length > 0">
        <img
          v-if="dataDetails.usProductImageList[0].url"
          :src="`${ossPrefix}${dataDetails.usProductImageList[0].url}`"
          class="pro-part1-lt-pic"
          @click="handleImage(dataDetails.usProductImageList[0].url)"
        />
        <div
          class="pro-part1-l-pic-list"
          v-if="dataDetails.usProductImageList.length > 1"
        >
          <img
            :src="`${ossPrefix}${v.url}`"
            class="pro-part1-l-pic"
            v-for="(v, i) in dataDetails.usProductImageList.slice(1)"
            :key="i"
            @click="handleImage(v.url)"
          />
        </div>
      </div>
      <div class="pro-part1-r">
        <div class="pro-part1-rt">
          <div class="pro-part1-line"></div>
          <div class="pro-part1-title">
            <img
              v-if="dataDetails.iconImage"
              :src="`${ossPrefix}${dataDetails.iconImage}`"
              class="pro-icon"
            />
            {{ dataDetails.productName }}
          </div>
        </div>
        <div v-if="dataDetails.usProductSettingList.length > 0">
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
                <img :src="`${ossPrefix}${v.url}`" class="pro-part1-pz-icon" />
                <div class="show-big">
                  <img :src="`${ossPrefix}${v.url}`" class="show-big-icon" />
                  <div class="show-big-title">{{ v.title }}</div>
                  <div class="show-big-text">
                    {{ v.synopsis }}
                  </div>
                </div>
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
        <img
            :src="require(`@/assets/images/space007/bt_bg_com2.png`)"
          class="pro-part1-gd"
        />
        <div class="pro-part1-jj" v-html="dataDetails.synopsis"></div>
      </div>
    </div>
    <div
      class="pro-part2"
      v-if="
        dataDetails.usProductVideoUp.videoCover &&
        dataDetails.usProductVideoUp.videoUrl
      "
    >
      <img
        :src="`${ossPrefix}${dataDetails.usProductVideoUp.videoCover}`"
        class="pro-part2-cover"
      />
      <img
          :src="require(`@/assets/images/icon/web_icon_play@2x.png`)"
        class="pro-video-play"
        @click="
          playVideo(`${ossPrefix}${dataDetails.usProductVideoUp.videoUrl}`)
        "
      />
    </div>
    <img
      :src="require(`@/assets/images/space007/pro_png_bq@2x.png`)"
      class="pro-part3"
    />
    <div class="pro-part4" v-if="dataDetails.usProductPictureList.length > 0">
      <div
        v-for="(item, index) in dataDetails.usProductPictureList"
        :key="index"
      >
        <div class="pro-part4-item" v-if="index % 2 == 0">
          <img :src="`${ossPrefix}${item.url}`" class="pro-part4-item-pic" />
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
          <img :src="`${ossPrefix}${item.url}`" class="pro-part4-item-pic" />
        </div>
      </div>
    </div>
    <div class="pro-part5">
      <div class="part5-title">Customer Cases</div>
      <div class="case-list" v-if="caseList.length > 0">
        <div
          class="case-item"
          @click="lookCase(index)"
          v-for="(item, index) in caseList"
          :key="index"
        >
          <img
            :src="`${ossPrefix}${item.imgList[0]}`"
            v-if="item.imgList[0]"
            class="case-cover"
          />
          <div class="case-title">{{ item.name }}</div>
          <div class="case-text over-test3">
            {{ item.synopsis }}
          </div>
        </div>
      </div>
    </div>
    <div class="pro-part6">
      <div class="pro-part6-top">
        <div class="part6-top-item" @click="p6Choose = 0">
          More Details
          <div class="part6-top-item-line" v-if="p6Choose == 0"></div>
        </div>
        <div class="part6-top-item" @click="p6Choose = 1">
          Manufacturing Standards
          <div class="part6-top-item-line" v-if="p6Choose == 1"></div>
        </div>
      </div>
      <div
        class="part6-main"
        v-if="p6Choose == 0 && dataDetails.usProductDetailsImageList.length > 0"
      >
        <img
          v-for="(v, i) in dataDetails.usProductDetailsImageList"
          :key="i"
          :src="`${ossPrefix}${v.url}`"
          class="part6-pic"
        />
        <div
          class="part6-video"
          v-if="
            dataDetails.usProductVideoDown.videoCover &&
            dataDetails.usProductVideoDown.videoUrl
          "
        >
          <img
            :src="`${ossPrefix}${dataDetails.usProductVideoDown.videoCover}`"
            class="pro-part2-cover"
          />
          <img
              :src="require(`@/assets/images/icon/web_icon_play@2x.png`)"
            class="pro-video-play"
            @click="
              playVideo(
                `${ossPrefix}${dataDetails.usProductVideoDown.videoUrl}`
              )
            "
          />
        </div>
      </div>
      <div
        class="part6-main"
        v-if="p6Choose == 1 && dataDetails.usProductSpecImageList.length > 0"
      >
        <img
          v-for="(v, i) in dataDetails.usProductSpecImageList"
          :key="i"
          :src="`${ossPrefix}${v.url}`"
          class="part6-pic"
        />
        <div
          class="part6-video"
          v-if="
            dataDetails.usProductVideoDown.videoCover &&
            dataDetails.usProductVideoDown.videoUrl
          "
        >
          <img
            :src="`${ossPrefix}${dataDetails.usProductVideoDown.videoCover}`"
            class="pro-part2-cover"
          />
          <img
              :src="require(`@/assets/images/icon/web_icon_play@2x.png`)"
            class="pro-video-play"
            @click="
              playVideo(
                `${ossPrefix}${dataDetails.usProductVideoDown.videoUrl}`
              )
            "
          />
        </div>
      </div>
    </div>
    <el-dialog
      title="View case"
      :visible.sync="caseDialog"
      width="1400px"
      :close-on-click-modal="true"
      center
    >
      <div class="dialog-main">
        <div class="dialog-left">
          <el-carousel
            class="dialog_carousel"
            arrow="never"
            :interval="1500"
            v-if="currentCase.imgList.length > 0"
          >
            <el-carousel-item
              v-for="(item, index) in currentCase.imgList"
              :key="index"
              class="swiper-item"
            >
              <img :src="`${ossPrefix}${item}`" class="swiper-pic" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="dialog-right">
          <div class="case-title">{{ currentCase.name }}</div>
          <div class="case-text">{{ currentCase.synopsis }}</div>
        </div>
        <div class="navigation">
          <img
              :src="require(`@/assets/images/icon/left.png`)"
            @click="preCase()"
          />
          <img
              :src="require(`@/assets/images/icon/right.png`)"
            @click="nextCase()"
          />
        </div>
      </div>

      <div class="current">Sheet {{ caseIndex + 1 }}/{{ caseList.length }}</div>
    </el-dialog>
    <el-dialog
      width="650px"
      :visible.sync="imgModal"
      destroy-on-close
      close-on-press-escape
      lock-scroll
      center
      top="120px"
    >
      <img :src="imgSrc" style="width: 600px" />
    </el-dialog>
    <VideoModal ref="videoModal" :src="videoSrc" />
  </div>
</template>
<script>
import {
  usProductDetailsV1,
} from "@/api/home.js";
import VideoModal from "@/components/VideoModal.vue";
import "@/assets/css/proDetails.css";
export default {
  name: "ProDetails",
  components: { VideoModal },
  data() {
    return {
      text: "He said that the company was working with state authorities, including the Dairy Association of China and the Office of Food Safety, to test product samplesHe said that the company was working with state authorities, including the Dairy Association of China and the Office of Food Safety,<br/> to test product samplesHe said that the company",
      ossPrefix: "https://blhc806.oss-cn-hangzhou.aliyuncs.com/wmUsImg/",
      productId: "",
      videoSrc: "",
      dataDetails: {
        usProductSpecsList: [],
        usProductVideoUp: "",
        usProductVideoDown: "",
        usProductCaseList: [],
        usProductImageList: [],
        usProductPictureList: [],
        usProductSettingList: [],
        usProductSizeSettingList: [],
        usProductDetailsImageList: [],
        usProductSpecImageList: [],
      },
      ipAddress: "",
      p6Choose: 0,
      caseList: [],
      caseIndex: 0,
      caseDialog: false,
      imgSrc: "",
      imgModal: false,
    };
  },
  computed: {
    currentCase() {
      if (this.caseList.length > 0) {
        return this.caseList[this.caseIndex];
      } else {
        return {
          name: "",
          synopsis: "",
          imgList: [],
        };
      }
    },
    isFirstImage() {
      return this.caseIndex === 0;
    },
    isLastImage() {
      return this.caseIndex === this.caseList.length - 1;
    },
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("beforeRoute", to, from, next);
    this.productId = to.query.productId;
    this.p6Choose = 0;
    this.getDetails(this.productId);
    next();
  },
  activated() {
    this.getIpInfo();
    this.p6Choose = 0;
    this.productId = this.$route.query.productId;
    this.getDetails(this.productId);
  },
  methods: {
    handleImage(src) {
      this.imgModal = true;
      this.imgSrc = `${this.ossPrefix}${src}`;
    },
    lookCase(index) {
      this.caseIndex = index;
      this.caseDialog = true;
    },
    preCase() {
      if (!this.isFirstImage) {
        this.caseIndex--;
      } else {
        this.caseIndex = this.caseList.length - 1;
      }
    },
    nextCase() {
      if (!this.isLastImage) {
        this.caseIndex++;
      } else {
        this.caseIndex = 0;
      }
    },
    getIpInfo() {

    },

    getDetails(id) {
      // console.log("getDetails", id);
      usProductDetailsV1(id).then((res) => {
        // console.log(res);
        if (res.code == 1) {
          this.dataDetails = res.data.dataDetails;
          this.caseList = res.data.dataDetails.usProductCaseList;
        } else {
          this.dataDetails = {
            usProductSpecsList: [],
            usProductVideoUp: "",
            usProductVideoDown: "",
            usProductCaseList: [],
            usProductImageList: [],
            usProductPictureList: [],
            usProductSettingList: [],
            usProductSizeSettingList: [],
            usProductDetailsImageList: [],
            usProductSpecImageList: [],
          };
          this.caseList = [];
          this.$message.error(res.message);
        }
      });
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
