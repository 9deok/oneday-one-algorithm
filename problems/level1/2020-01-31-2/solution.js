/*TEST CASE1 */
const arr1 = [
  [1, 2],
  [2, 3]
];
const arr2 = [
  [3, 4],
  [5, 6]
];

/*TEST CASE2 */
// const arr1 = [[1], [2]];
// const arr2 = [[3], [5]];

const solution = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr3[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr3;
};

const otherSolution = (arr1, arr2) => {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
};

console.log(solution(arr1, arr2));
console.log(otherSolution(arr1, arr2));
