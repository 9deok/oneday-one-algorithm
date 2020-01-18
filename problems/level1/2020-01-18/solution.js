/*TEST CASE1 */
// const s = "pPoooyY";

/*TEST CASE2 */
// const s = "Pyy";
const s = "fdsafds";

const solution = s => {
  return string.match(/P/gi).length == string.match(/Y/gi).length
    ? true
    : false;
};

console.log(solution(s));
