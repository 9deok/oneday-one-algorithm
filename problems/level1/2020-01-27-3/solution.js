/*TEST CASE1 */
const n = 118372;

const solution = n => {
  return (
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("") * 1
  );
};

console.log(solution(n));
