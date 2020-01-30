/*TEST CASE1 */
const arr = [1, 2, 3, 4];

/*TEST CASE2 */
// const arr = [5, 5];

const solution = arr => {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
};

console.log(solution(arr));
