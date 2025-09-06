// 菜单5画廊
<template>
  <div class="main">
    <div class="top">
      <div class="top-title">Our team</div>
      <div class="top-text">
        The ALY HOME family is very diverse, including buyers, marketers, and
        customer service personnel. Behind the scenes, we have a team of 200
        highly skilled experts, including carpenters and mechanics. We focus on
        support, training, and personal development to ensure that all employees
        are important experts in their respective fields.
      </div>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="content-liney"></div>
        <div class="content-title">Our Production</div>
      </div>
      <div class="content-text">
        Our home consists of some large facilities, covering an area of 70000
        square feet, located in Ningbo, China. Here, we manufacture and send all
        orders. We love our production factory, coupled with stylish and modern
        workspaces and the latest technology. Our ability to have more inventory
        and a large internal team have also facilitated our business compared to
        our competitors.
      </div>
      <div class="content-img-list">
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_pro@2x.png`)"
            class="content-img"
          />
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_pro2@2x.png`)"
            class="content-img"
          />
        </div>
      </div>
      <!--  -->
      <div class="content-top">
        <div class="content-liney"></div>
        <div class="content-title">Our Products</div>
      </div>
      <div class="content-text">
        We offer a comprehensive range of indoor furniture, tailored to the
        specific needs of Ningbo, China. This includes Venetian blinds, vertical
        blinds, roller blinds, and roof blinds, as well as our luxurious hand
        sewn Roman blinds and curtains. Our wooden blinds are also particularly
        popular, made of the highest quality solid wood and delivered within 4-5
        business days - faster than any competitor.
      </div>
      <div class="content-img-list">
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_hon@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color1">Honeycomb Blinds</div>
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_ven@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color2">Honeycomb Blinds</div>
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_zeb@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color2">Honeycomb Blinds</div>
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_rol@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color1">Honeycomb Blinds</div>
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_rom@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color1">Honeycomb Blinds</div>
        </div>
        <div class="content-item">
          <img
            :src="require(`@/assets/images/space007/tra_bg_dre@2x.png`)"
            class="content-img"
          />
          <div class="content-img-text content-color2">Honeycomb Blinds</div>
        </div>
      </div>
    </div>
    <div class="fot1">
      <div class="content-top">
        <div class="content-liney bg-white"></div>
        <div class="content-title t-white">Our Services</div>
      </div>
      <div class="content-text t-white">
        Quality customer service is of paramount importance to us. Our online
        portal makes ordering as simple as possible, while our customer service
        specialists are always on hand to help. Our samples department also
        plays a key role, offering customers a fast, free sampling service.
        Finally, we only partner with trusted couriers, ensuring your products
        are delivered safely and efficiently.
      </div>
      <div class="content-icons">
        <img
          :src="require(`@/assets/images/space005/form@2x.png`)"
          class="content-icon"
        />
        <img
            :src="require(`@/assets/images/space005/single@2x.png`)"
          class="content-icon"
        />
        <img
            :src="require(`@/assets/images/space005/fast@2x.png`)"
          class="content-icon"
        />
        <img
            :src="require(`@/assets/images/space005/year@2x.png`)"
          class="content-icon"
        />
      </div>
    </div>
    <div class="fot2">
      <div class="content-top">
        <div class="content-liney"></div>
        <div class="content-title">Our Responsibility</div>
      </div>
      <div class="content-text">
        ALY HOME is an independent company that cares. Our wooden blinds are
        made from 100% real wood, harvested from forests that are responsibly
        managed for sustainability. We are also dedicated to practising
        environmentally-friendly manufacturing techniques, as well as recycling,
        reusing and donating where possible.
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Gellery",
  data() {

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
  background-image: url(../assets/images/space005/hl_bg_tra@2x.png);
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
  margin: 64px auto;
}
.content-liney {
  width: 1px;
  height: 60px;
  background-color: #293744;
}
.content-linex {
  width: 1110px;
  height: 2px;
  background-color: #cccccc;
  margin-top: 41px;
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
.content-img-list {
  width: 1056px;
  display: flex;
  flex-wrap: wrap;
  margin: 66px auto 0;
}

.content-item {
  width: 500px;
  height: 670px;
  position: relative;
  margin: 0 56px 73px 0;
}
.content-img-list :nth-child(2n) {
  margin-right: 0;
}
.content-img {
  width: 500px;
  height: 670px;
  position: absolute;
  top: 0;
  left: 0;
}
.content-img-text {
  font-size: 34px;
  font-weight: bold;
  position: absolute;
  left: 30px;
  bottom: 32px;
}
.content-color1 {
  color: #293744;
}
.content-color2 {
  color: #ffffff;
}
.fot1 {
  width: 1920px;
  height: 350px;
  padding: 41px 405px 36px;
  box-sizing: border-box;
  background-color: #caa68a;
}
.bg-white {
  background-color: #fff;
}
.t-white {
  color: #fff;
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
.fot2 {
  width: 1920px;
  height: 286px;
  padding: 41px 405px 16px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
