/**
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 * Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
 * 題目解釋： 走到第i階，就要付過路費cost[i]，每次可選擇走一步或跨兩步，請問如何在最小花費達到頂端？**/

/**
 * @param {number[]} cost
 * @return {number}
 */

/** Method1 **/
var minCostClimbingStairs = function (cost) {
  let a = cost[0]
  let b = cost[1]
  for (let i = 2; i < cost.length; i++) {
    if (i % 2 == 0) {
      a = Math.min(a, b) + cost[i]
    } else {
      b = Math.min(a, b) + cost[i]
    }
  }
  return Math.min(a, b)
};

/** Method2 **/
var minCostClimbingStairs = function (cost) {
  let memo = newArray(cost.length - 1)
  memo[0] = cost[0]
  memo[1] = cost[1]
  for (let i = 2; i < cost.length; i++) {
    memo[i] = Math.min(memo[i - 1], memo[i - 2]) + cost[i]
  }
  return Math.min(memo[memo.length - 1], memo[memo.length - 2])
};