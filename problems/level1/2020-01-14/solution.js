//TEST CASE1
const arr = [1, 1, 3, 3, 0, 1, 1];
//TEST CASE2
// const arr = [4, 4, 4, 3, 3];

const solution = arr => {
  let answer = arr.filter((a, i) => a !== arr[i + 1]);
  // console.log(answer);
  return answer;
};

console.log(solution(arr));
