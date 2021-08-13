// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // 携带token拦截
      const token = localCache.getCache('token') ?? ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})

export default hyRequest
