// 菜单4商业
<template>
  <div class="main">
    <div class="top">
      <div class="top-text">COMMERCIAL BLINDS</div>
    </div>
    <div class="content">
      Our purchasing power and Chinese manufacturing make us an ideal partner
      for renovation and decoration projects. Backed by years of industry
      experience, we bring a wide range of benefits to your windows, your space
      and your workforce.
    </div>
    <div class="content">
      We work with a number of businesses and institutions on large-scale
      installations, including offices, hotels, schools, council buildings and
      more. Our capacity and agility enable us to service a variety of sectors,
      delivering on short lead times with high performance products. By
      manufacturing in-house, we remove the middleman and are able to offer a
      wealth of commercial benefits to our clients.
    </div>
    <div class="content">
      Our expert team will help to identify the right product solutions to best
      meet your requirements, then ensure the process runs as smoothly as
      possible. For all commercial projects, we provide a quotation upon
      request.
    </div>
  </div>
</template>
<script>
export default {
  name: "Commercial",
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
  width: 1110px;
  height: 410px;
  margin: 0 auto 58px;
  background-image: url("../assets/images/space007/os_bg_com@2x.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-text {
  width: 560px;
  height: 120px;
  font-weight: bold;
  font-size: 34px;
  color: #fff;
  background-color: #caa68a;
  opacity: 0.9;
  text-align: center;
  line-height: 120px;
}
.content {
  width: 1110px;
  margin: 0 auto 21px;
  font-size: 16px;
  color: #262626;
}
</style>
