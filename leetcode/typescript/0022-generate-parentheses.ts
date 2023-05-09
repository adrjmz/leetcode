/**
 * Problem: 22. Generate Parentheses
 * Path: leetcode\typescript\0022-generate-parentheses.ts
 * Link: https://leetcode.com/problems/generate-parentheses
 * Leetcode: Medium
 * Date: 2023-05-09
 */

function generateParenthesis(n: number): string[] {
	const stack: string[] = [];
	const result: string[] = [];

	const backtrack = (left: number, right: number) => {
		if (left === 0 && right === 0) {
			result.push(stack.join(""));
			return;
		}

		if (left > 0) {
			stack.push("(");
			backtrack(left - 1, right);
			stack.pop();
		}

		if (right > left) {
			stack.push(")");
			backtrack(left, right - 1);
			stack.pop();
		}
	};

	backtrack(n, n);

	return result;
}
