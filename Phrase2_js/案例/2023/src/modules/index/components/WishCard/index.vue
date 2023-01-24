<template>
  <Popup ref="popupRef" @touch-mask="close">
    <div class="wish-card">
      <div :class="['img-card', { leave: leave }]">
        <WishPoster qrcordType="luck" :title="title" :background="background"></WishPoster>
      </div>

      <a :class="['entry', { leave: leave }]" :href="getRulePath('wish.html')">
        <img src="./assets/entry.png" alt="去定制" />
      </a>
      <Vue3Lottie :class="['fire', { top: playing }]" :animationData="effect" :loop="false" @onComplete="playing = false" />
    </div>
  </Popup>

  <div class="lazy-image"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Popup from '@/components/Popup.vue'
import WishPoster from '@/components/WishPoster'
import { getAssetsUrl, getRulePath, randomNum } from '@/utils'
import effect from '@/assets/fireworks.json'

const popupRef = ref<{ open: () => void; closeDialog: () => void } | null>()
const leave = ref(false)
const playing = ref(false)
const title = ref('')
const background = ref('')
const wishId = ref<number>(1)

const close = () => {
  leave.value = true
  popupRef.value?.closeDialog()

  setTimeout(() => {
    leave.value = false
  }, 800)
}

const open = (wishData: { id: number }) => {
  wishId.value = wishData.id
  const bgId = randomNum(1, 3)

  background.value = getAssetsUrl(`wish/bg_vote_0${bgId}.png`)
  title.value = getAssetsUrl(`wish/title_${wishData.id}.png`)
  playing.value = true
  return popupRef.value?.open()
}

defineExpose({
  open: open,
  leave
})
</script>

<style lang="less">
.wish-card {
  width: ~'min(78vw, calc(460px * 0.78))';

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
    // box-shadow: 0px 20px 40px 0px rgba(62, 37, 0, 0.2);
    // box-shadow: 0 0 0 1px #f3d192;
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

    // .wish-poster {
    //   box-shadow: 0 0 0 1px #f3d192;
    //   border: 1px solid #f3d192;
    // }

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
      animation: img-leave 0.8s ease-in-out both !important;
    }
  }

  .entry {
    display: block;
    transition: all 0.1s;
    animation: show-entry-scale 1s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
    animation-delay: 0.3s;

    &.leave {
      animation: img-leave 0.8s ease-in-out both !important;
    }
  }
}

.lazy-image {
  background-image: url('../../../../assets/wish/bg_vote_01.png'), url('../../../../assets/wish/bg_vote_02.png'), url('../../../../assets/wish/bg_vote_03.png');
}
</style>
