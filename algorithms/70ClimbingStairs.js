/** You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer. **/

/* 題目解釋
一次可爬一階或二階，假如給定一個正整數n階，請問爬到n階有幾種可能？ 
*/

/** 
 * 先找出題目的規律
 * n = 1 ;                   => 1
 * n = 2 ; (1+1)(2)          => 2 
 * n = 3 ; (1+1+1)(1+2)(2+1) => 3
 * n = 4 ;                   => (n-1)+(n-2)=3+2=5
 * 如此我們發現，他的規律為前兩個數字相加
 **/

/**
 * @param {number} n
 * @return {number}
 */

/** method1 recursion
 * 可以運行，但是速度極慢
 * leetcode 直接跳出Time Limit Exceeded**/
var climbStairs = function (n) {
  let W = [0, 1, 2]
  if (W[n] === undefined) {
    W[n] = climbStairs(n - 2) + climbStairs(n - 1);
  }
  return W[n];
};

/** method2 
 * 免強還可以，但也不快XD
 * Runtime: 64 ms**/
var climbStairs = function (n) {
  let W = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    W[i] = W[i - 2] + W[i - 1];
  }
  return W[n];
};