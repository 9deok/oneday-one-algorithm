/*TEST CASE1 */
const heights = [6, 9, 5, 7, 4];

/*TEST CASE2 */
// const heights = [3, 9, 9, 3, 5, 7, 2];

/*TEST CASE3 */
// const heights = [1, 5, 3, 6, 7, 6, 5];

const solution = heights => {
  let test = [];
  let answer = heights.map((a, i, arr) => {
    for (let j = arr.length - i - 1; j > 0; j--) {
      console.log(`i = ${i}    j = ${j}`);
      console.log(`arr[j-1] = ${arr[j - 1]}    arr[j] = ${arr[j]}`);
      if (arr[j - 1] > arr[j]) {
        console.log("haha " + j);
        test[j] = j;
        return i;
      }
    }
  });
  console.log(test);
  return answer;
};

const otherSolution = heights => {
  return heights.map((a, i, arr) => {
    console.log(i);
    for (i--; i > -1; i--) {
      console.log(`i = ${i}   arr[i] = ${arr[i]}   a = ${a}`);
      if (arr[i] > a) break;
    }

    return ++i;
  });
};

// console.log(solution(heights));
console.log(otherSolution(heights));
