/*TEST CASE 1 */
const n = 9;

/*TEST CASE 2 */
// const n = 5;

const solution = n => {
  let test = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) test.push(i);
  }
  return test.reduce((acc, a) => acc + a);
};

const otherSolution = (n, a = 0, b = 0) => {
  //   console.log("a : " + a, "  b : " + b);
  return n <= a / 2 ? b : otherSolution(n, a + 1, (b += n % a ? 0 : a));
};

const otherSolution2 = n => {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      arr.push(i);
      if (i != n / i) arr.push(n / i);
    }
  }
  return arr.reduce((acc, cur) => acc + cur);
};

// console.log(solution(n));
// console.log(otherSolution(n));
console.log(otherSolution2(n));
