# path leetcode\python\0141-linked-list-cycle.py
# link https://leetcode.com/problems/linked-list-cycle/
# date 2023-04-08
# leetcode: Easy

from ast import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        # T: O(n) S: O(n)
        # Hashmap approach
        # hashMap = {}
        # while head:
        #     if head in hashMap:
        #         return True
        #     hashMap[head] = True
        #     head = head.next
        # return False

        # T: O(n) S: O(1)
        # Two pointers approach
        if not head or not head.next:
            return False
        slow = fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False