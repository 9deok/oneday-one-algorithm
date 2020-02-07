/*TEST CASE1 */
const dartResult = "1S2D*3T";

/*TEST CASE2 */
// const dartResult = "1D2S#10S";

/*TEST CASE2 */
// const dartResult = "1T2D3D#";

const solution = dartResult => {
  let dartData = dartResult.split(/(\d+)/g).slice(1);

  console.log(dartData);
  let point = [];

  return point;
};

console.log(solution(dartResult));
