import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { IuserInfo } from '@/type'

export default class useMobxStore {
  token: string | null = null
  userInfo = {}
  // 存放 主应用 个人信息
  vueUserInfo = {}

  constructor() {
    // 响应式处理
    makeAutoObservable(this)
    // makePersistable 数据持久化存储
    makePersistable(this, {
      name: 'LenoAdmin_dev_1.0.0_token',
      properties: ['token'],
      storage: window.localStorage,
    })
  }

  // 存储token
  setToken = (token: string) => {
    this.token = token
  }
  //删除token
  removeToken = () => {
    this.token = null
  }
  // 存储 userinfo
  setUserInfo = (userInfo: IuserInfo) => {
    this.userInfo = userInfo
  }

  // 删除 userInfo
  removeUserInfo = () => {
    this.userInfo = {}
  }

  // 存储 主应用 userinfo
  setVueUserInfo = (userInfo: IuserInfo) => {
    console.log(30, userInfo)

    this.vueUserInfo = userInfo
  }

  // 删除 主应用 userInfo
  removeVueUserInfo = () => {
    this.vueUserInfo = {}
  }
}
