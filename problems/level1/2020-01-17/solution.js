/*TEST CASE1 */
const strings = ["sun", "bed", "car"];
const n = 1;

/*TEST CASE2 */
// const strings = ["abce", "abcd", "cdx"];
// const n = 2;

const solution = (strings, n) => {
  let answer = strings.sort((a, b) =>
    b[n].charCodeAt(0) - a[n].charCodeAt(0) > 0 ? -1 : 1
  );
  return answer;
};

/**
 * 프로그래머스 다른사람 풀이
 */
const otherSolution = (strings, n) => {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
};

// console.log(solution(strings, n));
console.log(otherSolution(strings, n));
