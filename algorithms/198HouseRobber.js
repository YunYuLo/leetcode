/** You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 **/

/** 題目解釋：
 * 類似MaxSum的題目，但其他假設為，不可偷相鄰的房子，否則引發警報
 * 當只有一戶人家[N0]=> 偷到的金額=N0
 * 當有兩戶人家[N0,N1]=> 偷到的金額=max(N0,N1)
 * 當有三戶人家[N0,N1,N2]=> 偷到的金額=max(N0+N2,N1)
 * 得到規律，Bottom-up策略 => 當我在第Ｎ戶時的偷竊策略，比較 "(N-2)戶的總金額＋Ｎ戶金額" 及 "(N-1)戶的總金額"的金額，擇優
**/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let robArray = new Array(nums.length)
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  robArray[0] = nums[0]
  robArray[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    robArray[i] = Math.max(robArray[i - 2] + nums[i], robArray[i - 1])
  }
  return robArray.pop()
};