<template>
  <Popup ref="popupRef" @touch-mask="close">
    <div class="wish-card">
      <div :class="['img-card', { leave: leave }]">
        <img src="@/assets/clearance.png" />
      </div>

      <Vue3Lottie :class="['fire', { top: playing }]" :animationData="effect" :loop="false" @onComplete="playing = false" />
    </div>
  </Popup>
  <div class="lazy-image"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Popup from '@/components/Popup.vue'
import effect from '@/assets/fireworks.json'

const popupRef = ref<{ open: () => void; closeDialog: () => void } | null>()
const leave = ref(false)
const playing = ref(false)

const close = () => {
  leave.value = true
  popupRef.value?.closeDialog()

  setTimeout(() => {
    leave.value = false
  }, 1000)
}

const open = () => {
  playing.value = true
  return popupRef.value?.open()
}

defineExpose({
  open: open
})
</script>

<style lang="less">
.wish-card {
  width: 78%;
  margin: 0 auto;

  .fire {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    pointer-events: none;

    &.top {
      z-index: 1001;
    }
  }

  img {
    width: 100%;
  }
  .img-card {
    width: 100%;
    transition: all 0.1s;
    animation: flip-in-ver-right 1.2s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
    transform: rotateY(-225deg) scale(0.02);
    position: relative;
    font-size: 0;
    line-height: 0;
    border-radius: 2%;
    overflow: hidden;
    border-radius: 16px;
    font-size: 0;
    padding: 0;
    line-height: 0;
    position: relative;
    margin-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #f3d192;
      border-radius: 16px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      pointer-events: none;
    }

    &.leave {
      animation: img-leave 1.2s ease-in-out both !important;
    }
  }

  .entry {
    display: block;
    transition: all 0.1s;
    animation: show-entry-scale 1s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
    animation-delay: 1s;

    &.leave {
      animation: img-leave 1.2s ease-in-out both !important;
    }
  }
}

.lazy-image {
  background-image: url('../../../../assets/clearance.png');
}
</style>
