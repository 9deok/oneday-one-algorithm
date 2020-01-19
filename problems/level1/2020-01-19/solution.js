/*TEST CASE1 */
const s = "Zbcdefg";

const solution = s => {
  let test = s
    .split("")
    .sort()
    .reverse()
    .join("");
  return test;
};

console.log(solution(s));
