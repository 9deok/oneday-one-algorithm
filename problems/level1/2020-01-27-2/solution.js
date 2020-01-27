/*TEST CASE1 */
const n = 12345;

const solution = n => {
  return (n + "")
    .split("")
    .reverse()
    .map(a => a * 1);
};

console.log(solution(n));
