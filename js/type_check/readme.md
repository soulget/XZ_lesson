类型 typeof
复杂数据类型就是 object
Array 是可遍历的对象
Function 是可运行的对象
JSON Object对象字面量是可枚举的对象 for(key in)
typeof typeof [] 没有办法跟JSON区分开来
有一个方法可以区分Array和JSON  object

1. 用对象字面量来做面向对象  区别于原型式的 它没有被实例化的需要 Type. 将在程序之中就做类型检测
   var type={};  组织代码 
2. for 来一次性的加完;同步异步的问题 
   使用闭包来讲type 作用域封闭起来,
   立即执行函数,同步执行, 类型检测函数的定义 ，因为函数嵌套 形成了闭包， 当函数在被调用时(异步)，找到定义时的type
3. object.prototype.toString.call(obj)
   object? 祖先 顶级对象  函数才有prototype属性，原型上有toString方法，解决typeof的尴尬"[object object]" 
   [object Array] 方法的执行方式可以被改变
   object.prototype.toString.call(obj)