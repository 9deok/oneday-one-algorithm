/*TEST CASE1 */
// const name = "JEROEN";
const name = "ABABA";

/*TEST CASE2 */
// const name = "JAN";

const solution = name => {
  // let init = "A".repeat(name.length);
  let nameArr = name.split("");
  let result = nameArr.reduce((acc, cur, i) => {
    let moveCount = cur.charCodeAt(0) - 65;
    console.log(moveCount);
    if (moveCount !== 0) moveCount++;
    return acc + moveCount;
  }, 0);
  return result !== 0 ? result - 1 : result;
};

const solution2 = name => {
  let nameMove = name.split("").map(a => {
    let move = 0;
    let front = a.charCodeAt(0) - 65;
    let back = 90 - a.charCodeAt(0) + 1;
    return front <= back ? front + move : back + move;
  });
  // console.log(nameMove.reduce((acc, cur) => (acc += cur), 0));
  console.log(nameMove);
  let answer = nameMove.reduce((acc, cur) => (acc += cur), 0) - 1;
  return answer !== -1 ? answer : 0;
};

console.log(solution2(name));
