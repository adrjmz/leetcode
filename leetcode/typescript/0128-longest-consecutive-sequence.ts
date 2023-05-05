/**
 * Problem: 128. Longest Consecutive Sequence
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0128-longest-consecutive-sequence.ts
 * Link: https://leetcode.com/problems/longest-consecutive-sequence
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */

function longestConsecutive(nums: number[]): number {
	const set = new Set(nums);
	let longest = 0;

	for (const num of set) {
		if (!set.has(num - 1)) {
			let curr = num;
			let currLongest = 1;

			while (set.has(curr + 1)) {
				curr++;
				currLongest++;
			}

			longest = Math.max(longest, currLongest);
		}
	}

	return longest;
}
