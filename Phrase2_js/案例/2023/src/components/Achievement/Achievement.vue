<template>
  <Popup ref="popupRef" @touchMask="openNext">
    <div :class="['sticker-box', { change: change }, {'img-leave': leave}]" @click="openNext">
      <img @click.stop :src="sticker.image" class="sticker" :alt="sticker.title" />

      <div class="detail" v-if="sticker.image">
        <div class="desc">你发现了一张贴纸</div>
        <div class="name">{{ sticker.title }}</div>
      </div>
    </div>
  </Popup>

  <div :class="['lazy-image', module]"></div>
</template>

<script setup lang="ts">
import { getTarget } from '@/api/target'
import { getAssetsUrl } from '@/utils'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Popup from '../Popup.vue'

const popupRef = ref<{ open: () => void; closeDialog: () => void } | null>(null)

const timeout = ref<number | undefined>(undefined)
const queue = ref<any[]>([])
const change = ref<boolean>(true)
const leave = ref<boolean>(false)

const { module } = defineProps({
  module: {
    type: String,
    default: 'list'
  }
})

const sticker = computed(() => {
  if (queue.value.length > 0) {
    let val = queue.value[0]
    return { title: val.name, image: getAssetsUrl(`achievement/img_sticker_0${val.id}.png`) }
  }
  return {}
})

const get = () => {
  getTarget(module).then(res => {
    // let sticker = getImageUrl()
    if (Array.isArray(res.data)) {
      queue.value.push(...res.data)

      if (queue.value.length > 0) {
        leave.value = false
        popupRef.value?.open()
      }
    }
  })
}

watch(sticker, () => {
  change.value = true
  setTimeout(() => {
    change.value = false
  }, 1000)
})

const openNext = () => {
  if (queue.value.length > 1) {
    // 剔除第一项
    queue.value.shift()
  } else {
    queue.value = []
    popupRef.value?.closeDialog()
    leave.value = true
  }
}

onMounted(() => {
  if (module == 'list') {
    get()

    timeout.value = window.setTimeout(() => {
      get()
    }, 60000)
  }
})

const stopTimeout = () => {
  timeout && window.clearTimeout(timeout.value)
}
onBeforeUnmount(() => {
  stopTimeout()
})

defineExpose({ get, stopTimeout })
</script>

<style scoped lang="less">
.sticker-box {
  transform-origin: center;
  &.change {
    animation: show-sticker 0.6s cubic-bezier(0.47, 1.03, 0.5, 0.95) both;
  }
}
.sticker {
  width: 64%;
  margin-bottom: 24px;
}

.detail {
  color: #fff;
  text-align: center;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    font-size: 28px;
    font-weight: 700;
  }
  .desc {
    color: #dadada;
    font-size: 14px;
  }
}

@keyframes show-sticker {
  0% {
    transform: scale(0.2);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.lazy-image {
  &.list {
    background-image: url('../../assets/achievement/img_sticker_01.png'), url('../../assets/achievement/img_sticker_02.png'), url('../../assets/achievement/img_sticker_05.png'),
      url('../../assets/achievement/img_sticker_06.png');
  }

  &.wish {
    background-image: url('../../assets/achievement/img_sticker_03.png'), url('../../assets/achievement/img_sticker_04.png');
  }
}
</style>
