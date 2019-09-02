const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const route = require('koa-route');
const serve = require('koa-static');
const app = new Koa();
// 中间件 即是函数
const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
}
const main = ctx => {
  ctx.response.body = 'Hello Index <a href="/about">About Page</a>';
}
const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/">Index Page</a>';
}

app.use(serve(path.join(__dirname, 'assets')));
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/redirect',redirect));
// app.use(main);
app.listen(3000);