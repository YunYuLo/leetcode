/* Given a set of distinct integers, nums, return all possible subsets (the power set). */

/** 得到陣列所有可能組合 **/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

};

/** 
 * 解題思路
 * [1,2,3]有幾種組合？
                                 []
                              /      \
 i=0                 [1]                     []
                   /     \                 /     \
 i=1         [1,2]          [1]         [2]       []
            /     \       /     \     /     \   /     \
 i=2    [1,2,3]  [1,2]  [1,3]  [1]  [2,3]  [2] [3]    []
 * 由上而下每次都會產生兩隻腳：一隻是自己加nums[i],另一隻保留自己
 * base case i == 2
 **/

/** method recursion
 * leetcode : 76 ms**/
var subsets = function (nums) {
  let result = []
  const fork = function (i, set) {
    if (i == nums.length) {
      return result.push(set)
    }
    fork(i + 1, set.concat([nums[i]]))
    fork(i + 1, set)
  }
  fork(0, [])
  return result

};

/** method from stack overflow
 * leetcode : 56 ms
 * faster than recursion**/
const subsets = nums => nums.reduce(
  (subsets, value) => subsets.concat(
    subsets.map(set => [value, ...set])
  ),
  [[]]
);

/** source: https://www.cnblogs.com/grandyang/p/4309345.html **/