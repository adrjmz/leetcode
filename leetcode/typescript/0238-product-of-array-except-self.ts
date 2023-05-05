/**
 * Problem: 238. Product of Array Except Self
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0238-product-of-array-except-self.ts
 * Link: https://leetcode.com/problems/product-of-array-except-self/
 * Leetcode: Medium
 * Date: 2023-05-05
 *
 */

function productExceptSelf(nums: number[]): number[] {
	// 0. Initialize the result/answer array
	const answer: Array<number> = [];
	let product = 1;

	// 1. Calculate the product of all the numbers to the left of each number
	for (let i = 0; i < nums.length; i++) {
		answer[i] = product;
		product *= nums[i];
	}

	// 2. Calculate the product of all the numbers to the right of each number
	product = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= product;
		product *= nums[i];
	}

	// 3. Return the array
	return answer;
}
