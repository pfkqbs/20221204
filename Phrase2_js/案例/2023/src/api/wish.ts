import { request } from '@/utils/index'

export const wishList = () =>
  request({
    url: '/api/wish/list',
    method: 'get'
  })

export const wishVote = (id: number | string) =>
  request({
    url: '/api/wish/vote',
    method: 'post',
    data: { id: id }
  })

export const barrage = () =>
  request({
    url: '/api/wish/barrage',
    method: 'get'
  })

export const sendWish = <T>(content: string) =>
  request({
    url: '/api/wish/addWish',
    method: 'post',
    data: { content }
  })
