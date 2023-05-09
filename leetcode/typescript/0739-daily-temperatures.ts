/**
 * Problem: 739. Daily Temperatures
 * Path: leetcode\typescript\0739-daily-temperatures.ts
 * Link: https://leetcode.com/problems/daily-temperatures
 * Leetcode: Medium
 * Date: 2023-05-09
 */

function dailyTemperatures(temperatures: number[]): number[] {
	const stack: number[] = [];
	const result: number[] = [];

	for (let i = temperatures.length - 1; i >= 0; i--) {
		while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
			stack.pop();
		}

		result[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
		stack.push(i);
	}

	return result;
}
