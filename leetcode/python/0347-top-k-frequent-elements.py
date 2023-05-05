# path: leetcode\python\0347-top-k-frequent-elements.py
# link: https://leetcode.com/problems/top-k-frequent-elements/
# date: 2023-05-04
# leetcode: Medium
# Time Complexity: O(n) | Space Complexity: O(n)
from ast import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
