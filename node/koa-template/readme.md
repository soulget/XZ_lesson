## koa 中间件 middleWare 
app.use(middleWare);
next 下一个中间件
每一次use都会注册一个中间件
[middleWare1, middleWare2]

1. async 函数
2. 洋葱模型: 一层一层往最里面执行，最后一个中间件执行完了，一层往外冒泡执行剩余的代码。
3. 解耦: 每一个中间件负责一件事。

以 X 开头的： 自定义的响应头

## koa 第三方中间件
koa ctx 就是 req + res 组成的对象
ctx: {
  req:{},
  res:{}
}

koa-views
接着扩展ctx， 接着往ctx 上面塞东西
ctx: {
  req:{},
  res:{},
  render: () => {}
}

#ejs
<%= %> 原样输出
<%- %> 解析 html
<% %> 解析 JS





--------------------
## 
package.json  项目描述
依赖 npm i install 下来的文件
-S 
```json
  "dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }
```
npm i node-modules 目录。
koa