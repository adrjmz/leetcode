# path: leetcode\python\0226-invert-binary-tree.py
# link: https://leetcode.com/problems/invert-binary-tree/
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
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # T: O(n) S: O(n)
        # dfs approach
        if root:
            # swap children
            root.left, root.right = root.right, root.left

            # recurse through children
            self.invertTree(root.left)
            self.invertTree(root.right)
        return root
    
        # T: O(n) S: O(n)
        # bfs approach
        # if root:
        #     queue = [root]
        #     while queue:
        #         node = queue.pop(0)
        #         node.left, node.right = node.right, node.left
        #         if node.left:
        #             queue.append(node.left)
        #         if node.right:
        #             queue.append(node.right)
        # return root
        