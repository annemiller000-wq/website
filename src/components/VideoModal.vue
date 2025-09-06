<template>
  <div class="video-modal" v-if="showModal">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <video
        v-if="src"
        ref="videoPlayerForCom"
        :autoplay="autoplay"
        controls
        class="videoForCom"
      >
        <source :src="src" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoModal",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      videoPlayerForCom: null,
      autoplay: false,
    };
  },
  mounted() {
    this.videoPlayerForCom = this.$refs.videoPlayerForCom;
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.autoplay = true;
      this.playVideo();
    },
    closeModal() {
      this.showModal = false;
      this.autoplay = false;
      this.pauseVideo();
    },
    playVideo() {
      if (this.videoPlayerForCom) {
        this.videoPlayerForCom.play();
      }
    },
    pauseVideo() {
      if (this.videoPlayerForCom) {
        this.videoPlayerForCom.pause();
      }
    },
  },
};
</script>

<style scoped>
.video-modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background-color: #fefefe;
  margin: 120px auto 0;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  position: relative;
}
.videoForCom {
  width: 100%;
}
.close-button {
  color: #aaa;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  right: 30px;
  top: 10px;
  z-index: 9;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
