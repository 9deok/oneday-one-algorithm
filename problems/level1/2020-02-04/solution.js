/*TEST CASE1 */
const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

/*TEST CASE2 */
// const N = 4;
// const stages = [4, 4, 4, 4, 4];

const solution = (N, stages) => {
  let fail = [];

  for (let i = 1; i <= N; i++) {
    stages = stages.filter(a => a >= i);
    failer = stages.filter(a => a == i);
    failRate = failer.length / stages.length;
    fail.push({ stage: i, failRate: failRate });
  }

  fail.sort((a, b) => {
    if (a.failRate > b.failRate) return -1;
    if (a.failRate < b.failRate) return 1;
    return a.stage - b.stage;
  });
  let test = fail.map(a => a.stage);
  return test;
};

console.log(solution(N, stages));
