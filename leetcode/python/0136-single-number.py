# path: leetcode\python\0136-single-number.py
# link: https://leetcode.com/problems/single-number/
# 2023-04-10
# leetcode: Easy

from typing import List

class Solution:
    def singleNumebr(self, nums: List[int]) -> int:
        res = 0
        for n in nums:
            res = n ^ res
        return res
