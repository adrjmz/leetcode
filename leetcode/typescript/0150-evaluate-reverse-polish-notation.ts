/**
 * Problem: 150. Evaluate Reverse Polish Notation
 * Path: leetcode\typescript\0150-evaluate-reverse-polish-notation.ts
 * Link: https://leetcode.com/problems/evaluate-reverse-polish-notation
 * Leetcode: Medium
 * Date: 2023-05-09
 * Time: O(n) Space: O(n)
 */

function evalRPN(tokens: string[]): number {
	let stack: any[] = [];

	for (let token of tokens) {
		if (token === "+") {
			stack.push(stack.pop() + stack.pop());
		} else if (token === "-") {
			stack.push(-stack.pop() + stack.pop());
		} else if (token === "*") {
			stack.push(stack.pop() * stack.pop());
		} else if (token === "/") {
			let divisor = stack.pop();
			stack.push(Math.trunc(stack.pop() / divisor));
			// This is the case where the token is a number
		} else {
			stack.push(Number(token));
		}
	}
	return stack[0];
}
