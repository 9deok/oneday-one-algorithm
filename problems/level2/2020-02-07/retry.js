/*TEST CASE1 */
const heights = [6, 9, 5, 7, 4];

/*TEST CASE2 */
// const heights = [3, 9, 9, 3, 5, 7, 2];

/*TEST CASE3 */
// const heights = [1, 5, 3, 6, 7, 6, 5];

const solution = heights => {
  let answer = [];
  answer[0] = 0;
  heights.map((a, i, arr) => {
    for (let j = arr.length - i - 1; j > 0; j--) {
      let index = Math.abs(i - arr.length + 1);
      if (arr[index] < arr[j - 1]) {
        answer[index] = j;
        break;
      } else {
        answer[index] = 0;
      }
    }
  });
  return answer;
};

const otherSolution = heights => {
  let answer = heights.map((a, i) => {
    while (j) {
      j--;
      if (heights[j] > a) return i + 1;
    }
    return 0;
  });
  return answer;
};

// console.log(solution(heights));
console.log(otherSolution(heights));
