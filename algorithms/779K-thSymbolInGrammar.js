/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

/** 
 * On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 * Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).
 * 題目解釋
 * 每一行均根據上一行(Ｎ-1行)之元素產生，依據0->01;1->10的規則，所以index Ｋ的最大值必定為一個2^(Ｎ-1)
 * for example:
 * N=1     0
         /   \
 * N=2  0     1
       / \   / \
 * N=3 0  1  1  0
       /\ /\ /\ /\
 * N=4 01 10 10 01
 * 請問給定(N,K)，如何找出相對應的元素?
 * 由上樹狀圖可觀察，當N=4，K為奇數(1,3,5,7)時，其值與父節點(N=3)相同；當K為偶數(2,4,6,8)則反之
 * 
 **/

var kthGrammar = function (N, K) {
  if (N <= 1) return 0
  if ((K % 2) == 0) {
    return (kthGrammar(N - 1, K / 2) == 0) ? 1 : 0
  } else {
    return (kthGrammar(N - 1, (K + 1) / 2) == 0) ? 0 : 1
  }
};