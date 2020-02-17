/*TEST CASE1 */
const arrangement = "()(((()())(())()))(())";

const solution = arrangement => {
  let raiser = arrangement.replace(/\(\)/g, "-");
  let pipeCount = raiser.match(/\(/g).length;
  return (
    raiser.split("").reduce((acc, cur, i, arr) => {
      if (cur === "-") {
        let all = arr.slice(0, i).join("");
        let leftCount = all.match(/\(/g);
        leftCount = leftCount !== null ? leftCount.length : 0;
        let rightCount = all.match(/\)/g);
        rightCount = rightCount !== null ? rightCount.length : 0;
        acc = acc + leftCount - rightCount;
      }
      return acc;
    }, 0) + pipeCount
  );
};

const otherSolution = arrangement => {
  let answer = 0,
    stack = [];
  arrangement = arrangement.replace(/\(\)/g, "0");
  // console.log(arrangement);
  for (let i = 0; i < arrangement.length; i++) {
    switch (arrangement[i]) {
      case "(":
        stack.push(0);
        break;
      case "0":
        stack = stack.map(v => v + 1);
        break;
      case ")":
        answer += stack[stack.length - 1] + 1;
        stack.pop();
        break;
    }
    // console.log(stack);
  }
  return answer;
};

const otherSolution2 = arrangement => {
  let cut = arrangement.split("()");
  let answer = arrangement.replace(/\(\)/g, "*").split("(").length - 1;
  let a = 0;

  for (let i = 0; i < cut.length; i++) {
    a += cut[i].split("(").length - cut[i].split(")").length;
    answer += a;
  }
  return answer;
};

// console.log(solution(arrangement));
// console.log(otherSolution(arrangement));
console.log(otherSolution2(arrangement));
