/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 * Path: leetcode\typescript\0153-find-minimum-in-rotated-sorted-array.ts
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Leetcode: Medium
 * Date: 2023-05-10
 */

function findMin(nums: number[]): number {
  let l: number = 0;
  let r: number = nums.length - 1;

  while (r > l) {
    let m: number = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) {
      r = m + 1;
    } else {
      l = m;
    }
  }
  return nums[l];
}
