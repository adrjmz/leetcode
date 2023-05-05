/**
 * Array
 * Time O(N) | Space O(N)
 * Path: leetcode\javascript\0238-product-of-array-except-self.js
 * Link: https://leetcode.com/problems/product-of-array-except-self/S
 * Leetcode: Medium
 * Date: 2023-05-03
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// COMMENTED OUT FOR TESTING PURPOSES
// var productExceptSelf = function (nums) {
// 	const n = nums.length;
// 	const answer = new Array(n).fill(1);

// 	let leftProduct = 1;
// 	for (let i = 0; i < n; i++) {
// 		answer[i] *= leftProduct;
// 		leftProduct *= nums[i];
// 	}

// 	let rightProduct = 1;
// 	for (let i = n - 1; i >= 0; i--) {
// 		answer[i] *= rightProduct;
// 		rightProduct *= nums[i];
// 	}

// 	return answer;
// };
