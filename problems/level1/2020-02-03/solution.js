/*TEST CASE1 */
// const n = 5;
// const arr1 = [9, 20, 28, 18, 11];
// const arr2 = [30, 1, 21, 17, 28];

/*TEST CASE1 */
const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

const solution = (arr1, arr2, n) => {
  let mapSumArr = arr1.map((a, i) => addZero((a | arr2[i]).toString(2), n));
  let answer = mapSumArr.map(a => a.replace(/1|0/g, a => (+a ? "#" : " ")));
  return answer;
};

const addZero = (number, n) => {
  return "0".repeat(n - number.length) + number;
};

console.log(solution(arr1, arr2, n));
