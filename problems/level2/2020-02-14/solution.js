/*TEST CASE1 */
const w = 8;
const h = 12;

const solution = (w, h) => {
  let gcd = (a, b) => {
    console.log(`a == ${a}    b == ${b}`);
    return b === 0 ? a : gcd(b, a % b);
  };
  return w * h - (w + h - gcd(w, h));
};

console.log(solution(w, h));
