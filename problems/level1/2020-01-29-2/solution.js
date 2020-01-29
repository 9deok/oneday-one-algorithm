/*TEST CASE1 */
const n = 12;
const m = 3;

const solution = (n, m) => {
  let max = Math.max(m, n);
  let min = Math.min(m, n);
  let gcd = getGcd(max, min);
  let lcm = getLcm(max, min, gcd);
  return [gcd, lcm];
};

const getGcd = (max, min) => {
  let remainder = max % min;
  let gcd = 0;
  if (remainder == 0) {
    gcd = min;
  } else {
    max = min;
    min = remainder;
    getGcd(max, min);
  }
  return gcd;
};

const getLcm = (max, min, gcd) => {
  return (max * min) / gcd;
};

const otherSolution = (n, m) => {
  return [getGcd2(n, m), getLcm2(n, m)];
};
const getGcd2 = (a, b) => {
  return b ? getGcd2(b, a % b) : Math.abs(a);
};
const getLcm2 = (a, b) => {
  return (a * b) / getGcd2(a, b);
};

console.log(solution(n, m));
console.log(otherSolution(n, m));
