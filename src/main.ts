import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'
import hyRequest from './service'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
const app = createApp(App)

// globalRegister(app)
app.use(globalRegister)
app.use(store)
// app.use(ElementPlus)
setupStore()
app.use(router)

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
// hyRequest.request({
//   url: '/version/get_home_banner_list',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的发送拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独请求的返回拦截')
//       return res
//     }
//   }
// })
// interface DataType {
//   data: any
//   code: string
//   message: string
// }
// hyRequest
//   .post<DataType>({
//     url: '/version/get_home_banner_list',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.data)
//     console.log(res.code)
//     console.log(res.message)
//   })
