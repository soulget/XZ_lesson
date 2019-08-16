// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       let index = i + 1  ; 
//       while( index < nums.length){
//         if(nums[i] + nums[index] === target){
//           return [i,index];       
//         }
//         index++
//       }
//     }
// };
// console.log(twoSum([2, 7, 11, 15, 20],31))
// nums = [2, 7, 11, 15], target = 9



// var numsMap = {
//   '2': 0,
//   '7': 1,
//   '11': 2,
//   "15": 3
// }

var twoSum = function(nums, target) {
  // 给所有的数建立 map
  var obj = {}
  for (let i =  0; i < nums.length; i++){
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let anotherNum = target - cur;
    if(obj[anotherNum] !== undefined && obj[anotherNum] !== i) {
      return [i,obj[anotherNum]];
    }
  }
}
console.log(twoSum([2, 7, 11, 15, 20],4))
