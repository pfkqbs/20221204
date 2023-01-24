import { request } from '@/utils/index'

export const teaList = () =>
  request({
    url: '/api/tea/list',
    method: 'get'
  })

export const teaVote = (id: number) =>
  request({
    url: '/api/tea/vote',
    method: 'post',
    data: { id: id }
  })

export const oneMoreVisit = () =>
  request({
    url: '/api/tea/more_visit',
    method: 'get'
  })

  export const contactVisit = () =>
  request({
    url: '/api/tea/contact_visit',
    method: 'get'
  })

  
export const puzzleVisit = () =>
  request({
    url: '/api/tea/puzzle_visit',
    method: 'get'
  })
