<template>
  <div class="fx">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

// change these settings
var patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 8,
  patternAlpha = 30 // int between 0 and 255,

var patternPixelDataLength = patternSize * patternSize * 4
var patternCanvas: HTMLCanvasElement | null = null
var patternCtx: CanvasRenderingContext2D | null = null
var patternData: ImageData | null = null
var frame = 0
var viewWidth = 0
var viewHeight = 0
var ctx: CanvasRenderingContext2D | null = null

// create a canvas which will render the grain
function initCanvas() {
  if (canvas.value) {
    viewWidth = canvas.value.width = canvas.value.clientWidth
    viewHeight = canvas.value.height = canvas.value.clientHeight
    ctx = canvas.value.getContext('2d') || null
    ctx?.scale(patternScaleX, patternScaleY)
  }
}

// create a canvas which will be used as a pattern
function initGrain() {
  patternCanvas = document.createElement('canvas')
  patternCanvas.width = patternSize
  patternCanvas.height = patternSize
  patternCtx = patternCanvas.getContext('2d')
  patternData = patternCtx?.createImageData(patternSize, patternSize) || null
}

// put a random shade of gray into every pixel of the pattern
function update() {
  var value

  for (var i = 0; i < patternPixelDataLength; i += 4) {
    value = (Math.random() * 100) | 0

    if (patternData) {
      patternData.data[i] = 254
      patternData.data[i + 1] = 147
      patternData.data[i + 2] = 93
      patternData.data[i + 3] = Math.random() > 0.6 ? value : 0
    }
  }

  patternData && patternCtx?.putImageData(patternData, 0, 0)
}

// fill the canvas using the pattern
function draw() {
  ctx?.clearRect(0, 0, viewWidth, viewHeight)
  if (patternCanvas && ctx) {
    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat') || ''
    ctx.fillRect(0, 0, viewWidth, viewHeight)
  }
}

function loop() {
  if (++frame % patternRefreshInterval === 0) {
    update()
    draw()
  }

  requestAnimationFrame(loop)
}

onMounted(() => {
  initGrain()
  initCanvas()
  requestAnimationFrame(loop)
})
</script>

<style scoped lang="less">
.fx {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #fff4ed;
  > canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
