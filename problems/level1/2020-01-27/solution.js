/*TEST CASE1*/
// const n = 123;

/*TEST CASE1*/
const n = 987;

const solution = n => {
  return ("" + n).split("").reduce((acc, cur) => acc * 1 + cur * 1, 0);
};

console.log(solution(n));

let test = [];
console.log(test.reduce((a, c) => a + c, 0));
