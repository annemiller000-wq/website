<template>
  <div class="goods-image">

    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i">
<!--        :key="i" @mouseenter="enterhandler(i)"-->
<!--          :class="{ active: i === activeIndex }">-->
<!--        <h1>{{img.url}}</h1>-->
        <img :src="require(`@/assets/images/product/cover1/details1/2.jpg`)" alt=""/>
      </li>

    </ul>
    <!-- 左侧大图-->
    <div class="middle">
      <img :src="require(`@/assets/images/product/cover1/details1/2.jpg`)" alt="" />

      <!-- 蒙层小滑块 -->
      <div class="layer" v-show="showLayer" :style="{ left: '50px', top: '10px' }"></div>
    </div>
    <!-- 放大镜大图 -->
    <div class="large" :style="{
      backgroundImage: `url('../../assets/images/product/cover1/details1/2.jpg')`,
      backgroundPositionX: `50px`,
      backgroundPositionY: `10px`,
    }" v-show="showLayer"></div>
  </div>
</template>

<script>
export default {
  name: "GoodsImage",
  props: {
    imageList: {
      type: Array,
    }
  },
  data() {
    return {
      activeIndex: 0,
      left: 0,
      top: 0,
      positionX: 0,
      positionY: 0,
      showLayer: false,
      mouseX: 0,
      mouseY: 0,
      isOutside: true
    };
  },
  mounted() {
    // 添加鼠标移动监听
    // this.$refs.target.addEventListener('mousemove', this.handleMouseMove);
    // this.$refs.target.addEventListener('mouseenter', this.handleMouseEnter);
    // this.$refs.target.addEventListener('mouseleave', this.handleMouseLeave);
  },
  beforeDestroy() {
    // 移除事件监听
    // this.$refs.target.removeEventListener('mousemove', this.handleMouseMove);
    // this.$refs.target.removeEventListener('mouseenter', this.handleMouseEnter);
    // this.$refs.target.removeEventListener('mouseleave', this.handleMouseLeave);
  },
  methods: {
    // 小图在大图显示
    enterhandler(i) {
      this.activeIndex = i;
    },

    // 鼠标进入事件
    handleMouseEnter() {
      this.showLayer = true;
      this.isOutside = false;
    },

    // 鼠标离开事件
    handleMouseLeave() {
      this.showLayer = false;
      this.isOutside = true;
    },

    // 鼠标移动事件
    handleMouseMove(e) {
      console.log(e)
      // const rect = e.target.getBoundingClientRect();
      // this.mouseX = e.clientX - rect.left;
      // this.mouseY = e.clientY - rect.top;
      //
      // this.updateZoom();
    },

    // 更新放大镜位置
    updateZoom() {
      if (this.isOutside) return;

      // 横向
      if (this.mouseX > 100 && this.mouseX < 300) {
        this.left = this.mouseX - 100;
      }
      // 纵向
      if (this.mouseY > 100 && this.mouseY < 300) {
        this.top = this.mouseY - 100;
      }
      // 设定边界值
      if (this.mouseX > 300) { this.left = 200; }
      if (this.mouseX < 100) { this.left = 0; }

      if (this.mouseY > 300) { this.top = 200; }
      if (this.mouseY < 100) { this.top = 0; }

      // 控制大图显示
      this.positionX = -this.left * 2;
      this.positionY = -this.top * 2;
    },

    // 显示放大镜
    showZoom() {
      this.showLayer = true;
      this.isOutside = false;
    },

    // 隐藏放大镜
    hideZoom() {
      this.showLayer = false;
      this.isOutside = true;
    }
  }
};
</script>

<style scoped>
.goods-image {
  margin-top: 20px;
  width: 880px;
  height: 800px;
  position: relative;
  display: flex;
}

.middle {
  width: 800px;
  height: 800px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
  border: 1px solid #888;
}

.middle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.large {
  position: absolute;
  top: 0;
  left: 412px;
  width: 400px;
  height: 400px;
  z-index: 500;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  /* 背景图:盒子的大小 = 2:1  控制背景图的移动来实现放大的效果查看 */
  background-size: 800px 800px;
  background-color: #f8f8f8;
}

.layer {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  /* 绝对定位 然后跟随鼠标控制left和top属性就可以让滑块移动起来 */
  left: 0;
  top: 0;
  position: absolute;
  pointer-events: none;
}

.small {
  width: 140px;
  margin-right: 50px;
  list-style: none;
  flex-direction: column;
  border: 1px solid #888;
}



.small li {
  width: 100%;
  height: 100%;
  padding:50px;
  /*cursor: pointer;*/
  /*overflow: hidden;*/
  border: 1px solid #888;
}

.small li img {
  margin-left: -10px;
  width: 75px;
  height: 75px;
  object-fit: cover;
  display: block;
}

/*.small li:hover,*/
/*.small li.active {*/
/*  border: 2px solid #409eff;*/
/*}*/
</style>
