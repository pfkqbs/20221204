<template>
  <div :class="['popup-wrap', { leave: beforeClose }]" @click.stop="touchMask" v-show="showDialog">
    <div class="popup-main" v-if="showDialog">
      <div @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)
const beforeClose = ref(false)

const emit = defineEmits(['touchMask'])

const touchMask = () => {
  emit('touchMask')
}

const closeDialog = () => {
  beforeClose.value = true
  setTimeout(() => {
    showDialog.value = false
    beforeClose.value = false
  }, 800)
}

const open = () => {
  // 打开弹窗
  showDialog.value = true
  beforeClose.value = false
}

defineExpose({
  open,
  closeDialog
})
</script>

<style lang="less">
.popup-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  perspective: 1000;
  transition: all 1.2s;
  transform: translate(-50%, -50%);
  opacity: 1;
}

.popup-wrap.leave {
  opacity: 0;
}

.popup-main {
  margin: 0 auto;
  position: absolute;
  max-width: 460px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  & > div {
    /* 3D变形 */
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    -ms-perspective: 1000px;
    perspective: 1000px;
  }
}
</style>
