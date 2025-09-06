<template>
  <div v-if="isVisible" class="image-preview-modal">
    <div class="overlay"></div>
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="currentImage" alt="Preview" class="preview-image" mode="" />
      <div class="navigation">
        <img
          :src="require(`@/assets/images/icon/left.png`)"
          @click="prevImage()"
        />
        <img
          :src="require(`@/assets/images/icon/right.png`)"
          @click="nextImage()"
        />
      </div>
      <div class="current">Sheet {{ currentIdx + 1 }}/{{ images.length }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentIdx: this.currentIndex,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIdx];
    },
    isFirstImage() {
      return this.currentIdx === 0;
    },
    isLastImage() {
      return this.currentIdx === this.images.length - 1;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    prevImage() {
      if (!this.isFirstImage) {
        this.currentIdx--;
      } else {
        // this.$message.info("The current one is the first one!");
        this.currentIdx = this.images.length - 1;
      }
    },
    nextImage() {
      if (!this.isLastImage) {
        this.currentIdx++;
      } else {
        // this.$message.info("The current one is the last one!");
        this.currentIdx = 0;
      }
    },
  },
  watch: {
    currentIndex(newIndex) {
      this.currentIdx = newIndex;
    },
  },
};
</script>

<style>
.image-preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal-content {
  width: 1110px;
  height: 700px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  background-color: white;
  padding: 50px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  top: 50px;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: #aaa;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.preview-image {
  width: calc(100% - 160px);
  object-fit: contain;
}

.navigation {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: absolute;
  top: calc(50% - 30px);
  z-index: 9999;
}
.navigation img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.current {
  width: 100%;
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  text-align: center;
}
</style>
