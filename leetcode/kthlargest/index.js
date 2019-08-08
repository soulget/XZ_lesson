// [1,4,2,6,9,10]  2

// let arr = [1,4,2,6,9,10] 
// function sortNum(a, b){
//   return a - b
  
// }
// console.log(arr.sort((a, b) => b-a)[1])


function findKthLargest (nums, k){
  if(k < 0 || k > nums.length -1 ) return NaN;
  return nums.sort((a, b) => b -a)[k-1];
}
console.log(findKthLargest([1,4,2,6,9,10],2));