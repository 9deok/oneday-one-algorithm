/*TEST CASE1 */
const s = "12233a";

/*TEST CASE2 */
// const s = "123456";

const solution = s => {
  return /(^\d{6}$)|(^\d{4}$)/g.test(s);
};

console.log(solution(s));
