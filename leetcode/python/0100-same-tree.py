# path: leetcode\python\0100-same-tree.py
# link: https://leetcode.com/problems/same-tree/
# date: 2023-04-10
# leetcode: Easy

from ast import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Recursive DFS approach
        # T: O(n) S: O(n)
        # if not p and not q:
        #     return True
        # if not p or not q or p.val != q.val:
        #     return False
        if not p or not q: return p == q
        return p.val  == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
