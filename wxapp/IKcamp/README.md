## h5 vs 小程序
- 更好的体验
- 更强大的能力

## 设计一个项目
1. 配置
   1. 写死的常量
2. 多处公用的方法
   1. 防抖 util
3. 环境的区分
   1. 开发环境
      1. 错误提示 日志打印 更好的开发体验
   2. 测试环境
   3. 线上环境
4. css划分
   1. reset.css 重置
   2. base.css  公用的 css
5. 请求封装
   1. header：
   {
      content-type:
      x-abc
   }
   wx.request({content-type, x-abc}) // a ？
   wx.request({content-type, x-abc}) // b ？ ？ ？
   请求字段统一处理
   2. 请求结果统一处理

## for of
用于遍历 可迭代 对象
比如：Array,Map,Set,String
可迭代 对象有两个要求
1. 存在 Symbol.iterator 属性
2. Symbol.iterator 是一个方法 返回 next 属性
   ```
   [Symbol.iterator] = () => ({
      next: () => {
         return {
            done:
            value:
         }
      }
   })
   ```
可以自定义 for...of 行为，


## e.target && e.currentTarget
   e.target  触发事件的目标元素
   e.currentTarget  绑定事件的元素

## js 

   ECMAScript: 规定了js的语法
   DOM： 
   BOM：浏览器相关的 history 窗口resize 