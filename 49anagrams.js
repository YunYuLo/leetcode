// Author : Vivian Lo
// Date   : 2019-10-24

/** 題目解釋
將相同組合的字母歸類
**/

/**
1.建立一個ans []及 hash {}來編號出現過的組合
2.各別字串按字母排序
3.再一一比對，如果不存在hash，則將字串置入hash(編號) 及 ans[]
4.如果已存在hash，則直接置入ans中
**/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let ans = []
  let hash = {}

  strs.forEach(item => {
    let str = item.split('').sort().join('')

    if (hash[str] === undefined) {
      hash[str] = ans.length
      ans.push([item])
    } else {
      ans[hash[str]].push(item)
    }
  })
  return ans
};