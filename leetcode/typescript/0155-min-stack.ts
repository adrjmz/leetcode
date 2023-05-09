/**
 * Problem: 155. Min Stack
 * Path: leetcode\typescript\0155-min-stack.ts
 * Link: https://leetcode.com/problems/min-stack
 * Leetcode: Medium
 * Date: 2023-05-09
 */
// Hint Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)
// Each function should be in O(1) time.
class MinStack {
	stack: number[];
	minStack: number[];
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val: number): void {
		this.stack.push(val);
		if (val < this.minStack[this.minStack.length - 1] || this.minStack.length == 0) {
			this.minStack.push(val);
		} else {
			this.minStack.push(this.minStack[this.minStack.length - 1]);
		}
	}

	pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
