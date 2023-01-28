import React from 'react'
import useStore from '@/store/index'

const Home = () => {
  // 将主应用的 userInfo 显示到微应用 home 主页
  interface IVueuserInfo {
    name?: string
    avatar: string
    device: string
    token: string
    sider: {
      opened: boolean
      withoutAnimation: boolean
    }
  }

  const { useUserStore } = useStore()
  const vueUser = useUserStore.vueUserInfo as IVueuserInfo

  return (
    <div>
      Hello Home
      <hr />
      <div>{vueUser.name}</div>
      <div>{vueUser.avatar}</div>
      <div>{vueUser.token}</div>
    </div>
  )
}
export default Home
