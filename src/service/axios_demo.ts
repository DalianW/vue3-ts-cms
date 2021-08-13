import axios from 'axios'

// 模拟get请求
// axios
//   .get('https://fk.xcongzb.com/api/version/get_home_banner_list')
//   .then((res) => {
//     console.log(res.data)
//   })

// get请求并带参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// Promise类型
// Promise本身是可以有类型的
// new Promise<string>((resolve) => [resolve('123')]).then((res) => {
//   console.log(res)
// })

// axios的配置选项

// 全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 单独配置
// axios
//   .get('/get', {
//     params: {
//       name: 'coderWhy',
//       age: 18
//     },
//     timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// 5.axios.all
// axios
//   .all([
//     axios.get('/get', {
//       params: {
//         name: 'coderWhy',
//         age: 18
//       },
//       timeout: 5000
//     }),
//     axios.post('/post', {
//       data: {
//         name: 'why',
//         age: 18
//       }
//     })
//   ])
//   .then((res) => {
//     console.log(res[0])
//     console.log(res[1])
//   })

// 6.axios的拦截器
// fn1:请求发送成功执行的函数  fn2：请求发送失败执行的函数
// axios.interceptors.request.use(
//   (config) => {
//     // 给请求添加token
//     // 做loading动画
//     console.log('请求发生成功')
//     return config
//   },
//   (err) => {
//     console.log('请求发生错误')
//     return err
//   }
// )

// fn1:数据响应成功(服务器正常返回数据)

// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功')
//     return res.data
//   },
//   (err) => {
//     console.log('服务器响应失败')
//     return err
//   }
// )
