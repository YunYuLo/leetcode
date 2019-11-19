// Author : Vivian Lo
// Date   : 2019-10-25

/** 題目解釋
搜尋BST數列中，是否有目標值，
如過有則回傳該值的節點，反之回傳null
ie [4,2,7,1,3] 找2 => return [2,1,3]
               找5 => return NULL
**/

/**
1. 判斷 root 是否等於 val(目標值)，若非
2. 判斷 val 在 root 的右翼還是左翼
3. 左翼則將root更新為原始root.left
4. 右翼則將root更新為原始root.right
5. 回到第一部重複步驟
 **/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

/* method1 */
var searchBST = function (root, val) {

  if (root && root.val === val) {
    return root
  }

  if (!root) {
    return null
  }

  const left = searchBST(root.left, val)
  const right = searchBST(root.right, val)

  return left || right

};

/* method2 */
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) {
      return root;
    } else if (root.val > val) { //left side
      root = root.left;
    } else { //right side
      root = root.right;
    }
  }
  return null;

};

/* method3 */
var searchBST = function (root, val) {
  if (root == null) return null
  if (root.val == val) return root
  if (root.val > val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.left, val)
  }
}