import React from 'react'
import Home from '@/views/home'
import { HOME_URL } from '@/config/config'
import Layout from '@/Layout'

const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react-app' : ''

export default {
  path: '',
  element: <Layout />,
  children: [
    {
      path: BASE_NAME + HOME_URL,
      element: <Home />,
      meta: {
        title: '首页',
        icon: 'home',
      },
    },
  ],
}
