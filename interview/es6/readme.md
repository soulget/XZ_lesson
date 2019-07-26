对ES6的理解

es6 是相对于 es5 ECMASciprt 的第六次修订 
ES2015  随着 babel  webpack 构建工具的成熟 
es6 已成为 js 编程的事实标准。
我认为es6 比 es5 更加简洁， 提高了开发效率， 让代码更加优雅。

- 新增的特性
  let 和 const  常量声明， 具有 var 没有的块级作用域，比如循环事件监听时闭包就不需要了， 让代码更好理解。
  var 有变量提升的能力（let和const就不会到顶级对象，使用的变量或者常量要声明） //var a = 1  window.a = 1
- 箭头函数
  简化了函数的表达形式，
  1. 不用function 关键字 () => {} 
  2. 如果只有一个参数， () 也可以省略 
  3. 如果代码是直接返回值 {} 也可以省略  右侧的代码就是返回值
  4. 有效的规避了this丢失的问题 指向上一级

- 模板字符串
  增强版的字符串， 用`` 云括号， 它的多行表达方式，特别适合React JSX template 的书写
  DOM 或 html 模板的构建 更加优雅

- 解构赋值
  可解， spread    可合， reset 从对象或数组中提取值，对变量进行赋值， 提高开发效率

- for of 循环
  for 记步， 数组友好， 但是 对象， Set Map 类数组 以及字符串都可以遍历

- Set 
  es6新增的数据结构， 类似数组， 唯一的，
  没有重复的值

- import export
  es6的模块化， es6原生支持的module, 将js代码分割成不同的小块独立开发，一个文件一个类，一个独立的模块，比如说util api 

- ...展开运算符

- 终于支持原生的class关键字了， Js 有了 传统面向对象的写法， extends 不过他只是语法糖，底层还是基于原型的面向对象

- promise
  为js提供了异步解决方案，回避了回调地狱(.then)  以代码的书写和执行是一样的

- 更棒的异步解决方案  es7 的 async await  
  koa 就是基于async await 快速取代了 express 的江湖地位

- vue react 响应式编程依赖的proxy defineProperty 监听对象的改变，做一些事情

- es6 提供了新的数据类型，symbol

