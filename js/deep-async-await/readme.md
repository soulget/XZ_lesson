## async
  async 函数就是  Generator 函数的语法糖


## generator 函数
```js
  function* test() {
    console.log(1);
     let a =  yield 1;
      console.log('a',a);
     let b = yield 2;
      console.log('b',b);
      let c = yield 3;
      console.log('c',c);
    }
    // 惰性的
    var g = test();
```
通过next()一步一步调用
每一步调用 执行到 yield 关键字
通过传参  做可做为上一个yield 语法的返回值



##
{
  test: /\.js$/
  use:['babel-loader']
}
babelrc