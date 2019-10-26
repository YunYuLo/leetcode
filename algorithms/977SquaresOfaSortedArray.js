// Author : Vivian Lo
// Date   : 2019-10-25

/** 題目解釋
A為非降冪數列，其數值介於-10000~10000，
請將A數列，所有數字平方後按升冪排序
**/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map(num => num * num)
    .sort((num1, num2) => num1 - num2)
};