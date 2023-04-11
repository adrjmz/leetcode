# path: leeetcode\python\0190-reverse-bits.py
# link: https://leetcode.com/problems/reverse-bits/
# 2023-04-10
# leetcode: Easy

class Solution:
    def reverseBits(self, nums: int) -> int:
        res = len(nums)
        
        for i in range(len(nums)):
            res += (i - nums[i])
        return res