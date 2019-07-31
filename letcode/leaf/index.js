var sumNumbers = function(root) {
  return helper(root,0);
}

function helper (node, cur) {
  if(node === null) return 0;
  const next = node.val + cur * 10;
  if(node.left === null && node.right === null) {
    return next; //叶子结点
  }
  const l = helper(node.left, next);
  const r = helper(node.right, next);
  return l + r;
}

function treeNode (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
const a1 = new treeNode(1);
const a2 = new treeNode(2);
const a3 = new treeNode(3);
a1.left = a2 ;
a1.right = a3;
console.log(sumNumbers(a1));
