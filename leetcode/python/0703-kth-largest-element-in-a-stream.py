# path: leetcode\python\0703-kth-largest-element-in-a-stream.py
# link: https://leetcode.com/problems/kth-largest-element-in-a-stream/
# date: 2023-04-10
# leetcode: Easy

from ast import List
import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.minHeap, self.k = nums, k
        heapq.heapify(self.minHeap) # T: O(n) S: O(n)
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    # T: O(nlogn) S: O(n)
    def add(self, val: int) -> int:
        heapq.heappush(self.minHeap, val)
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        # if len(self.minHeap) < self.k:
        #     heapq.heappush(self.minHeap, val)
        # elif val > self.heap[0]:
        #     heapq.heappushpop(self.minHeap, val)
        return self.minHeap[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)

# Min heap
# min of heap in O(1) time
# add/pop in O(logn) time
# never removing