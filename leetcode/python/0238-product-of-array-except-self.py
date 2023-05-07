# path: leetcode\python\0238-product-of-array-except-self.py
# link: https://leetcode.com/problems/product-of-array-except-self/
# date: 2023-05-07
# leetcode: Medium

class Solution:
  def productExceptSelf(self, nums: List[int]) -> List[int]:
    res = [1] * len(nums)

    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]

    postfix = 1
    for i in range(len(nums)-1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]

    return res
