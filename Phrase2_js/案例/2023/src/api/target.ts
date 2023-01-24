import { request } from '@/utils/index'

export const getTarget = (module: string) =>
  request({
    url: '/api/target/get',
    method: 'get',
    params: { module }
  })
