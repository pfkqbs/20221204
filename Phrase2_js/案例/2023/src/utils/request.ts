import axios, { AxiosRequestConfig } from 'axios'

interface YXRequestConfig extends AxiosRequestConfig {
  headers?: Record<string, any>
}

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // api base_url
  timeout: 60000 // 请求超时时间
})

request.interceptors.request.use((config: YXRequestConfig) => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers['year'] = 2023
  // csrf token
  const token = window.localStorage.getItem('milk_vote_2023_token')
  if (token) {
    config.headers['token'] = token
  }
  return config
})

// response interceptor
request.interceptors.response.use(response => {
  let data = response.data
  if (data.token) {
    window.localStorage.setItem('milk_vote_2023_token', data.token)
  }
  return response.data
})

export { request }
