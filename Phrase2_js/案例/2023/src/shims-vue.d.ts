declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// 定义了全局方法之后需要扩充类型
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $toast: typeof Toast;
//   }
// }

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     LottieAnimation: typeof import('vue3-lottie')['Vue3Lottie']
//   }
// }