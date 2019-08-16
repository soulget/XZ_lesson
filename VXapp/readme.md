## h5  vs  小程序
  - 更好的体验  
  - 更强大的能力

## 设计一个项目
   - 配置
       写死的常量
   - 多处公用的方法
       防抖  util
   - 环境的区分
       1. 开发环境 ： 1. 错误提示  打印日志  更好的开发体验
       2. 测试环境
       3. 线上环境
   - css划分
       1. reset.css 重置
       2. base.css  公用的 css
   - 请求的封装
       1. header:
          {
            content-type:
          }
          wx.request({content-type}) //a
          wx.request({content-type}) //b
          请求字段统一处理
       2. 请求结果要统一处理
            