/*TEST CASE1 */
const s = "try HELL world";
// const s = "apple";

const solution = s => {
  let stringArray = s.split(" ");
  let answer = stringArray
    .map(a => {
      return a
        .split("")
        .map((b, i) => {
          if (i % 2 == 0) return b.toUpperCase();
          else return b.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
};

const otherSolution = s => {
  return s.toUpperCase().replace(/\w\w/g, a => {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
};

// console.log(solution(s));
console.log(otherSolution(s));
