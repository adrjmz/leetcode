# path: leetcode\python\0001-two-sum.py
# link https://leetcode.com/problems/two-sum/
# date 2023-04-07
# leetcode: Easy

from ast import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # val : index

        for i, n in enumerate(nums):
            diff = target - nums[i]
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i