const path = require('path')
module.exports = {
  // 配置方式一
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/component'
  //     }
  //   }
  // }
  // 配置方拾二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
