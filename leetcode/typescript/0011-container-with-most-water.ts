/**
 * Problem: 11. Container With Most Water
 * Path: leetcode\typescript\0011-container-with-most-water.ts
 * Link: https://leetcode.com/problems/container-with-most-water
 * Leetcode: Medium
 * Date: 2023-05-09
 */

function maxArea(height: number[]): number {
	let max = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let area = (right - left) * Math.min(height[left], height[right]);
		max = Math.max(max, area);

		if (height[left] < height[right]) left++;
		else right--;
	}

	return max;
}
