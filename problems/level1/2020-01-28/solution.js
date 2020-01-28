/*TEST CASE1 */
// const n = 121;

/*TEST CASE2 */
const n = 3;

const solution = n => {
  return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
};

console.log(solution(n));
