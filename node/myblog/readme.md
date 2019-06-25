- req.query  queryString?a=1
- req.params /:name
- req.body body-parser 中间件


- 路由的提升
  express.Router
  app.use('/users',router);

- render 传值
  使用一个模板 ejs


- views
  app.set  路径  模板引擎设置
  <% code %>运行javascript
  <%= code %>显示转义后的html
  <%- code %>输出html

- models 存放操作数据库的文件
- public 存放静态文件
- routes 存放路由文件
- 存放模板文件
- index.js 入口文件
- controllers 控制器