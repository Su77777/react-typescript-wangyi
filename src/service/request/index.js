import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class SyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 响应拦截器 拿到结果直接做一层拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        console.log(err)
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export const SyAxios = new SyRequest(BASE_URL, TIMEOUT)
