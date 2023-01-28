import React from 'react'
import Layout from '@/Layout'
import Test from '@/views/test2'

const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react-app' : ''

export default {
  element: <Layout />,
  path: '',
  children: [
    {
      path: BASE_NAME + '/test2',
      element: <Test />,
      meta: {
        requireAuth: false,
        title: '测试 2',
        icon: 'test',
      },
    },
  ],
}
