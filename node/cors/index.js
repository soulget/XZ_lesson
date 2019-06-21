var express = require('express')
var app = express();
var cors = require('cors');
// req -> res
// 连接数据库  next
// 验证身份信息 session next
// 表单处理  parseBody  next
// 跨域  一件事  cors 
app.use(cors());
// next

app.get('/products/:id', function(req, res, next) {
  res.json({
    msg: 'This is cross-enabled for all original'
  })
});

app.listen(3000, function() {
  console.log('web server listening on port 80');
})