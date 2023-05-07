/**
 * Problem: 36. Valid Sudoku
 * Time O(N) | Space O(N)
 * Path: leetcode\typescript\0036-valid-sudoko.ts
 * Link: https://leetcode.com/problems/valid-sudoku/
 * Leetcode: Medium
 * Date: 2023-05-05
 * Redoing all the Medium problems from scratch to get used to TypeScript
 */

function isValidSudoku(board: string[][]): boolean {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];

      if (num === ".") {
        continue;
      }

      const grid = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (!cols[c]) {
        cols[c] = new Set();
      }
      if (!rows[r]) {
        rows[r] = new Set();
      }
      if (!squares[grid]) {
        squares[grid] = new Set();
      }

      if (cols[c].has(num) || rows[r].has(num) || squares[grid].has(num)) {
        return false;
      }

      cols[c].add(num);
      rows[r].add(num);
      squares[grid].add(num);
    }
  }

  return true;
}
