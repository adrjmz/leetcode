# path: leetcode\python\0206-reverse-linked-list.py
# link https://leetcode.com/problems/reverse-linked-list/
# date 2023-04-08
# leetcode: Easy

# Definition for singly-linked list.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # T 0(n) M 0(1)
        prev = None # This is set to the end of the list
        curr = head # 1 -> 2 -> 3 -> 4 -> 5 -> None INPUT
        
        while curr:
            # 1 -> None first iteration
            # 2 -> 1 -> None second iteration
            # 3 -> 2 -> 1 -> None third iteration
            # 4 -> 3 -> 2 -> 1 -> None fourth iteration
            # 5 -> 4 -> 3 -> 2 -> 1 -> None DESIRED OUTPUT
            nxt = curr.next # 2 -> 3 -> 4 -> 5 -> None first iteration
            curr.next = prev # 1 -> None first iteration

            prev = curr # 1 -> None first iteration
            curr = nxt # 2 -> 3 -> 4 -> 5 -> None first iteration
        return prev # 5 -> 4 -> 3 -> 2 -> 1 -> None DESIRED OUTPUT

        # Recursive solution T 0(n) M 0(n)
        # if not head:
        #     return head

        # newHead = head
        # if head.next:
        #     newHead = self.reverseList(head.next)
        #     head.next.next = head
        # head.next = None
        # return newHead