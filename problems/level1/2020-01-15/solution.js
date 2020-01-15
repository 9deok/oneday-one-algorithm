/* TEST CASE1 */
// const arr = [5, 9, 7, 10];
// const divisor = 5;

/* TEST CASE2 */
// const arr = [2, 36, 1, 3];
// const divisor = 1;

/* TEST CASE3 */
const arr = [3, 2, 6];
const divisor = 10;

const solution = (arr, divisor) => {
  let answer = arr.filter(a => a % divisor === 0).sort((a, b) => a - b);
  answer = answer.length == 0 ? [-1] : answer;
  return answer;
};

console.log(solution(arr, divisor));
