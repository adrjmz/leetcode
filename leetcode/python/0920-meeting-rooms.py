# path: leetcode\python\0920-meeting-rooms.py
# link: https://leetcode.com/problems/meeting-rooms/
# date: 2023-04-10
# leetcode: Easy

from typing import List

"""
Definition of Interval:
"""
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: if a person could attend all meetings
    """
    def can_attend_meetings(self, intervals: List[Interval]) -> bool:
        # sort the intervals by start time
        intervals.sort(key = lambda i : i.start)

        for i in range(1, len(intervals)):
            i1 = intervals[i - 1]
            i2 = intervals[i]

            if i1.end > i2.start:
                return False
        return True