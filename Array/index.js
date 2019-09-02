// var arr  = new Array(5)
// arr = [undefined,undefined,undefined,undefined,undefined]

// var arr1 = new Array(1,2,3,4,5)
// arr1 = [1,2,3,4,5]

// var arr = Array.of(6,123,4)
// console.log(arr)


// -----------------------------判断是否为数组
// var arr = []
// if (arr instanceof Array){}
// if(Array.isArray(arr)){}
// if(Object.prototype.toString.call(arr) == '[object Array]'){}
// if(arr.constructor == Array){}

// Array.from() 对象转数组
var arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
let newArray = Array.from(arrayLike); //[ 'a', 'b', 'c' ]
let newArray1 = Array.from(arrayLike,(v) => v+'1'); //[ 'a1', 'b1', 'c1' ]

let str = 'abc'
console.log(Array.from(str)) //[ 'a', 'b', 'c' ]

// console.log(newArray1);

var arr = [1,2,3]
console.log(arr.join(''));



// -----splice()
// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
// let arr = [1, 2, 3, 4, 5];
//      let arr1 = arr.splice(2, 0 'haha')
//      let arr2 = arr.splice(2, 3)
//      let arr1 = arr.splice(2, 1 'haha')
//      console.log(arr1) //[1, 2, 'haha', 3, 4, 5]新增一个元素
//      console.log(arr2) //[1, 2] 删除三个元素
//      console.log(arr3) //[1, 2, 'haha', 4, 5] 替换一个元素
// [1,2,3,4,5].splice(1,3)
// (3) [2, 3, 4]
// 　　
// ----------slice()
// slice() 方法可从已有的数组中返回选定的元素。
// 如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
// 该方法并不会修改数组，而是返回一个子数组
// [1,2,3,4,5].slice(1,3)
// (2) [2, 3]