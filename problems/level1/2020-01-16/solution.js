/*TEST CASE1 */
// const a = 3;
// const b = 5;

/*TEST CASE2 */
// const a = 3;
// const b = 3;

/*TEST CASE3 */
const a = 5;
const b = 3;

const solution = (a, b) => {
  let min = a < b ? a : b;
  let max = a > b ? a : b;
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(solution(a, b));

/**
 * 프로그래머스 다른사람 문제 풀이
 */
const otherSolution = (a, b) => {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
};

console.log(otherSolution(a, b));
