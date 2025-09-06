// 菜单8我们的故事
<template>
  <div class="main">
    <div class="top">
    </div>
    <div class="content">
      <div class="content-top">
        <div class="content-liney"></div>
        <div class="content-title">Our service</div>
      </div>
      <div class="content-text">
        Esing Printing is a one-step company with 23 years history,offering a wide range of creative products about printing.   In the one hand,relying on advanced German Heidelberg equipments,skillful production workers and professional sales team,we provide premium products & excellent services for customers.   In the other hand,with strong printing background oaround 23 years production and exportation,we can perfectly meet customers' demands in every aspects such as product developing,designing,manufacturing,packing,inspection and transportation.  After you placed order,your goods will be safty delivery to your doorstep no need you clear customs and pay tax.
      </div>
    </div>
    <div class="store-item store-bgc1">
      <img
        class="store-img-part"
        :src="require(`@/assets/images/space005/sto_bg_pos@2x.png`)"
       alt=""/>
      <div class="store-text-part">
        <div class="content-top">
          <div class="content-liney"></div>
          <div class="content-title">Customized solutions</div>
        </div>
        <div class="content-text">
          We offer tailored printingsolutions to meet your specific needs, ensuring that your notebooks and journals perfectly align with your brand and vision.
        </div>

      </div>
    </div>
    <div class="store-item store-bgc2">
      <div class="store-text-part">
        <div class="content-top">
          <div class="content-liney"></div>
          <div class="content-title">Advanced Technology</div>
        </div>
        <div class="content-text">
          Our factory is equippedwith state-of-the-art Heidelberg printing pressesguaranteeing high-quality products with sharp images and vibrant colors.
        </div>
      </div>
      <img
        class="store-img-part"
        :src="require(`@/assets/images/space005/sto_bg_loc@2x.png`)"
       alt=""/>
    </div>
  </div>
</template>
<script>

export default {
  name: "OurStory",
  data() {
    return{}
  },
  activated() {

  },
  methods: {


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
  height: 680px;
  margin: 0 0 58px;
  background-image: url("../assets/images/space005/hl_bg_tra@2x.png");
  background-size: cover;
  position: relative;
}
.top-title {
  font-weight: bold;
  font-size: 34px;
  color: #fff;
  position: absolute;
  top: 124px;
  left: 405px;
}
.top-text {
  width: 1100px;
  font-size: 16px;
  color: #fff;
  position: absolute;
  top: 182px;
  left: 405px;
}
.content {
  width: 1110px;
  margin: 52px auto 26px;
}
.content-copy {
  width: 1920px;
  padding: 41px 405px;
  box-sizing: border-box;
}
.pro-content-imgs {
  display: flex;
}
.pro-content-img {
  width: 128px;
  height: 64px;
  margin-right: 18px;
}
.content-liney {
  width: 1px;
  height: 60px;
  background-color: #293744;
}

.content-top {
  display: flex;
  align-items: flex-end;
  margin-bottom: 38px;
}
.content-title {
  font-size: 34px;
  font-weight: bold;
  color: #262626;
  margin-left: 16px;
}
.content-text {
  font-size: 16px;
  font-weight: 400;
  color: #262626;
  margin-bottom: 57px;
}
.content-our {
  width: 100%;
  height: 226px;
  position: relative;
  background-image: url("../assets/images/backdrop/sto_bg_samp@2x.png");
  background-size: cover;
}
.pdf-btn {
  display: inline-block;
  padding: 16px 68px;
  border: 1px solid #fff;
  font-size: 16px;
  color: #fff;
  margin: 0 0 0 18px;
  cursor: pointer;
  position: absolute;
  top: 89px;
  left: 87px;
}
.pdf-btn:hover {
  background-color: #5f6467;
  color: #fff;
  border: 1px solid #5f6467;
}
.store-item {
  width: 1920px;
  padding: 52px 405px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.store-bgc1 {
  background-color: #f5f5f5;
}
.store-bgc2 {
  background-color: #fff;
}
.store-img-part {
  width: 445px;
  height: 445px;
}
.store-text-part {
  width: calc(100% - 476px);
}
.content-icons {
  display: flex;
  margin-top: -20px;
}
.content-icon {
  width: 128px;
  height: 64px;
  margin-right: 18px;
}
</style>
