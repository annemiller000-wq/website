// 底部1联系我们
<template>
  <div class="main">
    <div class="top">CONTACT US</div>
    <div class="contcat-part">
      <div class="contcat-text">
        Our offices are open Monday to Friday 9am-5pm (except Bank Holidays)
      </div>
      <div class="contcat-text">
        Call our friendly knowledgeable sales support team now on
        0086-13651132076
      </div>
      <div class="contcat-text">
        Esing Printing online portal is available to use 24 hours a day, 7 days a
        week.
      </div>
      <div class="contcat-text">You can also email us at esingprinting@hotmail.com.</div>
      <div class="contcat-text">
        Should you wish to write to us, please address your letter to Esing Printing,
        No. 2, Huatian Road, Huayuan Industrial Park, Binhai High Tech District, Tianjin, China.
      </div>
      <div class="contcat-title">Online consultation</div>
<!--      <el-button class="contcat-btn" @click="onContcat()"-->
<!--        >CONTCAT FORM</el-button-->
<!--      >-->
<!--      <div class="contcat-title">Send us your enquiry</div>-->
<!--      <div class="contcat-form">-->
<!--        <el-form ref="form" :model="form">-->
<!--          <el-form-item>-->
<!--            <el-input-->
<!--              clearable-->
<!--              type="text"-->
<!--              v-model="form.name"-->
<!--              placeholder="Name"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-input-->
<!--              clearable-->
<!--              type="text"-->
<!--              v-model="form.sourceMailbox"-->
<!--              placeholder="Email"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-input-->
<!--              clearable-->
<!--              :autosize="{ minRows: 3 }"-->
<!--              resize="none"-->
<!--              type="textarea"-->
<!--              v-model="form.content"-->
<!--              placeholder="Enquiry"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button class="submit-btn" @click="onSubmit">Submit</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </div>-->
    </div>
    <div class="part1">
      <div class="part1-item">
        <div class="part1-text">Call Esing Printing Home</div>
        <div class="part1-phone">TEL：+86 13651132076</div>
        <div class="part1-phone">E-mail：esingprinting@hotmail.com</div>
        <div class="part1-text">Mon - Fri 9am - 5pm</div>
      </div>
      <div class="part1-item">
        <div class="part1-text">Contact Esing Printing Home</div>
        <div class="part1-text">Leave a message and we will be in touch</div>
        <div class="part1-btn">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        sourceMailbox: "",
        content: "",
      },
    };
  },
  activated() {
    // console.log("activated");
    this.$nextTick(() => {
      this.form = {
        name: "",
        sourceMailbox: "",
        content: "",
      };
    });

  },
  methods: {
    onContcat() {
      this.$store.commit("showIframe", true);
    },

    onSubmit() {

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
  height: 160px;
  font-weight: bold;
  font-size: 34px;
  color: #fff;
  background-image: url("../assets/images/backdrop/os_bg_con@2x.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contcat-part {
  width: 1110px;
  margin: 63px auto 0;
}
.contcat-text {
  font-size: 16px;
  color: #293744;
  margin-bottom: 16px;
}
.contcat-title {
  font-size: 20px;
  color: #293744;
  margin: 41px 0 20px;
}
.contcat-form {
  width: 540px;
}

/* 覆盖默认的el-button颜色 */
.el-button {
  width: 540px !important;
  height: 40px !important;
  color: #262626;
  background-color: #fff; /* 设置按钮的默认颜色 */
  border-color: #cccccc; /* 设置边框颜色 */
}

/* 鼠标悬停时的颜色 */
.el-button:hover {
  color: #fff;
  background-color: #caa68a; /* 设置按钮的默认颜色 */
  border-color: #caa68a; /* 设置边框颜色 */
}
.contcat-form >>> .el-input__inner {
  background-color: #eff2f5;
  color: #293744;
}
.contcat-form >>> .el-textarea__inner {
  background-color: #eff2f5;
  color: #293744;
}
.contcat-form >>> .el-input__inner:focus {
  border-color: #999999; /* 边框 */
}
.contcat-form >>> .el-textarea__inner:focus {
  border-color: #999999; /* 边框 */
}

.part1 {
  width: 1920px;
  height: 210px;
  background-image: url("../assets/images/backdrop/home_bg1.png");
  background-size: cover;
  padding: 30px 512px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.part1-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.part1-text {
  font-size: 16px;
  font-weight: 300;
  color: #fff;
}
.part1-phone {
  font-size: 34px;
  font-weight: bold;
  color: #fff;
}
.part1-btn {
  display: inline-block;
  padding: 16px 68px;
  border: 0px solid #fff;
  font-size: 16px;
  color: #fff;
  margin: 0 0 0 18px;
  cursor: pointer;
}
</style>
