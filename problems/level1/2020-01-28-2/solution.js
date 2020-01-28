/*TEST CASE1 */
const arr = [2, 3, 4, 1, 5, 8, 10, 13];

/*TEST CASE2 */
// const arr = [10];

const solution = arr => {
  arr.length <= 1
    ? (arr[0] = -1)
    : arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  return arr;
};

console.log(solution(arr));
