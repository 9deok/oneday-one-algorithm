/*TEST CASE1 */
// const x = 10;

/*TEST CASE2 */
// const x = 11;

/*TEST CASE3 */
const x = 12;

/*TEST CASE4 */
// const x = 13;

const solution = x => {
  return x % (x + "").split("").reduce((acc, cur) => acc + cur * 1, 0) == 0
    ? true
    : false;
};

console.log(solution(x));
