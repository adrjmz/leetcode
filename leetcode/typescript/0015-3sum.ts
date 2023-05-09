/**
 * Problem: 15. 3Sum
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0015-3sum.ts
 * Link: https://leetcode.com/problems/3sum/
 * Leetcode: Medium
 * Date: 2023-05-08
 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    if (first > 0) {
      break;
    }

    if (i > 0 && first === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const second = nums[left];
      const third = nums[right];
      const sum = first + second + third;

      if (sum === 0) {
        result.push([first, second, third]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
