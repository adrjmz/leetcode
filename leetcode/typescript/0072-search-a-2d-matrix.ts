/**
 * Problem: 72. Search a 2D Matrix
 * Path: leetcode\typescript\0072-search-a-2d-matrix.ts
 * Link: https://leetcode.com/problems/search-a-2d-matrix/
 * Leetcode: Medium
 * Date: 2023-05-10
 *
 * You must write a solution in O(log(m * n)) time complexity.
 * Note: m * n === matrix.length * matrix[0].length
 * Note: approach is similar to 0704-binary-search.ts
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  // Do 2 binary searches. 1 for row and 1 for column
  const rows = matrix.length;
  const columns = matrix[0].length;

  let top = 0;
  let bot = rows - 1;

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][columns - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (top > bot) {
    return false;
  }

  let row = Math.floor((top + bot) / 2);
  let l = 0;
  let r = columns - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else {
      return true;
    }
  }

  return false;
}
