<template>
  <Background></Background>
  <div id="container">
    <div class="title">
      <img src="@/assets/title.png" />
    </div>

    <div v-if="!init" class="grid-loading">
      <Vue3Lottie :animationData="loadingjson" @onComplete="initPag = true" :height="200" :loop="false" :width="200" />
    </div>

    <div class="grid-wrap" v-if="init">
      <div :class="['text-grid', { puzzle: showPuzzle }]">
        <div class="grid-item" v-for="(item, index) in list" :key="index">
          <div :class="['card-tea', 'level-' + item.level, { padding_4: item.name.length === 4 && item.name !== 'CoCo' }]" @click="clickItem(item)">{{ item.name }}</div>
          <div class="card-main">
            <img :src="imgMap[puzzle[index]]" :alt="puzzle[index] + ''" />
          </div>
        </div>
      </div>
    </div>

    <div :class="['grid-footer', { init: init }, { leave: !showPuzzle }, { entry: showPuzzle }]">
      <a class="back-button" href="javascript:;" @click="showPuzzle = false">返回投票</a>
      <p class="footer-tips">在合适的地方输入答案吧</p>
    </div>

    <div class="footer">
      <div :class="['footer-wrap', { leave: showPuzzle }, { entry: !showPuzzle }]">
        <img src="@/assets/footer.png" style="display: block" />
        <div class="footer-text">
          By Bluepikachu & Jioho ·
          <div class="footer-text" style="display: inline" @click="openContact">Contact Us</div>
        </div>

        <a href="javascript:;" class="footer-more footer-text" @click="openOneMore">
          <span>One More Thing</span>
          <img class="arrow-right" src="./assets/arrow-right.png" />
        </a>
      </div>
    </div>
  </div>
  <WishCard ref="wishCardRef" :showFire="true"></WishCard>
  <Challenge ref="challengeRef" @openPuzzle="handleOpenPuzzle"></Challenge>
  <Contact ref="contactRef" @openPuzzle="handleOpenPuzzle"></Contact>

  <Achievement v-if="init" ref="achievementRef" module="list"></Achievement>

  <div class="lazy-image"></div>
</template>

<script script lang="ts" setup>
import { oneMoreVisit, puzzleVisit, teaList, teaVote, contactVisit } from '@/api/tea'
import loadingjson from '@/assets/loading.json'
import { computed, onMounted, ref } from 'vue'
import Challenge from './components/Challenge'
import Contact from './components/Contact'
import WishCard from './components/WishCard'
import Background from '@/components/Background.vue'
import Achievement from '@/components/Achievement'
import { Vue3Lottie } from 'vue3-lottie'
import { getAssetsUrl } from '@/utils'

const initPag = ref(false)
const showPuzzle = ref(false)
const list = ref<any[]>([])
const wishCardRef = ref<{ open: (props: any) => void; leave: Boolean } | null>()
const challengeRef = ref<{ open: voidFn } | null>()
const contactRef = ref<{ open: voidFn } | null>()
const achievementRef = ref<{ get: voidFn; stopTimeout: voidFn } | null>()

const imgMap = ref<{ [key: number]: string }>({
  1: getAssetsUrl('puzzle/1.png'),
  2: getAssetsUrl('puzzle/2.png'),
  3: getAssetsUrl('puzzle/3.png'),
  4: getAssetsUrl('puzzle/4.png'),
  0: getAssetsUrl('puzzle/union.png')
})

const puzzle = ref([
  /** line */ 0, 1, 1, 1, 1, 1, /** line */ 0, 1, 0, 1, 0, 1, /** line */ 2, 1, 2, 1, 2, 1, /** line */ 0, 4, 4, 4, 4, 4, /** line */ 3, 3, 3, 0, 3, 0, /** line */ 3, 4, 3, 3, 3, 0
])

const init = computed(() => {
  return initPag.value && list.value.length > 0
})

onMounted(() => {
  teaList().then(res => {
    list.value = res.data || []
  })
})

/**
 * 记录页面开始操作
 */
const handleEvent = () => {
  achievementRef.value?.stopTimeout()
}

const clickItem = async (item: any) => {
  handleEvent()
  if (!wishCardRef.value?.leave) {
    const res = await teaVote(item.id)
    wishCardRef.value?.open(res.data.wish)
    if (res.data.list) {
      list.value = res.data.list
    }
    achievementRef.value?.get()
    handleEvent()
  }
}

const openOneMore = () => {
  challengeRef.value?.open()
  oneMoreVisit()
  handleEvent()
}

const openContact = () => {
  contactRef.value?.open()
  contactVisit()
  handleEvent()
}

const handleOpenPuzzle = () => {
  showPuzzle.value = true
  puzzleVisit()
  handleEvent()
}
</script>

<style lang="less">
@import '../../assets/base.less';

#container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .leave {
    animation: show-leave 0.8s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
  }

  .entry {
    animation: show-entry 1s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
  }
}

.grid-loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vw;
  max-height: 400px;
  color: #ae6743;
  line-height: 20px;
  flex: 1;
  font-size: 16px;
}

.grid-loading .icon {
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  background-image: url('/src/modules/index/assets/grid-loading.svg');
  background-repeat: no-repeat;
  background-size: 100%;
}

.grid-wrap {
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  animation: emerge 0.3s ease-in-out both;
  transition: all 0.1s;
  opacity: 0;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
  width: 100%;

  &.puzzle {
    .card-tea {
      transform: rotateY(-180deg);
      -webkit-transform: rotateY(-180deg);
    }

    .card-main {
      transform: rotateY(-360deg) !important;
      -webkit-transform: rotateY(-360deg) !important;
    }
  }
}

.text-grid .grid-item {
  padding: 3px;
  /* height: 100%; */
  min-width: 16.66%;
  max-width: 16.66%;
  padding-bottom: 16%;
  height: 0;
  flex: 1;
  position: relative;
}

.child-delay(@i: 0,@n, @c: 1) when (@i =< @n) {
  &:nth-child(@{i}) div {
    transition-delay: @c * 0.1s;
  }
  .child-delay((@i + 1),@n, @c + 1);
}
.text-grid .grid-item {
  .child-delay(1,6,0);
  .child-delay(7,12,1);
  .child-delay(13,18,2);
  .child-delay(19,24,3);
  .child-delay(25,30,4);
  .child-delay(31,36,5);
}
.text-grid .grid-item div {
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;

  /* padding: 25% 10% 18% 10%; */
  // background-color: #FFE6D9;
  // border: 1px solid rgba(0, 0, 0, 0.05);
  user-select: none;
  line-height: 1.41;
  border-radius: 8px;
  overflow: hidden;

  position: absolute;
  top: 4%;
  left: 4%;
  right: 4%;
  bottom: 4%;
  backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
  transition: all 1.8s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.text-grid .grid-item .card-main {
  background: #ffe6d9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
}

.text-grid .grid-item .card-tea {
  font-size: 12px;
  font-weight: bold;
  color: #38332c;
  padding-left: 8%;
  padding-right: 8%;
  transition-delay: 0.1s;

  &:active {
    background-color: rgba(0, 0, 0, 0.07);
  }
}

.text-grid .grid-item .padding_4 {
  padding: 16% 20% 14% 20%;
}

.level-1 {
  background: #ffe6d9;
}

.level-2 {
  background-color: #ffccbc;
}

.level-3 {
  background-color: #ffb8a9;
}

.level-4 {
  background-color: #feaa97;
}

.level-5 {
  background-color: #fea183;
}

.level-6 {
  background-color: #fe8a70;
}

.level-7 {
  background-color: #fe7a5d;
}

.level-8 {
  background-color: #e14815;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: #fff !important;
  position: relative;

  &::before {
    content: 'HOT';
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    zoom: 0.6;
    padding: 2px 6px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0 0 4px 0;
  }
}

.footer {
  text-align: left;
  margin-top: 100px;
  width: 100%;
}

.grid-footer {
  text-align: center;
  transition: all 0.1s;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  bottom: 2%;

  &.init {
    opacity: 1;
    display: none;
  }

  &.entry {
    display: block;
  }

  .back-button {
    width: 144px;
    height: 44px;
    line-height: 44px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    background-color: #da4d1e;
    display: inline-block;
    border-radius: 8px;
  }

  .footer-tips {
    font-size: 14px;
    margin-top: 18px;
    color: #d8a888;
  }
}

.footer .footer-wrap {
  max-width: 460px;
  margin: 0 auto;
  padding: 0 2em;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10;
  bottom: 30px;
}

.footer-text {
  color: #d8a888;
  font-size: 13px;
  padding-top: 8px;
}

.footer-more {
  display: inline-block;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: calc(100% - 16px);
    height: 2px;
    background: linear-gradient(to right, #da4d1e 25%, #3f6663 25% 50%, #eca336 50% 75%, #c6a990 75% 100%);
  }

  .arrow-right {
    width: 12px;
    object-fit: contain;
    object-position: bottom;
    margin-bottom: -2px;
    margin-left: 4px;
  }
}

img {
  max-width: 460px;
  width: 50%;
}

@keyframes emerge {
  0% {
    transform: translateY(300px);
    opacity: 0.1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes focus-list {
  0% {
    transform: scale(2);
    opacity: 0.2;
  }

  75% {
    transform: scale(0.85);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes flip-in-ver-right {
  0% {
    transform: rotateY(-225deg) scale(0.02);
    z-index: 1;
    opacity: 0.2;
  }

  70% {
    transform: rotateY(0deg) scale(1.05);
    opacity: 0.95;
  }

  100% {
    transform: scale(1);
    z-index: 1000;
    opacity: 1;
  }
}
</style>
