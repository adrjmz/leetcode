# path: leetcode\python\1046-last-stone-weight.py
# link: https://leetcode.com/problems/last-stone-weight/
# date: 2023-04-10
# leetcode: Easy

from ast import List
import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # T: O(nlogn) S: O(n)
        # heap approach
        heap = [-1 * stone for stone in stones]
        heapq.heapify(heap)

        while len(heap) > 1:
            y = heapq.heappop(heap)
            x = heapq.heappop(heap)
            if x != y:
                heapq.heappush(heap, y - x)
        return -1 * heapq.heappop(heap) if len(heap)>0 else 0