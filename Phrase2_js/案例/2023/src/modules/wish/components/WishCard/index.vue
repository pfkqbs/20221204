<template>
  <Popup ref="popupRef" @touch-mask="close">
    <div class="wish-card">
      <div :class="['img-card', { leave: leave }]">
        <WishPoster ref="wishPosterRef" qrcordType="join" :title="title" :background="background"></WishPoster>
      </div>

      <a :class="['entry', { leave: leave }]" href="javascript:;">
        <img style="width: 70%" src="@/assets/save-image.png" alt="保存图片" />
      </a>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Popup from '@/components/Popup.vue'
import WishPoster from '@/components/WishPoster'
import { getAssetsUrl, randomNum, saveImage } from '@/utils'

const popupRef = ref<{ open: () => void; closeDialog: () => void } | null>()
const leave = ref(false)
const background = ref('')
const title = ref('')

const wishPosterRef = ref<{ img: string } | null>()

const close = () => {
  leave.value = true
  popupRef.value?.closeDialog()

  setTimeout(() => {
    leave.value = false
  }, 1000)
}

const open = (titleId: string) => {
  const bgId = randomNum(1, 3)
  background.value = getAssetsUrl(`wish/bg_vote_0${bgId}.png`)
  title.value = getAssetsUrl(`wish/title_${titleId}.png`)
  return popupRef.value?.open()
}

const handleSaveImage = () => {
  if (wishPosterRef.value?.img) {
    saveImage(wishPosterRef.value?.img)
  }
}

defineExpose({
  open: open
})
</script>

<style lang="less">
.wish-card {
  width: 78%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  .img-card {
    width: 100%;
    transition: all 0.1s;
    animation: flip-in-ver-right 1.2s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
    transform: rotateY(-225deg) scale(0.02);
    position: relative;
    // box-shadow: 0px 20px 40px 0px rgba(62, 37, 0, 0.2);
    // box-shadow: 0 0 0 1px #f3d192;
    font-size: 0;
    line-height: 0;
    border-radius: 16px;
    overflow: hidden;
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
</style>
