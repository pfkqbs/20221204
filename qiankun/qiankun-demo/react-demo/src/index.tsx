import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from '@/App'
import '@/style/index.scss'
import '@/icons'
import useStore from '@/store/index'

let root = '' as any

function render() {
  root = createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <HashRouter>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </HashRouter>,
  )
}

// 动态设置 webpack publicPath，防止资源加载出错
if ((window as any).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

//判断其是否作为qiankun子应用使用
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

/**
* bootstrap 只会在微应用初始化的时候调用一次，
  下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
* 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
*/
export async function bootstrap() {
  console.log('ReactApp bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log('ReactApp mount', props)

  // 将父应用的 user 信息存入到 微应用中
  const {
    useUserStore: { setVueUserInfo },
  } = useStore()
  setVueUserInfo(props.vueUser)

  render()
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('ReactApp unmount')
  // 销毁组件
  root.unmount()
  root = ''
}
