# path: leetcode\python\0104-maximum-depth-of-binary-tree.py
# link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
# date: 2023-04-10
# leetcode: Easy

from ast import Optional
from collections import deque
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        ## Recursive DFS approach
        # T: O(n) S: O(n)
        if not root:
            return 0
        
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
    
        ## Iterative DFS approach, must be preordered
        # if not root:
        #     return 0

        # stack = [(root, 1)]
        # depth = 0
        # while stack:
        #     node, level = stack.pop()
        #     if node:
        #         depth = max(depth, level)
        #         stack.append((node.left, level + 1))
        #         stack.append((node.right, level + 1))
        # return depth

        ## BFS approach
        # T: O(n) S: O(n)
        # if not root:
        #    return 0
        
        # depth = 0
        # q = deque([root])
        # while q:
        #     for _ in range(len(q)):
        #         node = q.popleft()
        #         if node.left:
        #             q.append(node.left)
        #         if node.right:
        #             q.append(node.right)
        #     depth += 1
        # return depth

        ## Iterative BFS approach
        # stack= [[root, 1]]
        # res = 0

        # while stack:
        #     node, depth = stack.pop()

        #     if node:
        #         res = max(res, depth)
        #         stack.append([node.left, depth + 1])
        #         stack.append([node.right, depth + 1])
        # return res