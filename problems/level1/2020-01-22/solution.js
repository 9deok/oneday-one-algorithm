/*TEST CASE1 */
const n = 10;

const solution = n => {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = i + 1;
  }
  answer.splice(answer.indexOf(1), 1);

  answer.filter((a, i) => {
    for (let j = a; j < n; j++) {}
  });

  return answer;
};

/**
 * 프로그래머스 다른사람 풀이 미친놈
 */
const otherSolution = n => {
  const s = new Set();
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        console.log(k);
        s.delete(k);
      }
    }
  }
  //   let ss = [...s];
  //   ss.sort();

  return s;
};

console.log(otherSolution(n));
console.log(solution(n));
