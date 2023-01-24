<template>
  <Background></Background>
  <div id="container">
    <div class="back">
      <a href="javascript:;" class="go-back" @click="backHome">
        <img src="@/assets/back.png" alt="back" />
      </a>
    </div>

    <div class="wish-wall mode-1">
      <div class="item-list">
        <div class="wish-item" v-for="item in wrapList" :key="item.id" :style="{ top: item.top, left: item.left, transform: 'scale(' + item.scale + ')' }">
          <div :class="['wish-box', { rotate: item.rotate }]" @click="handleClickWish(item.id)">
            <div class="wish-move" :style="{ animationDelay: item.delay, animationDuration: item.duration }">
              <a class="wish-detail" href="javascript:;">
                <div class="name">{{ item.name }}</div>
                <div class="percent">{{ item.percent }}%</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <label for="barrage" class="barrage-checkbox">
        <div class="checkbox">
          <input type="checkbox" id="barrage" v-model="showBarrage" />
          <span class="check"></span>
        </div>
        <span>显示弹幕</span>
      </label>

      <div class="send-wish">
        <div class="wish-input">
          <input type="text" placeholder="有别的祝福或发点其他？" v-model="content" />
        </div>

        <a href="javascript:;" :disabled="isSubmit" class="send-btn" @click="handleSubmit"> 发送 </a>
      </div>
    </div>

    <!-- 弹幕 -->
    <VBarrage style="margin-top: 10%" :percent="75" :arr="barrageList" :isPause="false"></VBarrage>

    <!-- 新年卡片 -->
    <WishCard ref="wishCardRef"></WishCard>

    <!-- 通关 -->
    <Clearance ref="clearanceRef"></Clearance>

    <!-- 成就 -->
    <Achievement ref="achievementRef" module="wish"></Achievement>
  </div>
</template>

<script setup lang="ts" name="wish">
import { barrage, sendWish, wishList, wishVote } from '@/api/wish'
import { computed, ref } from 'vue'
import VBarrage from '@/components/VBarrage.vue'
import Background from '@/components/Background.vue'
import WishCard from './components/WishCard'
import Clearance from './components/Clearance'
import { goBack, randomNum } from '@/utils'
import Achievement from '@/components/Achievement'

const list = ref<any[]>([])
const showBarrage = ref(true)
const arr = ref<any[]>([])
const wishCardRef = ref<{ open: (titleId: string) => void } | null>()
const clearanceRef = ref<{ open: voidFn } | null>()
const content = ref<string>('')
const isSubmit = ref<Boolean>(false)
const achievementRef = ref<{ get: voidFn; stopTimeout: voidFn } | null>()
const initPage = ref(false)

const initData = async () => {
  const res = await wishList()
  list.value = res.data

  initPage.value = true

  barrage().then(res => {
    let list: { content: string; addTime: string }[] = res.data || []
    arr.value = list.map(item => {
      return {
        content: item.content,
        direction: 'default'
      }
    })
  })
}

const getRowCount = (count: number, row: number) => {
  let res = []
  let hasOne = false
  for (let i = row; i > 0; i--) {
    if (count > 0) {
      // 每次只允许出现一次1，这样能保证图形尽量丰满
      let num = i > 0 ? randomNum(hasOne ? 2 : 1, Math.min(3, Math.ceil(count / i))) : count

      if (count < num) {
        num = count
      }

      if (!hasOne && num == 1) {
        hasOne = true
      }
      res.push(num)
      count -= num
    }
  }
  count && res.push(count)
  return res
}

const getRowConfig = (rowCount: number, index: number): Record<string, string | number | boolean>[] => {
  const getBase = () => {
    return {
      delay: randomNum(-3, 3) + 's',
      duration: randomNum(6, 10) + 's',
      top: index * rowTop + randomNum(-250, 180) / 100 + index * 2.5 + '%',
      rotate: Math.random() > 0.8
    }
  }
  switch (rowCount) {
    case 1:
      return [{ ...getBase(), left: randomNum(5, 65) + '%', scale: randomNum(85, 115) / 100 }]
    case 2:
      let leftFirst = randomNum(5, 25)
      return [
        { ...getBase(), left: leftFirst + '%', scale: randomNum(75, 110) / 100 },
        { ...getBase(), left: randomNum(leftFirst + 33, 65) + '%', scale: randomNum(75, 110) / 100 }
      ]
    //
    case 3:
    default:
      let left_1 = randomNum(0, 3)
      let left_2 = randomNum(left_1 + 35, 38)
      return [
        { ...getBase(), left: left_1 + '%', scale: randomNum(70, 90) / 100 },
        { ...getBase(), left: left_2 + '%', scale: randomNum(70, 100) / 100 },
        { ...getBase(), left: randomNum(left_2 + 32, 69) + '%', scale: randomNum(70, 86) / 100 }
      ]
  }
}

// 提前生成好配置，不用变化
const count = 15
// 一共15个，一行里面中大概占据 1-2个，取中间数2。那大概就是 count/2 行
let row = getRowCount(count, Math.floor(count / 2))
// 这里因为每一个往上面预留了位置，所以整体高度限制一下
let rowTop = 90 / Math.ceil(count / 2)

let rowConfig: any[] = []
row.forEach((item, index) => {
  // 根据行数，获取每一行随机的配置
  let config = getRowConfig(item, index)

  config.forEach(configItem => {
    rowConfig.push({
      ...configItem
    })
  })
})

const wrapList = computed(() => {
  return list.value.map((item, index) => {
    return { ...item, ...rowConfig[index] }
  })
})

const barrageList = computed(() => {
  if (showBarrage.value) {
    return [...arr.value]
  }
  return []
})

initData()

const handleClickWish = (id: string) => {
  wishVote(id).then(res => {
    list.value = res.data.list
  })
  wishCardRef.value?.open(id)
  achievementRef.value?.get()
}

const handleSubmit = async () => {
  if (isSubmit.value) {
    return false
  }
  if (!content.value) {
    window.Qmsg.warning('先写点东西吧')
    return false
  }

  isSubmit.value = true

  const res = await sendWish(content.value)
  isSubmit.value = false
  const _content = content.value
  content.value = ''

  if (!(res as any).data.clearance) {
    window.Qmsg.success((res as any).msg)
    arr.value.push({
      content: _content,
      direction: 'default'
    })

    achievementRef.value?.get()
  } else {
    clearanceRef.value?.open()
  }
}

const backHome = () => {
  goBack()
}
</script>

<style lang="less">
@import '../../assets/base.less';

@font-face {
  font-family: AaHouDiHei-Wish;
  src: url('../../assets/AaHouDiHei-Wish.ttf');
}

.go-back {
  position: fixed;
  left: 12px;
  top: 12px;
  padding: 10px;
  z-index: 100;

  img {
    width: 32px;
  }
}

.wish-wall {
  font-family: AaHouDiHei-Wish;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 66px;
  padding-bottom: 120px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: auto;
}

.item-list {
  width: 100%;
  height: 100%;
  position: relative;
}

.wish-item {
  position: absolute;
  height: 0;
  padding-bottom: 20%;
}

.wish-box {
  position: absolute;
  height: 100%;
  &.rotate {
    transform: rotateY(180deg);
    .wish-detail {
      transform: rotateY(180deg);
    }
  }
}

.wish-move {
  background-image: url('../../assets/wish/img_bg_dialog.svg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  animation: move 1s ease-in-out both;
  animation-iteration-count: infinite;
}

.wish-detail {
  // position: absolute;
  // top: 0;
  // left: 0;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 10px 10px 12px 10px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  position: relative;
  font-size: 24px;
  color: #000000;

  .name {
    flex: 1;
    line-height: 1.2;
    white-space: nowrap;
  }

  .percent {
    color: #da4d1e;
    font-size: 14px;
    font-weight: bold;
  }

  img {
    width: 94%;
  }
}

.footer {
  padding: 20px 34px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: left;
}

.barrage-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid #da4d1e;
    border-radius: 4px;
    outline: none;
    background-color: transparent;
    position: relative;
    margin-right: 6px;
    color: #38332c;
    font-size: 12px;

    input[type='checkbox'] {
      visibility: hidden;

      &:checked + .check {
        display: block;
      }
    }

    .check {
      width: 10px;
      height: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #da4d1e;
      border-radius: 2px;
      display: block;
      display: none;
    }
  }
}

.send-wish {
  width: 100%;
  display: flex;
}

.wish-input {
  flex: 1;
  margin-right: 12px;

  height: 44px;

  background: #f4d2c5;
  // border: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 4px 16px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
}

.send-btn {
  height: 44px;
  width: 80px;
  border-radius: 8px;
  border: none;
  background-color: #da4d1e;
  font-size: 14px;
  color: #ffffff;
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 44px;
}

@keyframes move {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(5%) scale(1.02);
  }
  50% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-5%) scale(0.98);
  }
  0% {
    transform: translateY(0%);
  }
}
</style>
