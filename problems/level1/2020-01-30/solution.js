/*TEST CASE1 */
// const n = 6;

/*TEST CASE2 */
// const n = 1;

/*TEST CASE3 */
const n = 626331;

const solution = n => {
  let count = 0;
  if (n == 1) return 0;
  for (let i = 0; i < 500; i++) {
    let oddEven = n % 2;
    if (oddEven == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    count++;
    // console.log(n, count);
    if (n == 1) return count;
  }
  return -1;
};

/**
 * 다른사람 풀이
 *
 */
const otherSolution = num => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) =>
  num === 1
    ? acc > 500
      ? -1
      : acc
    : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = num => (num % 2 === 0 ? num / 2 : num * 3 + 1);

console.log(solution(n));
console.log(otherSolution(n));
