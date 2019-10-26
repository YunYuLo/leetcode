// Author : Vivian Lo
// Date   : 2019-10-25


/**
1. 由左至右一一比較(Ｏ(n))
2. 利用升冪數列特性，發現不同數字count+1
3. 並將數字一一向左不重複排列
4. 最後刪去重複的部分並return count+1
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count
  if (nums.length == 0) return 0;
  if (nums.length == 1) return 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[count] != nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  nums.splice(count + 1, nums.length - count - 1)
  return ++count;
};