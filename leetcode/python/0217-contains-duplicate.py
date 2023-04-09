# path: leetcode\python\0217-contains-duplicate.py
# link https://leetcode.com/problems/contains-duplicate/
# date 2023-04-07
# leetcode: Easy

from ast import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool: 
        hashset = set()

        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False