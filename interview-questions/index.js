// function Person (name) {
//   this.name = name
//   return {}
// }
// let p = new Person('wn')
// console.log(p)  //  -> {}
// 1. p.__proto__ 等于 Person.prototype
// 2. Person.__proto__  等于 Function.prototype
// 实例的隐式原型链(__proto__) 等于 其构造函数的显示原型(Person.prototype)
// var foo = {}
//   F = function(){}
//   Object.prototype.a = 'valA'
//   Function.prototype.b = 'valB'
//   console.log(foo.a)

// 构造函数是不需要返回值的  使用new来创建对象时，如果return 的是非对象类型  会忽略返回值，
// 如果返回的是对象，则返回的是该对象(若 return null 也会忽略返回值)

// *********************************************************************************************************

// function Person () {
//   this.name = name
// }

// function Student () {

// }
// Student.prototype = Person.prototype 
// Student.prototype.constructor = Student
// let s = new Student('wn')
// console.log(s instanceof Person) //true
// console.log(s) //  Student {}

// -----------------------------------------------------------------------------------------------------------

// for (var i = 0; i < 10; i++) {
//   setTimeout(()=>{
//     console.log(i)
//   },0)
// }    // 10 个 10 

// for (let i = 0; i < 10; i++) {
//   setTimeout(()=>{
//     console.log(i)
//   },0)
// }   //0 1 2 3 4 5 6 7 8 9

// for (var i = 0; i < 10; i++) {
//   (function(i){
//     setTimeout(()=>{
//       console.log(i)
//     },0)
//   })(i)
// }  

// --------------let 每次循环会生成一个封闭的作用域和setTimeout绑定
// --------------var 每次循环会覆盖掉上一次的作用域

// // ****************************************************************************************************
// Array.prototype.method = function () {
//   console.log('wn');
// }
// var myArray = [10,20,30,40,50,60,70]
// myArray.name = 'xz'

// // for( let index of myArray){
// //   console.log(index)
// // }

// for (let index in myArray){
//   console.log(myArray[index])
// }

// for in  
// 1.  index 索引为 字符串型的数字， 不能直接进行几何运算
// 2.  遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3.  使用for in 会遍历数组所有可枚举属性（包括原型链） 所以 for in 更适合遍历对象

// for of 遍历的是数组的元素  遍历的只是数组内的元素 而不包括数组原型属性和索引
// for in 遍历的是数组的索引



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
// let oArr = [1,2,3,4,5,2,7,3,9]

// function outputArr (arr) {
//   let res = []
//   for (let i=0; i<arr.length; i++) {
//     if ( Array.isArray(arr[i]) === true ) {
//       res = res.concat(outputArr(arr[i]))
//     } else{
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// console.log(outputArr(gArr))

function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  },[])
}
console.log(outputArr(gArr))
