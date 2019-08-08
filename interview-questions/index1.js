var b = 10;
(function b () {
  b = 20
  console.log(b)
})()
// 报错
// 函数表达式与函数声明不同，函数声明只在函数内部，并且此绑定
// 不能对常量进行赋值
// const b = function (){} 
// b = 20
// console.log(b)


// var b = 10;
// (function b () {
//   let b = 20
//   console.log(b)
// })()