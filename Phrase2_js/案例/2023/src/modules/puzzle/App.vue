<template>
  <div id="container">
    <div class="title">
      <img src="@/assets/title.png" />
    </div>

    <div class="grid-wrap">
      <div class="grid-item" v-for="(first, index) in list" :key="index">
        <div v-for="item in first" :key="index + '_' + item">
          <div class="card-main" @click="addRotate" @mouseover="addRotate">
            <img :src="imgMap[item]" :alt="item + ''" />
          </div>
        </div>
      </div>
      <div class="grid-footer">
        <a class="back-button" href="javascript:;" @click="backHome">返回投票</a>
        <p class="footer-tips">下一步：输入答案吧</p>
      </div>
    </div>
  </div>
</template>

<script script lang="ts" setup>
import { goBack } from '@/utils'
import { ref } from 'vue'
import png_1 from './assets/1.png?inline'
import png_2 from './assets/2.png?inline'
import png_3 from './assets/3.png?inline'
import png_4 from './assets/4.png?inline'
import png_0 from './assets/union.png?inline'

const imgMap = ref<{ [key: number]: string }>({
  1: png_1,
  2: png_2,
  3: png_3,
  4: png_4,
  0: png_0
})

// const list = ref([
//   [3, 3, 0, 2, 0, 0],
//   [4, 3, 4, 1, 1, 1],
//   [3, 3, 4, 2, 0, 1],
//   [3, 0, 4, 1, 1, 1],
//   [3, 3, 4, 2, 0, 1],
//   [0, 0, 4, 1, 1, 1]
// ])
const list = ref([
  [0, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 1],
  [2, 1, 2, 1, 2, 1],
  [0, 4, 4, 4, 4, 4],
  [3, 3, 3, 0, 3, 0],
  [3, 4, 3, 3, 3, 0]
])

const addRotate = (e: Event) => {
  let _target = e.target as HTMLElement
  if (_target.className.indexOf('rotate') === -1) {
    _target.classList.add('rotate')
    setTimeout(() => {
      _target.classList.remove('rotate')
    }, 610)
  }
}

const backHome = () => {
  goBack()
}
</script>

<style lang="less">
@import '../../assets/base.less';

#container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.title {
  width: 100%;
  min-height: 120px;
}

.title img {
  width: 90%;
  height: auto;
  margin: 4vh auto 1vh auto;
}

.grid-wrap {
  width: 100%;
  position: relative;
  animation: emerge 0.3s ease-in-out both;
  transition: all 0.1s;
  opacity: 0;
  padding: 5%;
  flex: 1;

  .grid-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .grid-item > div {
    /* height: 100%; */
    min-width: 16.59%;
    height: 0;
    padding-bottom: 16.59%;
    position: relative;
  }

  .card-main {
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow: hidden;
    background-color: #ffe6d9;
    display: flex;
    align-items: center;
    justify-content: center;

    &.rotate {
      animation: rotate 0.6s ease-in-out both;
      transform-style: preserve-3d;
      transition: all 0.5s;
    }

    img {
      backface-visibility: hidden;
      width: 44%;
    }
  }
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

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

img {
  max-width: 460px;
  width: 50%;
}
</style>
