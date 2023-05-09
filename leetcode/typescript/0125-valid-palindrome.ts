/**
 * Problem: 125. Valid Palindrome
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0125-valid-palindrome.ts
 * Link: https://leetcode.com/problems/valid-palindrome/
 * Leetcode: Easy
 * Date: 2023-05-08
 * Redoing all the easy problems from scratch to get used to TypeScript
 */

function isPalindrome(s: string): boolean {
	const array = s
		.toLowerCase()
		.replace(/[^A-Za-z0-9]/g, "")
		.replace(/\s/g, "")
		.split("");

	for (let i = 0; i < array.length; i++) {
		const first = array[i];
		const second = array[array.length - 1 - i];

		if (first !== second) {
			return false;
		}
	}
	return true;
}
