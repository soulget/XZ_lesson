// 快排，
// 抽象  a b(女神) c  一次
// const arr = [8,2,5(女神),9,7]
// 递归

function quickSort (arr) {
  // left a
  // base 中间值
  // right c
  if(arr.length <= 1) return arr;
  var left = [],
    right = [],
    // 找到中间值  找到长度的中间值
    baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot,1)[0];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] < base){
        left.push(arr[i]);
      } else{
        right.push(arr[i]);
      }
    }
  return quickSort(left).concat([base],quickSort(right))
}
const arr = [8,2,2,5,9,7,7,1]           
console.log(quickSort(arr));

