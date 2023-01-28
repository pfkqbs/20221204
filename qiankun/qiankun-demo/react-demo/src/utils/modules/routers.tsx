import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import rootRouter from '@/routes'
import { getUserAPI } from '@/api/modules/user'
// mobx
import useStore from '@/store'

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
// 判断是否为微前端进入，进入添加前缀
const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react-app' : ''

// // 设置白名单
const whitePaths = [BASE_NAME + '/login', BASE_NAME + '/404', BASE_NAME + '/500']

// 路由守卫配置函数
export const AuthRouter = (props: any) => {
  const { pathname } = useLocation()
  let {
    useUserStore: { token, setUserInfo, userInfo },
  } = useStore()
  // 第一步 判断有无 token
  if (token) {
    // 第二步 判断是否前往login页面，等于跳转 '/', 不等于则继续判断
    console.log(32, pathname === BASE_NAME + '/login')

    if (pathname === BASE_NAME + '/login') {
      return <Navigate to={BASE_NAME + '/'} replace />
    } else {
      // 第三步 判断是否拿到用户个人信息及权限，没拿到则进行axios请求数据，进行信息存储及权限路由渲染，否则直接放行
      // 该版本为基础版，这些数据展示都为链接，后续会逐步更新
      if (Object.keys(userInfo).length < 1) {
        // 获取用户个人信息 (此处使用 async await会报错)
        getUserAPI()
          .then((res) => {
            setUserInfo(res.data as any)
          })
          .catch((err) => {})

        // 合并路由
        return props.children
      } else {
        return props.children
      }
    }
  } else {
    if (whitePaths.includes(pathname)) {
      return props.children
    } else {
      return <Navigate to={BASE_NAME + '/login'} replace />
    }
  }
}
