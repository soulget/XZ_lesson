function foo() {
  for( let arg of arguments){
    console.log('arg',arg)
  }
}
var arr = []
var str = 'abc'
var map = new Map()
var obj = {}; //  typeof obj.a === undefined
let initIndex = 0, maxIndex = 3
obj[Symbol.iterator] =()=>( {
  next: function(){
    initIndex++
    if(initIndex <= maxIndex){
      return{
      done:false,
      value: initIndex
    }
    }else {
      return {
        done:true,
        value:undefined
      }
    }
   
  }
})
for (let a of obj){
  console.log(a)
}
console.log(typeof arr[Symbol.iterator],
typeof str[Symbol.iterator],
typeof map[Symbol.iterator],
typeof obj [Symbol.iterator])

foo(1,2,3)

// ## for of 
//       用于遍历 可迭代 对象
//       比如：Array, Map, Set, String
//       可迭代对象 有两个要求
//       1. 存在 Symbol.iterator 属性
//       2. Symbol.iterator 是一个方法 返回 next 属性
        




// var myObject={
//   　　a:1,
//   　　b:2,
//   　　c:3
//   }

// for (var key in myObject) {
//   　if(myObject.hasOwnProperty(key)){
//     console.log(key)
//   }
// }