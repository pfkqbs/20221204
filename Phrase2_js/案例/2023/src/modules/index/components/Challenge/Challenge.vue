<template>
  <Popup ref="popupRef" @touchMask="close">
    <div :class="['challenge', { leave: leave }]">
      <img class="main-bg" src="./assets/popup_bg.png" alt="" />

      <div class="content">
        <a class="close" href="javascript:;" @click="close">
          <img src="./assets/close.png" alt="" />
        </a>

        <div class="challenge-detail">
          <img src="./assets/challenge.png" alt="" />

          <a href="javascript:;" @click="openPuzzle" class="detail-entry">
            <img src="./assets/entry.png" alt="去看看" />
          </a>
        </div>
      </div>
    </div>
  </Popup>
  <div class="lazy-image"></div>
</template>

<script setup lang="ts">
import Popup from '@/components/Popup.vue'
import { ref } from 'vue'
const popupRef = ref<{ open: () => void; closeDialog: () => void } | null>()
const emit = defineEmits(['openPuzzle'])

const leave = ref(false)
const close = () => {
  leave.value = true
  popupRef.value?.closeDialog()

  setTimeout(() => {
    leave.value = false
  }, 1000)
}

const openPuzzle = () => {
  close()
  setTimeout(() => {
    emit('openPuzzle')
  }, 200)
}

defineExpose({
  open: () => {
    return popupRef.value?.open()
  }
})
</script>

<style lang="less">
.challenge {
  overflow: hidden;
  position: relative;

  transition: all 0.1s;
  animation: flip-in-ver-right 1.2s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
  transform: rotateY(-225deg) scale(0.02);
  position: relative;
  font-size: 0;
  line-height: 0;
  overflow: hidden;

  width: ~'min(80vw, calc(460px * 0.8))';

  &.leave {
    animation: img-leave 1.2s ease-in-out both !important;
  }

  .content {
    border-radius: 22px;
    position: absolute;
    top: 0px;
    left: 2px;
    right: 3px;
    bottom: 10%;
    z-index: 10;
    overflow: hidden;

    .close {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(29%, -32%);
      display: block;
      width: 200px;
      height: 200px;
      z-index: 10;

      img {
        width: 100%;
      }
    }
  }

  .challenge-detail {
    width: 78%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      pointer-events: none;
    }

    .detail-entry {
      width: 83px;
      position: absolute;
      bottom: -8px;
      right: 0;
      z-index: 1000;
    }
  }

  .main-bg {
    width: 100%;
  }
}

.lazy-image {
  background-image: url('./assets/close.png'), url('./assets/challenge.png'), url('./assets/entry.png'), url('./assets/popup_bg.png');
}
</style>
