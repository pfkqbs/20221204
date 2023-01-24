<template>
  <div class="wish-poster">
    <canvas v-show="!img" ref="canvasRef" width="913" height="1260"></canvas>
    <img v-if="img" :src="img" />
  </div>
</template>

<script setup lang="ts">
import { getAssetsUrl } from '@/utils'
import { onMounted, ref } from 'vue'

const { title, qrcordType, background } = defineProps({
  title: {
    type: String
  },
  background: {
    type: String
  },
  qrcordType: {
    type: String,
    defaule: false
  }
})

const canvasRef = ref<HTMLCanvasElement | null>()
const ctx = ref<CanvasRenderingContext2D | null>()
const img = ref<string>('')

const drawImage = (url: string, x: number, y: number, w?: number, h?: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      if (w && h) {
        ctx.value?.drawImage(img, x, y, w, h)
      } else {
        ctx.value?.drawImage(img, x, y)
      }

      resolve()
    }

    img.onerror = function () {
      reject()
    }
    img.src = url
  })
}

onMounted(async () => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d')
    background && (await drawImage(background, 0, 0, 913, 1260))
    title && (await drawImage(title, 84, 120))
    if (qrcordType == 'luck') {
      await drawImage(getAssetsUrl('wish/qr_code.png'), 582, 942)
      await drawImage(getAssetsUrl('wish/luck.png'), 84, 1080)
    }
    if (qrcordType == 'join') {
      await drawImage(getAssetsUrl('wish/join_qr_code.png'), 582, 942)
      await drawImage(getAssetsUrl('wish/join.png'), 84, 1080)
    }
    img.value = canvasRef.value?.toDataURL('image/jpeg')
  }
})

defineExpose({
  img: img
})
</script>

<style lang="less">
.wish-poster {
  canvas {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
}
</style>
